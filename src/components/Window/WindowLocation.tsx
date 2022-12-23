import { faBars, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Directory } from '../../contexts/FileSystemContext';
import { useWindowGlobalContext } from '../../contexts/WindowGlobalContext';
import { useWindowContext } from './Window';

const WindowLocationWrapper = styled.div`
    display: flex;
    gap: .5rem;
    background-color: #c5c5c5;
    padding: .5rem;
`;

const WindowPath = styled.input.attrs({
    type: 'text',
    disabled: true
})`
    border: none;
    border-radius: .25rem;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    padding: .5rem;
    background-color: white;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

const NavButton = styled.button.attrs({
    type: 'button'
})`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 2rem;
    border-radius: .25rem;
    &:hover {
        cursor: pointer;
    };
`;

interface WindowLocationProps {
    handleToggleNavigation?: () => void;
};

const WindowLocation: React.FC<WindowLocationProps> = ({ handleToggleNavigation }) => {
    const { currentDirectory, rootDirectory, setCurrentDirectory, setRootDirectory, windowId } = useWindowContext();
    const { windows } = useWindowGlobalContext();

    const [path, setPath] = useState([] as string[]);

    const getWindowPath = (directory: Directory) => {
        if (directory === currentDirectory) setPath((path) => [...path, currentDirectory.directory]);
        if (directory.parent) {
            setPath((path) => directory.parent ? [...path, directory.parent.directory] : path);
            getWindowPath(directory.parent);
        }
        else setRootDirectory(directory);
    };

    const navigateToParent = (directory: Directory) => {
        if (directory.parent) setCurrentDirectory(directory.parent);
    };

    useEffect(() => {
        setPath(() => []);
        getWindowPath(currentDirectory);
        const currentWindow = windows.find(window => window.id === windowId);
        if (currentWindow) currentWindow.currentDirectory = currentDirectory;
        // eslint-disable-next-line
    }, [currentDirectory]);

    return (
        <WindowLocationWrapper>
            <NavButton onClick={handleToggleNavigation}>
                <FontAwesomeIcon icon={faBars} />
            </NavButton>
            <NavButton
                onClick={() => navigateToParent(currentDirectory)}
                disabled={!currentDirectory.parent}
            >
                <FontAwesomeIcon icon={faCaretLeft} />
            </NavButton>
            <WindowPath value={path[0] === rootDirectory.directory ? path.join('/') : path.reverse().join('/')} />
        </WindowLocationWrapper>
    );
};

export default WindowLocation;