import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
    position: absolute;
    top: 50;
    z-index: 99;
    left: 50;
    border-radius: 50%;
    width: ${({ width }) => width || '7vw'};
    height: ${({ height }) => height || '7vw'};
    display: grid;
    grid-template: 1em;

    &:before {
        content: '';
        grid-column: 1;
        grid-row: 1;
        border-top: 3px solid #e40914;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
    }
`;

export default Loader;
