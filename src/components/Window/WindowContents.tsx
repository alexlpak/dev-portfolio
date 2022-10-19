import React from 'react';
import WindowNavigation from './WindowNavigation';
import styled from 'styled-components';
import File from '../File/File';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import WindowBody from './WindowBody';
import { useWindowContext } from './Window';
import WindowPreview from './WindowPreview';
import { useFileSystemContext } from '../../contexts/FileSystemContext';

const WindowContentsWrapper = styled.div`
    display: flex;
    background-color: white;
    color: black;
    flex-grow: 1;
`;

const WindowContents: React.FC = () => {
    const { currentDirectory, setCurrentDirectory } = useWindowContext();
    const { selectedFile, setSelectedFile } = useFileSystemContext();
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
                            onSelect={(isSelected) => {
                                if (isSelected) setSelectedFile(() => file);
                            }}
                        />
                    )
                })}
            </WindowBody>
            {selectedFile.filename && <WindowPreview
                title={selectedFile.filename}
                thumbnailSrc={selectedFile.preview.thumbnailSrc || 'white'}
                description={selectedFile.preview?.description || ''}
                tags={selectedFile.preview?.tags || []}
                repo={selectedFile.preview.repo || ''}
                href={selectedFile.preview.href || ''}
            />}
        </WindowContentsWrapper>
    );
};

export default WindowContents;