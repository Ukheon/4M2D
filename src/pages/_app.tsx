import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import '@/styles/globals.css';
import { ThemeProvider, ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { theme } from '@/styles/theme';
import Head from 'next/head';

export const StyledComponentRegistry = ({ children }: { children: React.ReactNode }) => {
    const [styledComponentStyleSheel] = useState(() => new ServerStyleSheet());
	
    useServerInsertedHTML(() => {
        const styles = styledComponentStyleSheel.getStyleElement();
        return <>{styles}</>;
    });
	
    if (typeof window !== 'undefined') return <>{children}</>;
	
    return (
        <StyleSheetManager sheet={styledComponentStyleSheel.instance}>
            {children}
        </StyleSheetManager>
    );

};

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
}



export default function App({ Component, pageProps }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page: React.ReactElement) =>  page);
	
    return (getLayout(
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    ));
}
