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
                    <meta content="Thirike is an emerging organization formed and maintained by a bunch of batch mates of John Memorial High School Sasthamcotta (2007-2013) batch.
                    In todays hectic world social responsibility is something we are ignorant of. T-hands is our own creation to bring changes in the system by reminding their duties and responsibilities towards the society."
                          name="description"/>
                    <meta
                        content="thirikey, thands,t-hands, ngo, jmhs, bharanikavu,kerala"
                        name="keywords"/>
                    <meta name="robots" content="index, follow"/>
                    <meta property="og:title" content="T-Hands || Be The Change"/>
                    <meta property="og:description"
                          content="Thirike is an emerging organization formed and maintained by a bunch of batch mates of John Memorial High School Sasthamcotta (2007-2013) batch."/>
                    <meta property="og:image" content="https://i.ibb.co/HrCxZ2q/t-hands-logo-1.png      "/>
                    <meta property="og:url" content="http://t-hands.org"/>
                    <link rel="icon" href="/favicon.ico"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"/>
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
