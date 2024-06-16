import { Head, Html, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body style={{ background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);', // Light blue to white gradient
      }}>
        <div className="blob"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
