import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en" dir="ltr">
                <Head crossOrigin={true}>
                    <title>T-hands || Be The Change</title>
                    <meta content="React || Node || Angular || Next || Javascript || Python || AWS || Mongo || SQL"
                          name="description"/>
                    <meta
                        content="freelance, developer,full stack, kerala, websites, javascript, node, react, performance, javascript, js, crpstal, india"
                        name="keywords"/>
                    <meta name="robots" content="index, follow"/>
                    <meta property="og:title" content="ADITYA || Full Stack Developer"/>
                    <meta property="og:description"
                          content="React | Node | Angular | Next | Javascript | Python | AWS | Mongo | SQL"/>
                    <meta property="og:image" content="https://i.ibb.co/3mY2dBV/MG-8895-removebg-preview-1.png"/>
                    <meta property="og:url" content="http://adityav.in"/>
                    <link rel="icon" href="/favicon.ico"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="./css/bootstrap.css"/>
                    <link rel="stylesheet" href="./css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="./css/owl.carousel.min.css"/>
                    <link rel="stylesheet" href="./css/owl.theme.default.min.css"/>
                    <link rel="stylesheet" href="./style.css"/>
                    <link rel="stylesheet" href="./responsive.css"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
                <script src="./js/jquery-3.1.1.min.js"></script>
                <script src="./js/animationCounter.js"></script>
                <script src="./js/bootstrap.min.js"></script>
                <script src="./js/owl.carousel.min.js"></script>
                <script src="./js/active.js"></script>
            </Html>
        )
    }
}

export default MyDocument
