import React from 'react';
import styled from 'styled-components';
import { Directory, useFileSystemContext } from '../../contexts/FileSystemContext';
import { useWindowContext } from './Window';

const WindowNavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3b3b3b;
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
    const { rootDirectory, setRootDirectory, setCurrentDirectory } = useWindowContext();

    const handleNavItemClick = (folder: Directory) => {
        setCurrentDirectory(() => folder);
        setRootDirectory(() => folder);
    };

    return (
        <WindowNavigationWrapper>
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