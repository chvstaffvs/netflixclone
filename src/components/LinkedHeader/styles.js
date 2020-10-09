import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    align-items: center;
    background: rgb(20, 20, 20);
    background: linear-gradient(
        180deg,
        rgba(5, 5, 5, 1),
        rgba(10, 10, 10, 1),
        rgba(15, 15, 15, 1),
        rgba(20, 20, 20, 1)
    );
    .infantil {
        text-transform: uppercase;
    }
    .profileImg {
        height: 2rem;
        width: auto;
        border-radius: 4px;
        margin-right: 0.6rem;
    }
    .profileLink {
        display: flex;
        align-items: center;
    }

    .profileLink img:nth-child(2) {
        height: 0.6rem;
        width: auto;
    }

    a {
        margin-left: 1.6rem;
        width: auto;
        height: auto;
        font-size: 14px;
        color: #fff;
        transition: all 300ms;

        &:hover {
            opacity: 80%;
            cursor: pointer;
        }

        img {
            height: 1.2rem;
            width: auto;
        }
    }
`;

export const GenericDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: rgb(20, 20, 20);
    background: linear-gradient(
        180deg,
        rgba(5, 5, 5, 1),
        rgba(10, 10, 10, 1),
        rgba(15, 15, 15, 1),
        rgba(20, 20, 20, 1)
    );
`;

export const LupeWrapper = styled.div`
    background-color: rgb(20, 20, 20);
    border: 1px solid white;
    display: flex;
    padding: 0.3rem 0.3rem;
    input {
        color: white;
        flex: 5;
        background-color: rgb(20, 20, 20);
        width: 1rem;
        transition: width 0.4s ease-in-out;
        -webkit-transition: width 0.4s ease-in-out;
        &:focus {
            width: 12rem;
        }
        &:not(:focus) {
            width: 1rem;
        }
    }
    img {
        height: 1.2rem;
        width: auto;
        margin: 0.1rem 0.2rem;
    }
`;
