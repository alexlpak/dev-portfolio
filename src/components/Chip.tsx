import React from 'react';
import styled from 'styled-components';

interface ChipStyledProps {
    $color: string;
    $backgroundColor: string;
};

const ChipStyled = styled.div<ChipStyledProps>`
    padding: .5rem;
    border-radius: .5rem;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${({ $color }) => $color};
    text-align: center;
`;

interface ChipProps {
    color: string;
    backgroundColor: string;
    children?: React.ReactNode | React.ReactNode[];
};

const Chip: React.FC<ChipProps> = ({ color, backgroundColor, children }) => {
    return (
        <ChipStyled
            $color={color}
            $backgroundColor={backgroundColor}
        >
            {children}
        </ChipStyled>
    );
};

export default Chip;