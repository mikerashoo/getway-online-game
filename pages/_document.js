import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body onDragStart="return false;" onDropStart="return false;"  > 
      <NextScript />
        <Main />
        
       
      </body>
    </Html>
  );
}
