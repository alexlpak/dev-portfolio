import React from 'react';
import styled from 'styled-components';

const WindowBodyStyled = styled.div`
    display: flex;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
`;

interface WindowBodyProps {
    children?: React.ReactNode[] | React.ReactNode;
};

const WindowBody: React.FC<WindowBodyProps> = ({ children }) => {
    return (
        <WindowBodyStyled className='window-body'>{children}</WindowBodyStyled>
    );
};

export default WindowBody;