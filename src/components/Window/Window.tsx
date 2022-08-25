import React, { useRef, useState, createContext, useContext } from 'react';
import WindowMenuBar from './WindowMenuBar';
import WindowContents from './WindowContents';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import WindowLocation from './WindowLocation';
import { Directory, useFileSystemContext } from '../../contexts/FileSystemContext';
import { useWindowGlobalContext } from '../../contexts/WindowGlobalContext';

const WindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: .5rem;
    border: none;
    overflow: hidden;
    box-shadow: 0rem .125rem .125rem rgb(0 0 0 / 25%);
`;

interface WindowContextType {
    currentDirectory: Directory;
    setCurrentDirectory: React.Dispatch<React.SetStateAction<Directory>>;
    rootDirectory: Directory;
    setRootDirectory: React.Dispatch<React.SetStateAction<Directory>>;
};

const WindowContext = createContext<WindowContextType>({} as WindowContextType);

export const useWindowContext = () => {
    return useContext(WindowContext);
};

const Window: React.FC = () => {
    const windowRef = useRef(null);
    const { files } = useFileSystemContext();
    const { windowZIndex, setWindowZIndex, lastClickedWindow, setLastClickedWindow } = useWindowGlobalContext();

    const [currentDirectory, setCurrentDirectory] = useState(files[0] as Directory);
    const [rootDirectory, setRootDirectory] = useState(files[0] as Directory);
    const [localZIndex, setLocalZIndex] = useState(windowZIndex);

    const value = {
        currentDirectory, setCurrentDirectory,
        rootDirectory, setRootDirectory
    };

    const setWindowTop = () => {
        if (lastClickedWindow === windowRef) return;
        setLastClickedWindow(() => windowRef);
        setWindowZIndex(index => index + 1);
        setLocalZIndex(() => windowZIndex + 1);
    };

    return (
        <WindowContext.Provider value={value}>
            <Draggable
                handle='.handle'
                nodeRef={windowRef}
                bounds='body'
                onStart={setWindowTop}
            >
                <WindowWrapper
                    style={{ zIndex: localZIndex }}
                    ref={windowRef}
                    onClick={setWindowTop}
                >
                    <WindowMenuBar className='handle' />
                    <WindowLocation />
                    <WindowContents />
                </WindowWrapper>
            </Draggable>
        </WindowContext.Provider>
    );
};

export default Window;