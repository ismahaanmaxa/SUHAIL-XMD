const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2520907895153";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_33_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInFTVnVoelFCRGNqYlIzbnh2Q0pZbVFBSUVzOWF0MzgvR1lTYnVRdHRIMkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyOTA3ODk1MTUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMjcxMTMwRjZBRDZDNTY0OTZCMDcyMkU3NzQ5NDVEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwNTI3OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI5MDc4OTUxNTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYyNDk1MEY2Qjk2OERCQUI2NDMxNDVBRUUxMkI3MkJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzA1Mjc5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjkwNzg5NTE1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5RDA5RDU0ODE0NjdDM0Q2Mjc2QUREMDZGMkQzQkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMDUyODAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyOTA3ODk1MTUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RTA0MDY3NzIwRjI2MzJDQzgyQjM5Q0U0RTJBRDZFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwNTI4MDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVXByeTcyWk1TaW0wMGNDRHRDeVhTUVwiLFxuICBcInBob25lSWRcIjogXCJjMGVkNDVlOC1mNDRmLTRlYmQtYjc1NS0xOWViNDkwNGE2ZWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgNzksXG4gICAgICAxMDksXG4gICAgICAxNTIsXG4gICAgICA3NCxcbiAgICAgIDI0MSxcbiAgICAgIDcsXG4gICAgICAxMDYsXG4gICAgICAxMjYsXG4gICAgICAxNTksXG4gICAgICAxODAsXG4gICAgICAxNjYsXG4gICAgICAxMDMsXG4gICAgICAxNDEsXG4gICAgICAwLFxuICAgICAgMTcsXG4gICAgICAxNDYsXG4gICAgICA4MSxcbiAgICAgIDIwNSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAyMzYsXG4gICAgICAyMzQsXG4gICAgICAyOCxcbiAgICAgIDE4OSxcbiAgICAgIDc1LFxuICAgICAgMTU0LFxuICAgICAgMTYsXG4gICAgICA4NixcbiAgICAgIDIzOCxcbiAgICAgIDIxNyxcbiAgICAgIDE5NyxcbiAgICAgIDE2MSxcbiAgICAgIDIxMCxcbiAgICAgIDM4LFxuICAgICAgMTMzLFxuICAgICAgMTYzLFxuICAgICAgMzEsXG4gICAgICAyNTQsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRENGVjRFNlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNzg5NTE1MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2FsaWlka2FcIixcbiAgICBcImxpZFwiOiBcIjIzNzM0MDQxMjkwNzY0MjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01HRnI4Z0RFUGVTc2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXlNY2p4dkprM0xIOGJ6bjlmem9EbFhnY2pmWnE1WFVScXdFUTNEeTVDRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1cldDVGlha0VCUGVOcXpNVDV0YTNYRHJ1REtBQlh6em9QdjNiWWY1NS91c0pMdmduaVBjMzNBaXNJSkJtRXNGayt2NVlITU81UFVPcHlEZHkzRUlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtT29ZMk9YRklvbmZlM0ZLNm5NdUh6bWhHZnFJVmFiZWkwVEhsRmwrMjZWcFpJRmwxSmkrWkMzUVEyN0YrV2R6ZVFsMGlmaFNuQmhKRzdSekdwYWxDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDc4OTUxNTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwNTI3OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVUVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJVRS5qc29uIjogIntcImtleURhdGFcIjpcImQyWi9ZTFhaWTF2S3FWeFlpUFc1Q0E0bXAzTXRxTUZIblY3Yy9jeTh5alE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU3MDcyMDY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMwNTI3OTcyNzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
