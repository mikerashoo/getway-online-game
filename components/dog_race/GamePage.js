import React, { useEffect } from 'react'
import $ from 'jquery';

export default function GameLoader() {

    useEffect(() => {
      
        $(document).ready(function () {
            var oMain = new window.CMain({
                                money:400,            //USER MONEY
                                min_bet:1,            //MINIMUM BET
                                max_bet:1000,          //MAXIMUM BET
                                win_occurrence: 30,   //WIN OCCURRENCE
                                game_cash:100,        //GAME CASH. STARTING MONEY THAT THE GAME CAN DELIVER.
                                chip_values:[1,5,10,25,50,100], //VALUE OF CHIPS
                                show_credits:true, //SET THIS VALUE TO FALSE IF YOU DON'T TO SHOW CREDITS BUTTON
                                fullscreen:true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                                audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 
                                check_orientation:true,     //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
                                num_levels_for_ads: 2 //NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
                                        //////// THIS FEATURE  IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN./////////////////////////// 
                                        /////////////////// YOU CAN GET IT AT: ///////////////////////////////////////////////////////// 
                                        // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421///////////

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

    }, [])
    
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
