import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loading';
import { Center, UserTagStyle as UserTag } from './styles';
import Header from '../../components/Header';
import getProfileImage from '../../services/profiles';

const LoadingPage = ({ profileName = 'Gustavo', ...rest }) => {
    const [profileImg, setProfileImage] = useState(null);

    useEffect(() => {
        getProfileImage(profileName, setProfileImage);
    }, []);

    return (
        <div {...rest}>
            <Header />
            <Center>
                <Loader />
                <UserTag
                    src={profileImg}
                    width="4vw"
                    height="4vw"
                    style={{ minHeight: 0, minWidth: 0 }}
                />
            </Center>
        </div>
    );
};

export default LoadingPage;
