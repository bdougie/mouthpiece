# Mouth Piece

notbdougie was here!

This piece is the mouth of chat commands on
https://twitch/bdougieYO/chat


This bot is powered by [ComfyJS](https://github.com/instafluff/ComfyJS#sending-chat-messages) to send chat messages with a [Twitch OAUTH](https://twitchapps.com/tmi/) password for connecting to chat.

## Setup

Copy .env.example to new .env

```
cp .env.example .env
```

Setup .env variables with your Twitch handle and oauth token. 

```
TWITCHUSER=[YOUR-USERNAME-HERE]
OAUTH=[YOUR-OAUTH-PASS HERE] # e.g. OAUTH=oauth:kjh12bn1hsj78445234
```

Start server
```
npm install
npm start
```


