import React from 'react';
import styled from 'styled-components';

const WindowMenuBarWrapper = styled.div`
    padding: .5rem;
    color: white;
    background-color: #212121;
    &:hover {
        cursor: grab;
    };
    &:active {
        cursor: grabbing;
    };
`;

const WindowMenuBar: React.FC = () => {
    return (
        <WindowMenuBarWrapper>
            WindowMenuBar
        </WindowMenuBarWrapper>
    );
};

export default WindowMenuBar;