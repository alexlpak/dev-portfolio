import React, { useRef } from 'react';
import WindowMenuBar from './WindowMenuBar';
import WindowContents from './WindowContents';
import styled from 'styled-components';
import Draggable from 'react-draggable'

const WindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: .5rem;
    border: none;
    overflow: hidden;
    box-shadow: 0rem .125rem .125rem rgb(0 0 0 / 25%);
`;

const Window: React.FC = () => {
    const windowRef = useRef(null);
    return (
        <Draggable
            handle='.handle'
            nodeRef={windowRef}
            bounds='body'
        >
            <WindowWrapper ref={windowRef}>
                <WindowMenuBar className='handle' />
                <WindowContents />
            </WindowWrapper>
        </Draggable>
    );
};

export default Window;