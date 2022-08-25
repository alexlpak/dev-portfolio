import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const FileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    flex-grow: 0;
    flex-shrink: 0;
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
    color?: string;
    onClick?: () => void;
};

const File: React.FC<FileProps> = ({ icon, filename, color, onClick }) => {
    const fileRef = useRef(null);

    return (
        <FileWrapper ref={fileRef} onClick={onClick}>
            <FileIcon icon={icon} color={color} />
            <FileName>{filename}</FileName>
        </FileWrapper>
    );
};

export default File;