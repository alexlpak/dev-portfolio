import React from 'react';
import styled from 'styled-components';

interface TypographyStyledProps {
    $size?: string;
    $fontFamily?: string;
    $color?: string;
    $textAlign?: string;
};

const TypographyStyled = styled.span<TypographyStyledProps>`
    font-family: ${({ $fontFamily }) => $fontFamily};
    color: ${({ $color }) => $color};
    font-size: ${({ $size }) => $size};
    text-align: ${({ $textAlign }) => $textAlign};
`;

interface TypographyProps {
    size?: string;
    fontFamily?: string;
    color?: string;
    textAlign?: string;
    children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ size, fontFamily, color, textAlign, children }) => {
    return (
        <TypographyStyled
            $fontFamily={fontFamily}
            $size={size}
            $color={color}
            $textAlign={textAlign}
        >
            {children}
        </TypographyStyled>
    );
};

export default Typography;