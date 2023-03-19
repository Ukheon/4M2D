import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * StyledComponent 깜빡임 이슈가 존재합니다.
 * 서버에서 렌더링된 스타일을 클라이언트에서 가져오는 시간이 필요하여 서버에서 Styles을 전달 한 후에 적용하도록 변경해야합니다.
 */
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }
}