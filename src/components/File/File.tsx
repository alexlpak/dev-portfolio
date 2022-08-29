import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Draggable from 'react-draggable';

interface FileWrapperProps {
    $selected?: boolean;
};

const FileWrapper = styled.div<FileWrapperProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    flex-grow: 0;
    flex-shrink: 0;
    padding: .5rem;
    background-color: ${({ $selected }) => $selected && 'rgba(0, 0, 0, 0.25)'};
    border: none;
    border-radius: .25rem;
    &:hover {
        cursor: pointer;
    };
`;

const FileIcon = styled(FontAwesomeIcon)`
    height: 2.5rem;
    filter: drop-shadow(0rem .125rem .125rem rgb(0 0 0 / 25%));
`;

interface FileNameProps {
    $selected?: boolean;
};

const FileName = styled.span<FileNameProps>`
    padding: .25rem;
    /* background-color: ${({ $selected }) => $selected && 'rgba(255, 255, 255, 0.25)'}; */
`;

interface FileProps {
    icon: IconProp,
    filename: string;
    color?: string;
    onDoubleClick?: () => void;
};

const File: React.FC<FileProps> = ({ icon, filename, color, onDoubleClick }) => {
    const [selected, setSelected] = useState(false);

    const fileRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (!fileRef.current) return;
        if (!e.target) return;
        const isClickInside = fileRef.current.contains(e.target as Node);
        setSelected(() => isClickInside);
    };

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <Draggable
            handle='.file'
            nodeRef={fileRef}
            bounds='parent'
        >
            <FileWrapper
                ref={fileRef}
                onDoubleClick={onDoubleClick}
                $selected={selected}
                className='file'
            >
                <FileIcon icon={icon} color={color} />
                <FileName>{filename}</FileName>
            </FileWrapper>
        </Draggable>
    );
};

export default File;