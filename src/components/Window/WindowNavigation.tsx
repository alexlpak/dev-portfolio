import React from 'react';
import styled from 'styled-components';

const WindowNavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3b3b3b;
    color: white;
`;

const WindowNavigation: React.FC = () => {
    return (
        <WindowNavigationWrapper>
            WindowNavigation
        </WindowNavigationWrapper>
    );
};

export default WindowNavigation;