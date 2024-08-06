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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_21_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MixcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT2FmQXFNMTNUcU5uOE0rOUFBU0YrWE5yaml6dTUzcjlaZ0JOc2F2azE2az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDVBZGdpMGNRN1d0Q2k5UkNILVVqQVwiLFxuICBcInBob25lSWRcIjogXCJkMTc2NzQwMC1lODNkLTRkOWUtOGY0Yy1mNjIwYWFjY2VlNGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTYxLFxuICAgICAgMTY3LFxuICAgICAgMCxcbiAgICAgIDkyLFxuICAgICAgMzYsXG4gICAgICAxMTAsXG4gICAgICAyNDYsXG4gICAgICAxNTUsXG4gICAgICAyMzIsXG4gICAgICA1OSxcbiAgICAgIDIyMSxcbiAgICAgIDQ3LFxuICAgICAgMSxcbiAgICAgIDIyMixcbiAgICAgIDE5MixcbiAgICAgIDIyMSxcbiAgICAgIDIyNixcbiAgICAgIDQ3LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDc1LFxuICAgICAgMTE5LFxuICAgICAgNjgsXG4gICAgICAxODcsXG4gICAgICA0NixcbiAgICAgIDE0MCxcbiAgICAgIDE0OCxcbiAgICAgIDk1LFxuICAgICAgMTUwLFxuICAgICAgMzgsXG4gICAgICAyMzMsXG4gICAgICAxMyxcbiAgICAgIDIwNCxcbiAgICAgIDU2LFxuICAgICAgMTk2LFxuICAgICAgMTgxLFxuICAgICAgMTgwLFxuICAgICAgNjgsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0VYRjlGU0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjYzOTgxODA5ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzQxOTI0NzgzMzEwMjQ6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVGU0cUlCRVBuZnlyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3TmM3YUt5SC9Qc080TkxZblB2K1FURnpQOTBRR1EzMEVYbXZpajdCVUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib1ZDYTRqTE9DSUF3NTNzQ1V0TFlEa2ZzYjVjMGI3N1lOS1krbGpsMjhwNjU1VDhMbU9OTnByVTFxemcvc1RGVEdOREpaeS9WUEdyNzVDUFFkMUpWQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVd5ZFNYMkwzb1JEeDNSNnNQSkNPbGhGTkEwdHNRLyt4elpGOCs2UFJ1OE8wcXJqcHFlcEZBamZZMlROTDVPZjZ4NmFySThlTW9NUzR4dzR6U1V1RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjM5ODE4MDk4OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk4NjQ5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJpMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmkwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTEk2NDkrMU1VUUVYbW1uQzhwV0Ntd0tiR2tUY0tmYTFrUG9wc0R5eUYwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDEzNTYyODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MjA5MzYzMjFcIn0iCn0="  // PUT your SESSION_ID 


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
