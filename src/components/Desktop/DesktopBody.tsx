import React from 'react';
import styled from 'styled-components';
import Window from '../Window/Window';

const DesktopBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100%;
    width: 100%;
    background-size: 300% 300%;
    background-image: linear-gradient(
            -45deg, 
            rgba(59,173,227,1) 0%, 
            rgba(87,111,230,1) 25%, 
            rgba(152,68,183,1) 51%, 
            rgba(255,53,127,1) 100%
    );  
    animation: AnimateBG 20s ease infinite;
    @keyframes AnimateBG { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    };
`;

const DesktopBody: React.FC = () => {
    return (
        <DesktopBodyWrapper className='desktop'>
            <Window />
        </DesktopBodyWrapper>
    );
};

export default DesktopBody;