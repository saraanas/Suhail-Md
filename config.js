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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Dqr1WirZhkB3usN9XguEO5";
global.website=process.env.GURL || "https://chat.whatsapp.com/Dqr1WirZhkB3usN9XguEO5" ; 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_33_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6SVpiVzFQWldKSk95c0JLQXFrYmtaYnB6UWlZVklFN3N3S0h3RlpqTUh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjYzOTgxODA5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTVFMDVEQ0M1MEExMTU1RjI0MDk0MEQ5NDk4QkI2MURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTIyODM0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkwzRDNSNDVHUUtXMldlbV9ISElYQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmI0ZGIzMDctZjA5YS00NTIyLThiNGQtNjE4MmU4MDI1YWY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDI4LFxuICAgICAgMTMwLFxuICAgICAgNzMsXG4gICAgICAxMjcsXG4gICAgICAyMjYsXG4gICAgICA1MCxcbiAgICAgIDg4LFxuICAgICAgMjUzLFxuICAgICAgMjAsXG4gICAgICAyMSxcbiAgICAgIDEzLFxuICAgICAgMTE0LFxuICAgICAgMTgwLFxuICAgICAgMjQ1LFxuICAgICAgNDAsXG4gICAgICA3NyxcbiAgICAgIDIxOCxcbiAgICAgIDczLFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICA2NyxcbiAgICAgIDIxMSxcbiAgICAgIDM3LFxuICAgICAgMTUyLFxuICAgICAgOTUsXG4gICAgICAxMzMsXG4gICAgICAyOCxcbiAgICAgIDQwLFxuICAgICAgNTAsXG4gICAgICAxMTgsXG4gICAgICAxMzAsXG4gICAgICAxMDYsXG4gICAgICAzNixcbiAgICAgIDc4LFxuICAgICAgMTMyLFxuICAgICAgMTU4LFxuICAgICAgMTQ5LFxuICAgICAgMjA0LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjNHN1lTOENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjYzOTgxODA5ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzQxOTI0NzgzMzEwMjQ6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEWFgwIERBUktcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTGU0cUlCRU15NXJyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3TmM3YUt5SC9Qc080TkxZblB2K1FURnpQOTBRR1EzMEVYbXZpajdCVUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSXo2b3g2MXRRanVUaDVaaHpLK2NnMTdTcXZvcHJaQUlRSFJENzIzTGUvK0NlWlUzdm41SlRCS0RpRDE5ZVJDQXU0UU1LWE8rUm1EUEd0WmFnQjFEQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNElGbTBmUG1ZYjJRTzhyT2Q1R0EweFFCODJwckxPZXZoMXlxLzZZdTA0QnRNTGRicU5CMFluemp1dzVtcVFmRGZlOGo0Nkw3LzJ3eUFRa3FRMXc1aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjM5ODE4MDk4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUyMjgzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJpMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmkwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTEk2NDkrMU1VUUVYbW1uQzhwV0Ntd0tiR2tUY0tmYTFrUG9wc0R5eUYwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDEzNTYyODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MjA5MzYzMjFcIn0iCn0="  // PUT your SESSION_ID 


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
