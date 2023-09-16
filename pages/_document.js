import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/dev/favicon.svg"></link>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
                        rel="stylesheet"
                    ></link>

                    <Script
                        strategy="lazyOnload"
                        src="https://www.googletagmanager.com/gtag/js?id=G-N62SPDRSH0"
                    ></Script>
                    <Script
                        id="google-analytics"
                        strategy="beforeInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N62SPDRSH0'); `,
                        }}
                    />
                    <meta name="theme-color" content="#fff" />
                    {process.env.NODE_ENV == "production" && (
                        <Script
                            strategy="lazyOnload"
                            async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3446097307175125"
                            crossOrigin="anonymous"
                        ></Script>
                    )}
                </Head>
                <body className="body">
                    <main role="main">
                        <StyleSheetManager disableCSSOMInjection={false}>
                            <Main />
                        </StyleSheetManager>
                        <NextScript />
                    </main>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
