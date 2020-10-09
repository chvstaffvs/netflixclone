import styled from 'styled-components';

export const Span = styled.span`
    font-family: 'Babel Neue', sans-serif;
    font-size: 1rem;
    color: ${({ color }) => color || 'grey'};
    text-overfloew: ellipsis;
`;
