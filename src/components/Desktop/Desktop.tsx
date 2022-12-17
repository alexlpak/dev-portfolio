import React from 'react';
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
    const [loggedIn, setLoggedIn] = useSessionStorage('ap-portfolio-login', false);

    return (
        <DesktopWrapper>
            {!loggedIn && <Login handleClick={() => setLoggedIn(() => true)} />}
            <MenuBar />
            <DesktopBody />
        </DesktopWrapper>
    );
};

export default Desktop;