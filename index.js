const ComfyJS = require("comfy.js");
require('dotenv').config()

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }

  if((!flags.subscriber || !flags.vip) && command === "say" ) {
    ComfyJS.Say( "You need to subscribe to use this command." );
  }
  
  if( command === "discord" ) {
    ComfyJS.Say( "https://discord.com/invite/U2peSNf23P" );
  }
  
  if( command === "youtube" || command === "yt" ) {
    ComfyJS.Say( "https://youtube.com/bdougie" );
  }
  
  if( command === "github" ) {
    ComfyJS.Say( "https://github.com/bdougie" );
  }
  
  if( command === "twitter" ) {
    ComfyJS.Say( "https://twitter.com/bdougieYO" );
  }
  
  if( command === "tiktok" || command === "tok" ) {
    ComfyJS.Say( "https://www.tiktok.com/@bdougieyo" );
  }

  if( command === "sauced" ) {
    ComfyJS.Say( "https://opensauced.pizza" );
  }

  if( command === "swag" ) {
    ComfyJS.Say( "https://swag.opensauced.pizza" );
  }
  
  if( command === "coc" ) {
    ComfyJS.Say( "The code of conduct: https://github.com/open-sauced/code-of-conduct" );
  }
  
  if( command === "commands" ) {
    ComfyJS.Say( "!github, !title, !yo, !twitter, !coc, !yt, !sauced, !twitter" );
  }  	

  if( (flags.mod || flags.broadcaster) && command === "so" ) {
    ComfyJS.Say( `everyone go follow https://twitch.tv/${message}` );
  }
}
ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );
