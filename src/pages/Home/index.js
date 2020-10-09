import React, { useEffect, useState, useRef } from 'react';
import LinkedHeader from '../../components/LinkedHeader';
import LoadingPage from '../../components/LoadingPage';
import { useParams } from 'react-router-dom';
import getProfileImage, { getKidStatus } from '../../services/profiles';
import { HomeWrapper } from './styles';

const Home = () => {
    const { profileName } = useParams();
    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState('flex');

    const shouldLoad = () =>
        setTimeout(() => {
            setLoading('none');
        }, 500);

    useEffect(() => {
        shouldLoad();
        getProfileImage(profileName, setProfileImage);
    }, []);

    return (
        <>
            <LoadingPage
                style={{
                    position: 'absolute',
                    zIndex: 99,
                    display: loading,
                }}
                profileName={profileName}
            ></LoadingPage>
            <LinkedHeader
                profileImage={profileImage}
                kidMode={getKidStatus(profileName)}
            />
            <HomeWrapper></HomeWrapper>
        </>
    );
};

export default Home;
