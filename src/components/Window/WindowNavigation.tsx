import React from 'react';
import styled from 'styled-components';
import { Directory, useFileSystemContext } from '../../contexts/FileSystemContext';
import { theme } from '../../styles/theme';
import { useWindowContext } from './Window';
import { motion } from 'framer-motion';

const WindowNavigationWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.darkSolid};
    color: white;
`;

interface NavItemProps {
    $selected?: boolean;
};

const NavItem = styled.div<NavItemProps>`
    padding: 1rem;
    background-color: ${({ $selected }) => $selected ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0)'};
    transition: all 250ms ease;
    &:hover {
        cursor: pointer;
    };
`;

const WindowNavigation: React.FC = () => {
    const { files } = useFileSystemContext();
    const { rootDirectory, currentDirectory, setRootDirectory, setCurrentDirectory } = useWindowContext();

    const handleNavItemClick = (folder: Directory) => {
        setCurrentDirectory(() => folder);
        setRootDirectory(() => folder);
    };

    return (
        <WindowNavigationWrapper
            key={`navigation-${currentDirectory}`}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            {files.map(folder => {
                return (
                    <NavItem
                        $selected={folder.directory === rootDirectory.directory}
                        key={folder.directory}
                        onClick={() => handleNavItemClick(folder)}
                    >
                        {folder.directory}
                    </NavItem>
                )
            })}
        </WindowNavigationWrapper>
    );
};

export default WindowNavigation;