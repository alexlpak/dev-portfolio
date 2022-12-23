import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExternalLink } from '@fortawesome/free-solid-svg-icons';

const ButtonLinkStyled = styled.a`
    padding: .5rem;
    background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: .5rem;
    text-decoration: none;
    text-align: center;
    transition: all 100ms ease;
    &:visited {
        color: inherit;
    };
    &:hover {
        scale: 1.05;
    };
    &:active {
        scale: 0.95;
    };
`;

const ButtonLinkLabel = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
`;

const FileSizeLabel = styled.span`
    font-size: .75rem;
`;

interface ButtonLinkProps {
    href: string;
    target: string;
    children?: React.ReactNode | React.ReactNode[];
    download?: boolean;
    filesize?: string;
};

const ButtonLink:React.FC<ButtonLinkProps> = ({ href, target, children, download, filesize }) => {
    return (
        <ButtonLinkStyled href={href} target={target}>
            <ButtonLinkLabel>
                {children}
                <FontAwesomeIcon icon={download ? faDownload : faExternalLink} />
            </ButtonLinkLabel>
            {download && filesize && <FileSizeLabel>{filesize}</FileSizeLabel>}
        </ButtonLinkStyled>
    );
};

export default ButtonLink;