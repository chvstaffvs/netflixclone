import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header';
import { Div, GenericDiv, LupeWrapper } from './styles';
import Bell from '../../assets/images/bell.svg';
import Lupe from '../../assets/images/magnifying-glass.svg';
import Gift from '../../assets/images/gift.svg';
import Down from '../../assets/images/down-arrow.svg';

const LupeImage = ({ searchState }) => {
    const [search, setSearch] = useState(false);

    const setSearchState = (newSearchState) => {
        setTimeout(() => setSearch(newSearchState), newSearchState ? 0 : 400);
    };

    if (searchState) setSearchState(searchState);

    return !search ? (
        <a onClick={() => setSearchState(true)}>
            <img alt="Lupa" src={Lupe} />
        </a>
    ) : (
        <LupeWrapper>
            <img alt="Lupa" src={Lupe} />
            <input
                style={{ outline: 'none', border: 0 }}
                placeholder="Títulos, gente e gêneros"
                autoFocus
                onBlur={() => {
                    setSearchState(false);
                }}
            />
        </LupeWrapper>
    );
};

const Links = () => {
    const browse = useMediaQuery({ maxWidth: 885 });

    let width = window.innerWidth;

    return !browse ? (
        <Div>
            <a>Início</a>
            <a>Séries</a>
            <a>Filmes</a>
            <a>Mais Recentes</a>
            <a>Minha Lista</a>
        </Div>
    ) : (
        <Div>
            <a>Navegar</a>
        </Div>
    );
};

const LinkedHeader = ({ profileImage, kidMode, searchState }) => (
    <Header>
        <GenericDiv>
            <Links />
            <Div>
                <LupeImage />
                {kidMode ? <a className="infantil">infantil</a> : <></>}
                <a>
                    <img alt="Presente" src={Gift} />
                </a>
                <a>
                    <img alt="Sino" src={Bell} />
                </a>
                <a className="profileLink">
                    <img
                        className="profileImg"
                        alt="Foto de perfil"
                        src={profileImage}
                    />
                    <img alt="options" src={Down} />
                </a>
            </Div>
        </GenericDiv>
    </Header>
);

export default LinkedHeader;
