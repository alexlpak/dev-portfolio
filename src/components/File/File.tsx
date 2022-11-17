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
    padding: .5rem;
    background-color: ${({ $selected }) => $selected && 'rgba(0, 0, 0, 0.10)'};
    border: none;
    border-radius: .25rem;
    align-self: flex-start;
    justify-self: flex-start;
    width: 7rem;
    &:hover {
        cursor: pointer;
    };
`;

const FileIcon = styled(FontAwesomeIcon)`
    height: 2.5rem;
`;

interface FileNameProps {
    $selected?: boolean;
};

const FileName = styled.span<FileNameProps>`
    text-align: center;
    padding: .25rem;
    overflow-wrap: break-word;
    width: 100%;
`;

interface FileProps {
    icon: IconProp,
    filename: string;
    color?: string;
    onDoubleClick?: () => void;
    onSelect?: (selected: boolean) => void;
    noDrag?: boolean;
};

const File: React.FC<FileProps> = ({ icon, filename, color, onSelect, onDoubleClick, noDrag = true }) => {
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

    useEffect(() => {
        if (onSelect) onSelect(selected);
        // eslint-disable-next-line
    }, [selected]);

    return (
        <Draggable
            handle='.file'
            nodeRef={fileRef}
            bounds='parent'
            disabled={noDrag}
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