const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://anassnajjari:<password>@cluster0.mnrqifo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://www.instagram.com/najjari_anas?igsh=bDVheWg2YWhoZ25s";
global.gurl  =process.env.GURL  || "https://www.instagram.com/najjari_anas?igsh=bDVheWg2YWhoZ25s";
global.website=process.env.GURL || "https://www.instagram.com/najjari_anas?igsh=bDVheWg2YWhoZ25s" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/48e22d72d6efcc2fd95a1.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anas En Najjari" 


global.devs = "212639818098" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212639818098";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,212639818098";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,212639818098";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212639818098,212xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_25_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJiNWNTOUtkRElOY2hIbVJ6QVlJN2srbVJqcWpiaFRPTDI4WW5ubUlZeXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjM5ODE4MDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRDRCMkIzRUNFN0I4QTg2QTdEMEFENkU5NjBFREY0OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIzMzg3NTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0ZpZEFDd2xTU0tKSVoteGZQTEVPUVwiLFxuICBcInBob25lSWRcIjogXCI0ZDlhM2UwYy02ZTlmLTQzZjMtOTE1Yi1iNzY5YzJhZDkzNjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTIzLFxuICAgICAgMTkyLFxuICAgICAgNzksXG4gICAgICAxMTksXG4gICAgICAxNzksXG4gICAgICA0NCxcbiAgICAgIDIxMCxcbiAgICAgIDI0MCxcbiAgICAgIDcsXG4gICAgICA1NCxcbiAgICAgIDY5LFxuICAgICAgODEsXG4gICAgICA2NSxcbiAgICAgIDE3MSxcbiAgICAgIDEzNCxcbiAgICAgIDExMyxcbiAgICAgIDgsXG4gICAgICAxODYsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgOTEsXG4gICAgICAxOTgsXG4gICAgICAxMTgsXG4gICAgICAxODAsXG4gICAgICAxMTMsXG4gICAgICAxMTksXG4gICAgICAyNixcbiAgICAgIDEwMSxcbiAgICAgIDE5LFxuICAgICAgOTMsXG4gICAgICAxMjgsXG4gICAgICAxNDMsXG4gICAgICAyMjksXG4gICAgICA5OCxcbiAgICAgIDE2MCxcbiAgICAgIDE5OSxcbiAgICAgIDIyMyxcbiAgICAgIDIxNSxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaNjZUSEhIRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjM5ODE4MDk4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDE5MjQ3ODMzMTAyNDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AvZDRxSUJFTHVibzdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXdOYzdhS3lIL1BzTzROTFluUHYrUVRGelA5MFFHUTMwRVhtdmlqN0JVQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZZ2RMNkI4N0l5S2tJa1phWEEveU04b1M4Q3h0MU1NMTNDV1JOdndWdEswL1NzNXZYLzY1Z2J4alFROG92VkVEZ2JmNzB5aEhpU2V2M2dwY0hiSmJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXck9kM09NbElnb0xXdTdJdFI5QThudVRIODkvWElOYjJuemVVckViS2hjTUl5NDdKcGRTZXJiZ3hNVXd4bEsxbWlpQUFLVlRGMHFYaXhyTmhaZ2JBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI2Mzk4MTgwOTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzM4NzUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQml6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCaXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvYXl5T1Z0Tmh4UGlUUnZtM29jOWI2c2lGeTk0RVkzMklPZkU4SVNBcmNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MTM1NjI4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMzM4NzUxNDEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || ".menu", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Anas En Najjari" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Anas En Najjari",
  packname: process.env.PACK_NAME || "Anas En Najjari",
  botname : process.env.BOT_NAME  || "Anas En Najjari",
  ownername:process.env.OWNER_NAME|| "HSVXDX",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "HSVXDX"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
