import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/images/netflix-2015-logo.svg';

function Header({ children }) {
    return (
        <Container>
            <img alt="NetflixLogo" src={Logo} />
            {children}
        </Container>
    );
}

export default Header;
