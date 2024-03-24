
import React, { useEffect, useState } from 'react'
import $ from 'jquery';

export default function GameLoader() {
 
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
        // Fetch data from API route
        fetch('/api/dog-race/settings')
            .then(response => response.json())
            .then(data => {
                // Set the fetched data to state
                setGameData(data);
            })
            .catch(error => {
                console.error('Error fetching game data:', error);
            });
    }, []);

    useEffect(() => {
        if (gameData) {
            // Initialize window.CMain with fetched data
            $(document).ready(function () {
                var oMain = new window.CMain({
                    money: gameData.money,
                    min_bet: gameData.min_bet,
                    max_bet: gameData.max_bet,
                    win_occurrence: gameData.win_occurrence,
                    game_cash: gameData.game_cash,
                    chip_values: gameData.chip_values,
                    show_credits: gameData.show_credits,
                    fullscreen: gameData.fullscreen,
                    audio_enable_on_startup: gameData.audio_enable_on_startup,
                    check_orientation: gameData.check_orientation,
                    num_levels_for_ads: gameData.num_levels_for_ads
                });

                $(oMain).on("recharge", function (evt) {
                    //INSERT HERE YOUR RECHARGE SCRIPT THAT RETURN MONEY TO RECHARGE
                    var iMoney = 100;
                    if(window.s_oBetPanel !== null){
                        window.s_oBetPanel.setMoney(iMoney); 
                    }
                });
                
                $(oMain).on("start_session", function (evt) {
                    if (window.getParamValue('ctl-arcade') === "true") {
                        window.parent.__ctlArcadeStartSession();
                    }
                });
    
                $(oMain).on("end_session", function (evt) {
                    if (window.getParamValue('ctl-arcade') === "true") {
                        window.parent.__ctlArcadeEndSession();
                    }
                });
                
                $(oMain).on("bet_placed", function (evt, iTotBet) {
                        //...ADD YOUR CODE HERE EVENTUALLY
                });
                    
                $(oMain).on("save_score", function (evt, iScore) {
                    if (window.getParamValue('ctl-arcade') === "true") {
                        window.parent.__ctlArcadeSaveScore({score: iScore});
                    }
                });
    
                $(oMain).on("show_interlevel_ad", function (evt) {
                    if (window.getParamValue('ctl-arcade') === "true") {
                        window.parent.__ctlArcadeShowInterlevelAD();
                    }
                });
    
                $(oMain).on("share_event", function (evt, iScore) {
                    if (window.getParamValue('ctl-arcade') === "true") {
                        window.parent.__ctlArcadeShareEvent({img: window.TEXT_SHARE_IMAGE,
                            title: window.TEXT_SHARE_TITLE,
                            msg: window.TEXT_SHARE_MSG1 + iScore
                                    + window.TEXT_SHARE_MSG2,
                            msg_share: window.TEXT_SHARE_SHARE1
                                    + iScore + window.TEXT_SHARE_SHARE1});
                    }
                });
    
                if (window.isIOS()) {
                    setTimeout(function () {
                        window.sizeHandler();
                    }, 200);
                } else {
                    window.sizeHandler();
                } 
            });
        }
    }, [gameData]);
    
  return (
    <div> 
        
        <div className="check-fonts">
            <p className="check-font-1">1</p>
        </div> 
        
        <div className="check-fonts">
            <p className="check-font-2">2</p>
        </div> 
        
        <div className="check-fonts">
            <p className="check-font-3">3</p>
        </div>

       
        
        <canvas id="canvas" className='ani_hack' width="1024" height="768"> </canvas>
        <div data-orientation="landscape" className="orientation-msg-container"><p className="orientation-msg-text">Please rotate your device</p></div>
        <div id="block_game" style={{position: 'fixed', backgroundColor: 'transparent', top: 0, left: 0, width: '100%', height: '100%', display: 'none'}}></div>
        {/* <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div> */}
    </div>
  )
}
