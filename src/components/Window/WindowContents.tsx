import React from 'react';
import WindowNavigation from './WindowNavigation';
import styled from 'styled-components';
import File from '../File/File';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import WindowBody from './WindowBody';
import { useWindowContext } from './Window';
import WindowPreview from './WindowPreview';

const WindowContentsWrapper = styled.div`
    display: flex;
    background-color: rgb(0 0 0 / 25%);
    backdrop-filter: blur(8px);
    color: white;
    flex-grow: 1;
`;

const WindowContents: React.FC = () => {
    const { currentDirectory, setCurrentDirectory, selectedFile, setSelectedFile } = useWindowContext();
    return (
        <WindowContentsWrapper>
            <WindowNavigation />
            <WindowBody>
                {currentDirectory?.folders?.map(folder => {
                    return (
                        <File
                            color='white'
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
                            color='white'
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
            {selectedFile.filename && selectedFile.preview && <WindowPreview
                title={selectedFile.filename}
                thumbnailSrc={selectedFile?.preview?.thumbnailSrc || 'white'}
                description={selectedFile?.preview?.description || ''}
                tags={selectedFile?.preview?.tags || []}
                repo={selectedFile?.preview?.repo || ''}
                href={selectedFile?.preview?.href || ''}
            />}
        </WindowContentsWrapper>
    );
};

export default WindowContents;