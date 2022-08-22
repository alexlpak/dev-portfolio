import React from 'react';
import WindowNavigation from './WindowNavigation';
import styled from 'styled-components';
import File from '../File/File';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import WindowBody from './WindowBody';

const WindowContentsWrapper = styled.div`
    display: flex;
    background-color: white;
    color: black;
`;

const WindowContents: React.FC = () => {
    return (
        <WindowContentsWrapper>
            <WindowNavigation />
            <WindowBody>
                <File filename='File' icon={faFolder} />
                <File filename='File' icon={faFolder} />
                <File filename='File' icon={faFolder} />
            </WindowBody>
        </WindowContentsWrapper>
    );
};

export default WindowContents;