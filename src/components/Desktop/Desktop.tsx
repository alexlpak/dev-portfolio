import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import useSessionStorage from '../../hooks/useSessionStorage';
import Login from '../Login';
import MenuBar from '../MenuBar/MenuBar';
import DesktopBody from './DesktopBody';

const DesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

const Desktop: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <DesktopWrapper>
            <AnimatePresence>
                {!loggedIn && <Login handleClick={() => setLoggedIn(() => true)} />}
            </AnimatePresence>
            <MenuBar />
            <DesktopBody />
        </DesktopWrapper>
    );
};

export default Desktop;