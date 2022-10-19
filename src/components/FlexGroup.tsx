import React from 'react';
import styled from 'styled-components';

interface FlexGroupStyledProps {
    $flexDirection?: string;
    $gap?: string;
    $centered?: boolean;
};

const FlexGroupStyled = styled.div<FlexGroupStyledProps>`
    display: flex;
    flex-direction: ${({ $flexDirection }) => $flexDirection};
    gap: ${({ $gap }) => $gap || '.5rem'};
    flex-wrap: wrap;
`;

interface FlexGroupProps {
    flexDirection?: string;
    gap?: string;
    children?: React.ReactNode | React.ReactNode[];
    centered?: boolean;
};

const FlexGroup:React.FC<FlexGroupProps> = ({ flexDirection, gap, centered, children }) => {
    return (
        <FlexGroupStyled
            $flexDirection={flexDirection}
            $gap={gap}
            $centered={centered}
        >
            {children}
        </FlexGroupStyled>
    );
};

export default FlexGroup;