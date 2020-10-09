import styled from 'styled-components';

const UserTag = styled.img`
    height: ${({ height }) => height || '10vw'};
    width: ${({ width }) => width || '10vw'};
    min-width: 84px;
    min-height: 84px;
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
`;

export const Div = styled.div`
    position: relative;
    &:after {
        border-radius: ${({ borderRadius }) => borderRadius || '3px'};
        border: 0;
    }
`;

export default UserTag;
