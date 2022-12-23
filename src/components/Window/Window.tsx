import React, { useRef, useState, createContext, useContext, useEffect } from 'react';
import WindowMenuBar from './WindowMenuBar';
import WindowContents from './WindowContents';
import styled from 'styled-components';
import WindowLocation from './WindowLocation';
import { Directory, EmptyFile } from '../../contexts/FileSystemContext';
import { useWindowGlobalContext } from '../../contexts/WindowGlobalContext';
import { FileType } from '../../contexts/FileSystemContext';
import { motion, useDragControls } from 'framer-motion';

const WindowWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: .5rem;
    overflow: hidden;
    resize: both;
    width: 40rem;
    height: 40rem;
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
    dragConstraints?: React.RefObject<Element>;
};

const Window: React.FC<WindowProps> = ({ initDirectory, id, dragConstraints }) => {
    const windowRef = useRef(null);
    const windowId = id;

    const { windowZIndex, lastClickedWindow } = useWindowGlobalContext();

    const [currentDirectory, setCurrentDirectory] = useState(initDirectory as Directory);
    const [rootDirectory, setRootDirectory] = useState({} as Directory);
    const [localZIndex, setLocalZIndex] = useState(windowZIndex.current);
    const [selectedFile, setSelectedFile] = useState({} as FileType);

    const controls = useDragControls();

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

    const startDrag = (event: PointerEvent | React.PointerEvent<Element>) => {
        controls.start(event);
    };
    
    useEffect(() => {
        setWindowTop();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setSelectedFile(() => EmptyFile);
    }, [currentDirectory, setSelectedFile]);

    return (
        <WindowWrapper
            drag
            dragConstraints={dragConstraints}
            dragMomentum={false}
            dragControls={controls}
            dragListener={false}
            style={{
                zIndex: localZIndex
            }}
            ref={windowRef}
            onClick={setWindowTop}
            id={windowId}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', duration: 0.25 }}
            key={windowId}
        >
            <WindowContext.Provider value={value}>
                <WindowMenuBar onPointerDown={startDrag} />
                <WindowLocation />
                <WindowContents />
            </WindowContext.Provider>
        </WindowWrapper>
    );
};

export default Window;