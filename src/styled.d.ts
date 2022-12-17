import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        darkTransparent: string;
        darkSolid: string;
        darkTransparentLite: string;
    };
    blur: string;
    border: string;
    shadow: string;
  };
};