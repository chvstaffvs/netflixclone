import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between:
    background-color: rgba(20, 20, 20,1);
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
