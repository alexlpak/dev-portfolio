import React from 'react';
import styled from 'styled-components';
import GitHubButton from './GitHubButton';

const MenuBarWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    width: 100%;
    padding: .5rem;
    background-color: #212121;
    color: white;
`;

const MenuBar: React.FC = () => {
    return (
        <MenuBarWrapper>
            <GitHubButton />
            Welcome!
        </MenuBarWrapper>
    );
};

export default MenuBar;