import React from 'react';
import styled, { css } from 'styled-components';

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
    ${({ $centered }) => {
        if ($centered) return css`
            align-items: center;
            justify-content: center;
        `;
    }};
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