import { faCalculator, faEdit, faEnvelope, faGamepad } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import File from '../File/File';

const DockBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: .5rem;
    background-color: ${theme.colors.darkTransparent};
    border-radius: .25rem;
    backdrop-filter: blur(${theme.blur});
    position: absolute;
    bottom: 1rem;
`;

const Dock: React.FC = () => {
    return (
        <DockBase>
            <File icon={faCalculator} filename='Calculator' />
            <File icon={faEdit} filename='Code Editor' />
            <File icon={faEnvelope} filename='Messages' />
            <File icon={faGamepad} filename='Wordle' />
        </DockBase>
    );
};

export default Dock;