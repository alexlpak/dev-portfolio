import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

const FileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`;

const FileIcon = styled(FontAwesomeIcon)`
    height: 2.5rem;
    &:hover {
        cursor: pointer;
    };
`;

interface FileNameProps {
    $selected?: boolean;
};

const FileName = styled.span<FileNameProps>`
    padding: .25rem;
    background-color: ${({ $selected }) => $selected && 'rgba(255, 255, 255, 0.5)'};
`;

const File: React.FC = () => {
    const [selected, setSelected] = useState(false);

    return (
        <FileWrapper onClick={() => setSelected(prev => !prev)}>
            <FileIcon icon={faFolder} />
            <FileName $selected={selected}>File</FileName>
        </FileWrapper>
    );
};

export default File;