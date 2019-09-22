import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/static/assets/css/main.css" />
                    <link rel="stylesheet" href="/static/assets/css/font-awesome.min.css" />
                    <script src="/static/assets/js/jquery.min.js"></script>
                    <script src="/static/assets/js/jquery.scrolly.min.js"></script>
                    <script src="/static/assets/js/jquery.scrollex.min.js"></script>
                    <script src="/static/assets/js/skel.min.js"></script>
                    <script src="/static/assets/js/util.js"></script>
                    <script src="/static/assets/js/main.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <style dangerouslySetInnerHTML={{__html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }`}}></style>
                </body>
            </html>
        );
    }
}