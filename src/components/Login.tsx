import React from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import Typography from './Typography';
import Button from './Button';

const LoginWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(${theme.blur});
    background-color: ${theme.colors.darkTransparent};
    color: white;
`;

const ProfileImageStyled = styled.div`
    background-image: url(${ProfileImage});
    background-size: contain;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    border: none;
    overflow: hidden;
`;

interface LoginProps {
    handleClick?: () => void;
};

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`;

const Login: React.FC<LoginProps> = ({ handleClick }) => {
    return (
        <LoginWrapper>
            <ProfileImageStyled />
            <TextWrapper>
                <Typography>Alex Pak</Typography>
                <Typography>Web Development Portfolio</Typography>
            </TextWrapper>
            <Button onClick={handleClick}>Continue</Button>
        </LoginWrapper>
    );
};

export default Login;