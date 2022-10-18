import React from 'react';
import styled from 'styled-components';

const DesktopFileGridWrapper = styled.div`
    display: flex;
    gap: 1rem;
    height: 100%;
    width: 100%;
`;

interface DesktopFileGridProps {
    children: React.ReactNode | React.ReactNode[];
};

const DesktopFileGrid: React.FC<DesktopFileGridProps> = ({ children }) => {
    return (
        <DesktopFileGridWrapper>
            {children}
        </DesktopFileGridWrapper>
    );
};

export default DesktopFileGrid;