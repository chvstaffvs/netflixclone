import React, { useEffect, useState } from 'react';
import UserTag from '../../components/UserTag';
import {
    Container,
    Header,
    Div,
    Section,
    GenericDiv,
    ProfileWrapper,
    ProfileListWrapper,
} from './styles';
import { Span } from '../../Styles/Span/styles';
import Logo from '../../assets/images/netflix-2015-logo.svg';
import { profileArray } from '../../services/profiles';

const ChooseProfile = () => {
    const [profiles, setProfiles] = useState([]);

    const getProfiles = async () => {
        setProfiles(profileArray);
    };
    useEffect(() => {
        getProfiles();
    }, []);

    return (
        <Container>
            <Header>
                <img alt="NetflixLogo" src={Logo} />
            </Header>
            <Section>
                <ProfileListWrapper>
                    <h2>Quem está assistindo?</h2>
                    <GenericDiv>
                        {profiles.map((profile) => (
                            <a href={`/${profile.name}`}>
                                <Div>
                                    <UserTag
                                        src={profile.image}
                                        divClassName="userTag"
                                    />
                                    <Span
                                        className="profileName"
                                        style={{
                                            lineHeight: '1.2em',
                                            minHeight: '1.8em',
                                            margin: '0.6em 0',
                                        }}
                                    >
                                        {profile.name}
                                    </Span>
                                </Div>
                            </a>
                        ))}
                    </GenericDiv>
                </ProfileListWrapper>
                <Div>
                    <ProfileWrapper>GERENCIAR PERFIS</ProfileWrapper>
                </Div>
            </Section>
        </Container>
    );
};

export default ChooseProfile;
