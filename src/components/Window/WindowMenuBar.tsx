import React from 'react';
import styled from 'styled-components';
import { useWindowGlobalContext } from '../../contexts/WindowGlobalContext';
import { theme } from '../../styles/theme';
import { useWindowContext } from './Window';

const WindowMenuBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 10rem auto 10rem;
    justify-items: center;
    align-items: center;
    padding: .5rem;
    color: white;
    background-color: ${theme.colors.darkSolid};
`;

interface WindowMenuBarProps {
    onPointerDown?: (e: PointerEvent | React.PointerEvent<Element>) => void;
};

interface MenuBarButtonProps {
    $color?: string;
};

const MenuBarButton = styled.div<MenuBarButtonProps>`
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: none;
    overflow: hidden;
    background-color: ${({ $color }) => $color};
    position: relative;
    &:hover {
        cursor: pointer;
    };
`;

const MenuBarButtonsWrapper = styled.div`
    display: flex;
    gap: .5rem;
    justify-self: start;
`;

const WindowLabel = styled.span`
    pointer-events: none;
`;

const WindowMenuBar: React.FC<WindowMenuBarProps> = ({ onPointerDown }) => {
    const { currentDirectory, windowRef } = useWindowContext();
    const { setWindows } = useWindowGlobalContext();

    const closeWindow = () => {
        setWindows(windows => windows.filter(window => {
            if (windowRef.current) {
                return window.id !== windowRef.current.id;
            }
            else return false;
        }));
    };

    return (
        <WindowMenuBarWrapper onPointerDown={onPointerDown}>
            <MenuBarButtonsWrapper>
                <MenuBarButton $color='red' onClick={() => closeWindow()} />
                {/* <MenuBarButton $color='orange' />
                <MenuBarButton $color='green' /> */}
            </MenuBarButtonsWrapper>
            <WindowLabel>{currentDirectory.directory}</WindowLabel>
        </WindowMenuBarWrapper>
    );
};

export default WindowMenuBar;