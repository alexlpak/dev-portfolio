import React from 'react';
import styled from 'styled-components';

const WindowMenuBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 10rem auto 10rem;
    justify-items: center;
    align-items: center;
    padding: .5rem;
    color: white;
    background-color: #212121;
`;

interface WindowMenuBarProps {
    className?: string;
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

const WindowMenuBar: React.FC<WindowMenuBarProps> = ({ className }) => {
    return (
        <WindowMenuBarWrapper className={className}>
            <MenuBarButtonsWrapper>
                <MenuBarButton $color='red' />
                <MenuBarButton $color='orange' />
                <MenuBarButton $color='green' />
            </MenuBarButtonsWrapper>
            <WindowLabel>WindowMenuBar</WindowLabel>
        </WindowMenuBarWrapper>
    );
};

export default WindowMenuBar;