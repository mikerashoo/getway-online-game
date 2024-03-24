import Head from "next/head";
import DogRacePlay from "./DogRacePlay";
import Script from "next/script";
import {dogRaceMainStyles, dogRaceResetStyle, dogRaceIOsStyle, dogRaceOrientationStyle} from "@/styles/dog_race_css/dog-race-styles"; 
const DogRaceLayout = () => {
  return (
    <>
     <style jsx>{`
        /* Include dogRaceMainStyles */
        ${dogRaceMainStyles}

        /* Include reset style */
        ${dogRaceResetStyle}

        /* Include ios style */
        ${dogRaceIOsStyle}
        

        /* Include Orientation style */
        ${dogRaceOrientationStyle}
      `}</style> 

    <div className="reset-styles">
      <Head>
        <title>CreateJS Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="theme-color" content="#000000" /> */}
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
        <Script
          src="/dog_race_assets/js/jquery-3.1.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/createjs.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/howler.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/screenfull.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/platform.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/ios_fullscreen.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/ctl_utils.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/sprite_lib.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/greyhound_info.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/settings.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CGameSettings.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CLang.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CPreloader.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CMain.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CTextButton.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CToggle.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CGfxButton.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CMenu.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CGame.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CInterface.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CCreditsPanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CBetPanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CChipPanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CSimpleBetPanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CForecastPanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CBetList.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CFichesController.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CButBet.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CVector2.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CMsgBox.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CTrackBg.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CGreyhound.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CTweenController.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CRankingGui.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CArrivalPanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CWinPanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CLosePanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CButStartRace.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CAreYouSurePanel.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CCTLText.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/dog_race_assets/js/CFicheBut.js"
          strategy="beforeInteractive"
        />
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

        <DogRacePlay />
      </main>
    </div>
    </>
  );
};

export default DogRaceLayout;
