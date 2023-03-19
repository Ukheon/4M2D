import { theme } from '@/styles/theme';
import Header from '../Header';
import { ThemeProvider } from 'styled-components';

const headerLayout = (page: React.ReactElement) => {
    
    return (
        <ThemeProvider theme={theme}>
            <Header />
            { page }
        </ThemeProvider>
    );

};

export default headerLayout;
