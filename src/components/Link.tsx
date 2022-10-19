import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: unset;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    &:visited {
        color: unset;
    }
`;

export default Link;