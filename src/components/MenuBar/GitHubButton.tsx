import React from 'react';
import styled from 'styled-components';
import GitHubLogo from '../../assets/svg/GitHubLogo.svg';

const GitHubIcon = styled.a.attrs({
    target: '_blank',
    href: 'https://github.com/alexlpak',
})`
    background-image: url(${GitHubLogo});
    height: 1rem;
    width: 1rem;
`;

const GitHubButton: React.FC = () => {
    return (
        <GitHubIcon />
    );
};

export default GitHubButton;