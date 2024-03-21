// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({ 
        money:400,            //USER MONEY
        min_bet:1,            //MINIMUM BET
        max_bet:1000,          //MAXIMUM BET
        win_occurrence: 90,   //WIN OCCURRENCE
        game_cash:250,        //GAME CASH. STARTING MONEY THAT THE GAME CAN DELIVER.
        chip_values:[1,5,10,25,50,100], //VALUE OF CHIPS
        show_credits:true, //SET THIS VALUE TO FALSE IF YOU DON'T TO SHOW CREDITS BUTTON
        fullscreen:false, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 
        check_orientation:true,     //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        num_levels_for_ads: 2 //NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
     });
  }
  