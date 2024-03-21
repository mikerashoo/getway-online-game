import { Html, Head, Main, NextScript } from "next/document";
import $ from 'jquery';
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body onDragStart="return false;" onDropStart="return false;"> 
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'transparent'}}></div> 
        <Main />
        <NextScript />
       
      </body>
    </Html>
  );
}
