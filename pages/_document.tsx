import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* Add custom font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        ></link>

        {/* TODO: add meta tags for SEO */}

        <Head />

        <body className="tracking-tight font-fira bg-light-base00 dark:bg-dark-base00">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
