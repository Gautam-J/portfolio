import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ID}');
        `}
      </Script>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
