import React from 'react';
import WindowNavigation from './WindowNavigation';
import styled from 'styled-components';
import File from '../File/File';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import WindowBody from './WindowBody';
import { useWindowContext } from './Window';
import WindowPreview from './WindowPreview';
import { theme } from '../../styles/theme';
import { AnimatePresence, motion } from 'framer-motion';

const WindowContentsWrapper = styled.div`
    display: flex;
    background-color: ${theme.colors.darkTransparent};
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
            <AnimatePresence mode='wait'>
                {selectedFile.filename && selectedFile.preview &&
                    <motion.div
                        transition={{ duration: .25, type: 'spring' }}
                        initial={{ x: '18rem' }}
                        animate={{ x: '0rem' }}
                        exit={{ x: '18rem' }}
                        key={selectedFile?.preview?.title}
                        style={{ height: '100%' }}
                    >
                        <WindowPreview
                            {...selectedFile?.preview}
                        />
                    </motion.div>
                }
            </AnimatePresence>
        </WindowContentsWrapper>
    );
};

export default WindowContents;