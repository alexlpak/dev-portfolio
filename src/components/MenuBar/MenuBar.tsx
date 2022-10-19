import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import Typography from '../Typography';
import GitHubButton from './GitHubButton';
import TimeDisplay from './TimeDisplay';
import Resume from '../../assets/pdf/pak_resume_2022.pdf';

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
                <Link href='mailto: alexlpak@gmail.com'>Contact</Link>
                <Link href={Resume} target='_blank'>Resume</Link>
            </LeftMenuItems>
            <RightMenuItems>
                <TimeDisplay />
            </RightMenuItems>
        </MenuBarWrapper>
    );
};

export default MenuBar;