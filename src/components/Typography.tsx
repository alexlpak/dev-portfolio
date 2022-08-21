import React from 'react';
import styled from 'styled-components';

interface TypographyStyledProps {
    $size?: string;
    $fontFamily?: string;
    $color?: string;
};

const TypographyStyled = styled.span<TypographyStyledProps>`
    font-family: ${({ $fontFamily }) => $fontFamily};
    color: ${({ $color }) => $color};
    font-size: ${({ $size }) => $size};
`;

interface TypographyProps {
    size?: string;
    fontFamily?: string;
    color?: string;
    children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ size, fontFamily, color, children }) => {
    return (
        <TypographyStyled
            $fontFamily={fontFamily}
            $size={size}
            $color={color}
        >
            {children}
        </TypographyStyled>
    );
};

export default Typography;