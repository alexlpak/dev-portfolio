import React from 'react';
import WindowNavigation from './WindowNavigation';
import styled from 'styled-components';

const WindowBodyWrapper = styled.div`
    display: flex;
    background-color: white;
    color: black;
    height: 10rem;
`;

const WindowBody: React.FC = () => {
    return (
        <WindowBodyWrapper>
            <WindowNavigation />
            WindowBody
        </WindowBodyWrapper>
    );
};

export default WindowBody;