import Head from "next/head";
import Script from "next/script";
import KenoStarter from "./KenoStarter";
import {
  kenoMainStyle,
  kenoOrientationStyle,
  kenoResetStyle,
} from "@/styles/keno_styles";
import dogRaceIOsStyle from "@/styles/dog_race_css/dogRaceIosFullScreenStyle";
const KenoLayout = () => {
  return (
    <>
      <style jsx>{`
        /* Include ios style */
        ${kenoResetStyle}
        /* Include dogRaceMainStyles */
        ${kenoMainStyle}

        /* Include reset style */
        ${kenoOrientationStyle} 

      `}</style>
     
        <Head>
          <title>CreateJS Game - Keno</title>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"
          />
          <meta name="msapplication-tap-highlight" content="no" /> 
        </Head>
        
          <Script
            src="/keno_assets/js/jquery-3.2.1.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/createjs.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/platform.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/ios_fullscreen.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/howler.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/screenfull.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/ctl_utils.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/sprite_lib.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/settings.js"
            strategy="beforeInteractive"
          />
          <Script src="/keno_assets/js/CLang.js" strategy="beforeInteractive" />
          <Script
            src="/keno_assets/js/CPreloader.js"
            strategy="beforeInteractive"
          />
          <Script src="/keno_assets/js/CMain.js" strategy="beforeInteractive" />
          <Script
            src="/keno_assets/js/CTextButton.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CTextToggle.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CToggle.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CNumToggle.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CGfxButton.js"
            strategy="beforeInteractive"
          />
          <Script src="/keno_assets/js/CMenu.js" strategy="beforeInteractive" />
          <Script src="/keno_assets/js/CGame.js" strategy="beforeInteractive" />
          <Script
            src="/keno_assets/js/CInterface.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CEndPanel.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CPayouts.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CAnimBalls.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CCreditsPanel.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CDisplayPanel.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/keno_assets/js/CCTLText.js"
            strategy="beforeInteractive"
          />

{/* <main> */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
            }}
          ></div>

          <KenoStarter />
        {/* </main>  */}
    </>
  );
};

export default KenoLayout;
