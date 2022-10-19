import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import GitHubButton from './GitHubButton';
import TimeDisplay from './TimeDisplay';

const MenuBarWrapper = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: .5rem;
    background-color: #212121;
    color: white;
`;

const LeftMenuItems = styled.div`
    display: flex;
    gap: .5rem;
`;

const RightMenuItems = styled.div`
    display: flex;
    gap: .5rem;
`;

const MenuBar: React.FC = () => {
    return (
        <MenuBarWrapper>
            <LeftMenuItems>
                <Typography>Alex Pak</Typography>
                <GitHubButton />
            </LeftMenuItems>
            <RightMenuItems>
                <TimeDisplay />
            </RightMenuItems>
        </MenuBarWrapper>
    );
};

export default MenuBar;