import React from 'react';
import WindowNavigation from './WindowNavigation';
import styled from 'styled-components';
import File from '../File/File';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import WindowBody from './WindowBody';
import { useWindowContext } from './Window';

const WindowContentsWrapper = styled.div`
    display: flex;
    background-color: white;
    color: black;
    flex-grow: 1;
`;

const WindowContents: React.FC = () => {
    const { currentDirectory, setCurrentDirectory } = useWindowContext();

    return (
        <WindowContentsWrapper>
            <WindowNavigation />
            <WindowBody>
                {currentDirectory?.folders?.map(folder => {
                    return (
                        <File
                            color='blue'
                            key={folder.directory}
                            filename={folder.directory}
                            icon={faFolder}
                            onDoubleClick={() => setCurrentDirectory(folder)}
                        />
                    )
                })}
                {currentDirectory?.files?.map(file => {
                    return (
                        <File
                            color='orange'
                            key={file.filename}
                            filename={file.filename}
                            icon={file.icon}
                            onDoubleClick={file.onOpen}
                        />
                    )
                })}
            </WindowBody>
        </WindowContentsWrapper>
    );
};

export default WindowContents;