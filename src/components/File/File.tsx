import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const FileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    gap: .5rem;
`;

const FileIcon = styled(FontAwesomeIcon)`
    height: 2.5rem;
    filter: drop-shadow(0rem .125rem .125rem rgb(0 0 0 / 25%));
    &:hover {
        cursor: pointer;
    };
`;

const FileName = styled.span`
    padding: .25rem;
`;

interface FileProps {
    icon: IconProp,
    filename: string;
};

const File: React.FC<FileProps> = ({ icon, filename }) => {
    const fileRef = useRef(null);

    return (
        <Draggable
            nodeRef={fileRef}
            bounds='body'
        >
            <FileWrapper ref={fileRef}>
                <FileIcon icon={icon} />
                <FileName>{filename}</FileName>
            </FileWrapper>
        </Draggable>
    );
};

export default File;