import { Html, Head, Main, NextScript } from "next/document";
import $ from 'jquery';
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body onDragStart="return false;" onDropStart="return false;" className="page-bod"> 
       
        <Main />
        <NextScript />
       
      </body>
    </Html>
  );
}
