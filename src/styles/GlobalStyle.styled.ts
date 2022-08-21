import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
        height: 100%;
        width: 100%;
        margin: 0;
    };

    * {
        box-sizing: border-box;
        /* outline: 1px solid orange; */
    };

    body {
        font-family: 'Ubuntu', sans-serif;
        height: 100%;
        width: 100%;
        margin: 0;
        overflow: hidden;
        user-select: none;
    };
`;

export default GlobalStyle;