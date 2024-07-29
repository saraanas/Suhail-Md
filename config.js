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
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_08_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVWMldUQVJsZUFyWktGd0NEc2pobE5kQm9pZnFPelc0K2Rva1lPOWpzcFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjM5ODE4MDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMzRGOTJFRkNFQjk0MjVCRDM1MjQxRjZDM0NEQzIzMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNzI5MzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI2Mzk4MTgwOThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc1QTk2RTRDMzBFMEFCMkM4NDlCODBGRkYyQzRBQjZCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI3MjkzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjYzOTgxODA5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzM1OUQxNDNDMEQ5OTQ4M0UyQjY5NjdCNkM4MTlDRUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjcyOTM3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjM5ODE4MDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyN0MwNjdBQkE1NDg3MDYxQTlFMEU4RkU0NTA4RjA0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNzI5MzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQzVqU3c5ZzRUY3VrX3NZak16NWROZ1wiLFxuICBcInBob25lSWRcIjogXCI4MWE3YTQyNy00ODYzLTQ1NWUtYmNjZi0xMzhhM2ZhOTQxYzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAyNTEsXG4gICAgICA2NyxcbiAgICAgIDEyMCxcbiAgICAgIDI1NSxcbiAgICAgIDE0MSxcbiAgICAgIDUzLFxuICAgICAgMTQsXG4gICAgICA2NyxcbiAgICAgIDgwLFxuICAgICAgMjQ4LFxuICAgICAgMTcwLFxuICAgICAgNjIsXG4gICAgICAxNixcbiAgICAgIDY0LFxuICAgICAgMzksXG4gICAgICAxODYsXG4gICAgICAxNTksXG4gICAgICAyNTEsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAxNTQsXG4gICAgICAyMDMsXG4gICAgICA3NSxcbiAgICAgIDE4MyxcbiAgICAgIDE4LFxuICAgICAgODgsXG4gICAgICAxNTksXG4gICAgICAxNTAsXG4gICAgICA0NixcbiAgICAgIDIxNyxcbiAgICAgIDQzLFxuICAgICAgMTM3LFxuICAgICAgODEsXG4gICAgICAxODUsXG4gICAgICAxNjcsXG4gICAgICAxMDUsXG4gICAgICAxODUsXG4gICAgICA0MixcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpKTjgxQ1RQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI2Mzk4MTgwOTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM0MTkyNDc4MzMxMDI0OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRFgwIERBUktcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSGx0b1VERUtHWm43VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxPZlZ4c0NTOUlIME9CSHN6ZHZCUjZYUVhldm1LYytxSnQwSklWMmUwaXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNHJYRThFRzB2ai95andoOG5mcWRhNThvS1UySDFFZVE2RC9iQjhBTlBaZnltcVJTeFBpejFYaUVPd2M1VmxibmhUSktaNEdkTllQekg3cWI1MkVnQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN1kwdW92dThaZzFuOS9zQTZOZGFxTDBlNHQ5TGRVZHZIcVdNbzk5ZlhkV0JBd1NCbEkzVkFGejhwVWxzMVRQTDUrQU0rd0JrbDd5ZlZhcFVjOEJPRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjM5ODE4MDk4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjcyOTMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTG03XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMbTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxclRvY1pHNm90WUdmS1VtcW1WYWF0QVp4Mnk4UGhZTERtaWZkZUN1MWtzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgxNjY4OTgwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjcyOTMyMTkyXCJ9Igp9"  // PUT your SESSION_ID 


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
