const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dc36488a61f750187f182.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ANAS EN NAJJARI" 


global.devs = "16092127705" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "16092127705";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,16092127705";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,16092127705";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "16092127705,160xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_49_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICA4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcwLFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDU1LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCRTlOK25TakdUazBoZTB0dWwvYmVVeE90Y0N1cnk2QUNZMVlZNjEwU2pBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE2MDkyMTI3NzA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NEFCRkQ3MTI5NjkyOUI5QkMwMTc1MTM2MjM1MjYyNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNjQ1NzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNjA5MjEyNzcwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjIwNEE5Q0UwQzIwM0ZCNTU3QzI2QkZDQjcyMTU5QjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjY0NTczXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTYwOTIxMjc3MDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY4RURFQTU5RDc0MTM3MDZDNDIxMDVDQzFERDlFMDIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI2NDU3N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE2MDkyMTI3NzA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNjRBMkJERjVDQ0Q1QTY1NzJBODEzRjVCRUIyNjNGRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNjQ1NzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0I2d1hGcnRUTC1ObWFxVjVycXZpUVwiLFxuICBcInBob25lSWRcIjogXCIwMTlkZmE3My03YzBmLTRmOTItYjNjYS0xMmNlNTdkMTJlNGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgNzksXG4gICAgICA5NSxcbiAgICAgIDEzLFxuICAgICAgMTk2LFxuICAgICAgMjIyLFxuICAgICAgMTMsXG4gICAgICAyMyxcbiAgICAgIDI1NCxcbiAgICAgIDEyMCxcbiAgICAgIDczLFxuICAgICAgMzgsXG4gICAgICAxMTcsXG4gICAgICA2NyxcbiAgICAgIDQ1LFxuICAgICAgNjAsXG4gICAgICAxNzMsXG4gICAgICAyMTEsXG4gICAgICA1NSxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAyNTQsXG4gICAgICAyMjMsXG4gICAgICAyMTksXG4gICAgICAxOTEsXG4gICAgICAxMjAsXG4gICAgICAxNDksXG4gICAgICAyNDIsXG4gICAgICAyNTMsXG4gICAgICAyNyxcbiAgICAgIDEyOSxcbiAgICAgIDUxLFxuICAgICAgMTM0LFxuICAgICAgNzYsXG4gICAgICAxOTEsXG4gICAgICAxMTcsXG4gICAgICA5MCxcbiAgICAgIDIzOCxcbiAgICAgIDE4LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNKV1M4N1RaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNjA5MjEyNzcwNTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYyMzM5NTQyNTA5MjA6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJZYW1hdG8gRGlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM2Q0cUlCRVBqWG5yVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3TmM3YUt5SC9Qc080TkxZblB2K1FURnpQOTBRR1EzMEVYbXZpajdCVUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR0gyNlF1eGsxWTNISkJFa0VEWlpRQkl4eldMekdMVlduWG5jYjFIbDZOUys5THdWSDA0TmVpeWhhRUZCSk5xRXltZ2E0UDNWOHJPY2pRc2dCOUU5Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSzZrUlMrSHgzcEJWbzIzYnFtNlZyeGRPSW5PN2puc1N6bzBCMTBVU1NHQ2czSkt4OGErNVJONEM5VmpCVnhaQWRKSUxMYVI4SktrOEtpNkdsSWdDQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTYwOTIxMjc3MDU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjY0NTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDZKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFENkouanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || ".menu", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
