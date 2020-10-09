import styled from 'styled-components';
import { Span } from '../../Styles/Span/styles';

export const Container = styled.body`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: rgb(20, 20, 20);
`;

export const GenericDiv = styled.div`
    display: flex;
    margin: 2em 0;
    max-width: 80vw;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: auto;
    height: 100%;
    background-color: rgb(20, 20, 20);

    h2 {
        color: white;
        margin: 0;
        font-size: 3.5vw;
        font-weight: 300;
    }
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    margin: 0 2vw 0 0;
    cursor: pointer;

    &:hover span {
        color: white;
    }
    &:hover .userTag:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 10vw;
        width: 10vw;
        border: 2px solid rgba(255, 255, 255, 0.7);
    }
`;

export const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: rgb(20, 20, 20);
    background: linear-gradient(
        180deg,
        rgba(5, 5, 5, 1),
        rgba(10, 10, 10, 1),
        rgba(15, 15, 15, 1),
        rgba(20, 20, 20, 1)
    );
    height: 72px;
    padding: 0 4%;

    img {
        width: 5.8rem;
        height: auto;
    }
`;

export const ProfileWrapper = styled(Span)`
    padding: 0.5em 1.5em;
    border: 1px solid grey;

    &:hover {
        border: 1px solid white;
    }
`;

export const ProfileListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;
