import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.styled';
import ResetStyle from './styles/ResetStyle.styled';
import { theme } from './styles/theme';
import Desktop from './components/Desktop/Desktop';
import { FileSystemContextProvider } from './contexts/FileSystemContext';

const App = () => {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <FileSystemContextProvider>
                    <Desktop />
                </FileSystemContextProvider>
            </ThemeProvider>
        </>
    );
};

export default App;