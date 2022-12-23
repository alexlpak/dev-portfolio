import { faFolder } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import styled from 'styled-components';
import File from '../File/File';
import DesktopFileGrid from './DesktopFileGrid';
import { useWindowGlobalContext } from '../../contexts/WindowGlobalContext';
import { Directory, useFileSystemContext } from '../../contexts/FileSystemContext';
import Window from '../Window/Window';
import uniqid from 'uniqid';
import Wallpaper from './Wallpaper';
import Dock from '../Dock/Dock';
import { AnimatePresence } from 'framer-motion';

const DesktopBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: white;
    height: 100%;
    width: 100%;
    padding: 1rem;
    background-size: 300% 300%;
    background-image: linear-gradient(
            -45deg, 
            rgba(59,173,227,1) 0%, 
            rgba(87,111,230,1) 25%, 
            rgba(152,68,183,1) 51%, 
            rgba(255,53,127,1) 100%
    );  
    animation: AnimateBG 20s ease infinite;
    @keyframes AnimateBG { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    };
`;

const DesktopBody: React.FC = () => {
    const { files } = useFileSystemContext();
    const { windows, setWindows } = useWindowGlobalContext();

    const constraintsRef = useRef(null);

    return (
        <DesktopBodyWrapper ref={constraintsRef}>
            <Wallpaper />
            <DesktopFileGrid>
                {files.filter(file => file.directory === 'Desktop').map(rootDirectory => {
                    const addNewWindow = (directory: Directory) => {
                        const windowAlreadyExists = windows.find(window => window.currentDirectory === directory);
                        setWindows(windows => {
                            if (!windowAlreadyExists) return [...windows, { id: uniqid(), initDirectory: directory }];
                            else return windows;
                        });
                    };
                    const folders = rootDirectory.folders.map((directory, index) => {
                        return (
                            <File
                                key={`${directory.directory}-${index}`}
                                filename={directory.directory}
                                icon={faFolder}
                                onDoubleClick={() => addNewWindow(directory)}
                            />
                        );
                    });
                    const files = rootDirectory.files.map((file, index) => {
                        return (
                            <File
                                key={`${file.filename}-${index}`}
                                filename={file.filename}
                                icon={file.icon}
                                onDoubleClick={file.onOpen}
                            />
                        );
                    });
                    return [...folders, ...files];
                })}
            </DesktopFileGrid>
            <AnimatePresence>
                {windows.map(window => {
                    return (
                        <Window
                            dragConstraints={constraintsRef}
                            key={window.id}
                            initDirectory={window.initDirectory}
                            id={window.id}
                        />
                    );
                })}
            </AnimatePresence>
            {process.env.NODE_ENV === 'development' && <Dock />}
        </DesktopBodyWrapper>
    );
};

export default DesktopBody;