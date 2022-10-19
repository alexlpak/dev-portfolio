import React, { useRef, useState, createContext, useContext, useEffect } from 'react';
import WindowMenuBar from './WindowMenuBar';
import WindowContents from './WindowContents';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import WindowLocation from './WindowLocation';
import { Directory, EmptyFile } from '../../contexts/FileSystemContext';
import { useWindowGlobalContext } from '../../contexts/WindowGlobalContext';
import { FileType } from '../../contexts/FileSystemContext';

const WindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: .5rem;
    border: none;
    overflow: hidden;
    resize: both;
    min-width: 40rem;
    min-height: 20rem;
`;

interface WindowContextType {
    currentDirectory: Directory;
    setCurrentDirectory: React.Dispatch<React.SetStateAction<Directory>>;
    selectedFile: FileType;
    setSelectedFile: React.Dispatch<React.SetStateAction<FileType>>;
    rootDirectory: Directory;
    setRootDirectory: React.Dispatch<React.SetStateAction<Directory>>;
    windowRef: React.RefObject<HTMLDivElement>;
    windowId: string;
};

const WindowContext = createContext<WindowContextType>({} as WindowContextType);

export const useWindowContext = () => {
    return useContext(WindowContext);
};

interface WindowProps {
    initDirectory: Directory;
    id: string;
};

const Window: React.FC<WindowProps> = ({ initDirectory, id }) => {
    const windowRef = useRef(null);
    const windowId = id;

    const { windowZIndex, lastClickedWindow } = useWindowGlobalContext();

    const [currentDirectory, setCurrentDirectory] = useState(initDirectory as Directory);
    const [rootDirectory, setRootDirectory] = useState({} as Directory);
    const [localZIndex, setLocalZIndex] = useState(windowZIndex.current);
    const [selectedFile, setSelectedFile] = useState({} as FileType);

    const value = {
        currentDirectory, setCurrentDirectory,
        rootDirectory, setRootDirectory, windowRef, windowId,
        selectedFile, setSelectedFile
    };

    const setWindowTop = () => {
        if (!lastClickedWindow.current || !windowRef.current) return;
        if (lastClickedWindow.current === windowRef.current) return;
        lastClickedWindow.current = windowRef;
        windowZIndex.current += 1;
        setLocalZIndex(() => {
            if (windowZIndex.current) return windowZIndex.current + 1;
            else return localZIndex;
        });
    };

    useEffect(() => {
        setSelectedFile(() => EmptyFile);
    }, [currentDirectory, setSelectedFile]);

    return (
        <WindowContext.Provider value={value}>
            <Draggable
                handle='.handle'
                nodeRef={windowRef}
                bounds='body'
                onStart={setWindowTop}
            >
                <WindowWrapper
                    style={{
                        zIndex: localZIndex
                    }}
                    ref={windowRef}
                    onClick={setWindowTop}
                    id={windowId}
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