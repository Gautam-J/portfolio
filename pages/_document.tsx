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

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        <Head>
          <meta
            name="description"
            content="Student who works mainly in the field of Artificial Intelligence."
          />
          <meta
            name="keywords"
            content="Full Stack, Web Developer, Open Source, Deep Learning, Machine Learning, Artificial Intelligence, Python, Computer Vision, Data Science, Student, AI, ML, Backend"
          />
        </Head>

        <body className="tracking-tight font-fira bg-light-base00 dark:bg-dark-base00">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
