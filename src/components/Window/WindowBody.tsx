import React from 'react';
import styled from 'styled-components';

const WindowBodyStyled = styled.div`
    display: flex;
    position: relative;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
    overflow: auto;
    flex-wrap: wrap;
`;

interface WindowBodyProps {
    children?: React.ReactNode[] | React.ReactNode;
};

const WindowBody: React.FC<WindowBodyProps> = ({ children }) => {
    return (
        <WindowBodyStyled>
            {children}
        </WindowBodyStyled>
    );
};

export default WindowBody;