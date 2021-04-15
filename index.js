const ComfyJS = require("comfy.js");
require('dotenv').config()

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }

  if( (flags.mod || flags.broadcaster) && command === "so" ) {
    ComfyJS.Say( `everyone go follow https://twitch.tv/${message}` );
  }
}
ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );
