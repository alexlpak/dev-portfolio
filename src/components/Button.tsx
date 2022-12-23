import styled from 'styled-components';

const Button = styled.button`
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: .5rem;
    transition: all 100ms ease;
    &:hover {
        scale: 1.05;
        cursor: pointer;
    };
`;

export default Button;