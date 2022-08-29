import React from 'react';
import styled from 'styled-components';

const DesktopFileGridWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content;
    gap: 1rem;
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