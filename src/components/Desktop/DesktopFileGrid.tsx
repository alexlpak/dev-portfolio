import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animations } from '../../styles/animations';

const DesktopFileGridWrapper = styled(motion.div)`
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
        <DesktopFileGridWrapper variants={animations} initial='hidden' animate='visible' exit='hidden'>
            {children}
        </DesktopFileGridWrapper>
    );
};

export default DesktopFileGrid;