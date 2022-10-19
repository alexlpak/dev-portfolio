import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 14px;
        height: 100%;
        width: 100%;
        margin: 0;
    };

    * {
        box-sizing: border-box;
    };

    body {
        font-family: 'Ubuntu', sans-serif;
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0;
        overflow: hidden;
        user-select: none;
        /* The following line is used for CSS debugging */
        /* & * { outline: 1px solid white; }; */
    };
`;

export default GlobalStyle;