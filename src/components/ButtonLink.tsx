import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const ButtonLinkStyled = styled.a`
    padding: .5rem;
    background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: .5rem;
    text-decoration: none;
    text-align: center;
    &:visited {
        color: inherit;
    }
`;

interface ButtonLinkProps {
    href: string;
    target: string;
    children?: React.ReactNode | React.ReactNode[];
};

const ButtonLink:React.FC<ButtonLinkProps> = ({ href, target, children }) => {
    return (
        <ButtonLinkStyled href={href} target={target}>
            {children}
            <FontAwesomeIcon icon={faExternalLink} />
        </ButtonLinkStyled>
    );
};

export default ButtonLink;