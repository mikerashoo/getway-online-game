import Head from "next/head"; 
import Script from "next/script";
import KenoStarter from "./KenoStarter";

const KenoLayout = () => { 
  return (
    <div>
      <Head>
        <title>CreateJS Game - Keno</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"
        />
        <meta name="msapplication-tap-highlight" content="no" />
      </Head>
      <main>

      <Script src="/keno_assets/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/createjs.min.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/platform.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/ios_fullscreen.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/howler.min.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/screenfull.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/ctl_utils.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/sprite_lib.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/settings.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CLang.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CPreloader.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CMain.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CTextButton.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CTextToggle.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CToggle.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CNumToggle.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CGfxButton.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CMenu.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CGame.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CInterface.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CEndPanel.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CPayouts.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CAnimBalls.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CCreditsPanel.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CDisplayPanel.js" strategy="beforeInteractive" />
        <Script src="/keno_assets/js/CCTLText.js" strategy="beforeInteractive" />

 
        <KenoStarter />
      </main>
    </div>
  );
};

export default KenoLayout;
