import React from 'react';
import styled from 'styled-components';
import MenuBar from '../MenuBar/MenuBar';
import DesktopBody from './DesktopBody';

const DesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

const Desktop: React.FC = () => {
    return (
        <DesktopWrapper>
            <MenuBar />
            <DesktopBody />
        </DesktopWrapper>
    );
};

export default Desktop;