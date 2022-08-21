import React from 'react';
import WindowMenuBar from './WindowMenuBar';
import WindowBody from './WindowBody';
import styled from 'styled-components';

const WindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    border: none;
    overflow: hidden;
`;

const Window: React.FC = () => {
    return (
        <WindowWrapper>
            <WindowMenuBar />
            <WindowBody />
        </WindowWrapper>
    );
};

export default Window;