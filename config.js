const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,242xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,242xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "‪242064181756‬,242xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_33_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZCTzBrS0JqRFhTTU1rMVY4eXYxM2lidmZ1d01qOUppVlhYTUROTlNJMHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkd4NzJPa2pkUTBLSWs5VFNZdXBjUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmE4NTY4NmQtNzVkYi00MDhmLTkzZjItOGM0NGFkMzY5MjNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMjE2LFxuICAgICAgMTQ1LFxuICAgICAgNTMsXG4gICAgICAzNSxcbiAgICAgIDE4NyxcbiAgICAgIDYyLFxuICAgICAgMTksXG4gICAgICAxNjIsXG4gICAgICA4NCxcbiAgICAgIDE3NCxcbiAgICAgIDE4NSxcbiAgICAgIDQ0LFxuICAgICAgMTIxLFxuICAgICAgNTQsXG4gICAgICA0OCxcbiAgICAgIDIwNCxcbiAgICAgIDIzOCxcbiAgICAgIDEwOSxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxMTYsXG4gICAgICAxMDUsXG4gICAgICAxMjcsXG4gICAgICAxNjEsXG4gICAgICAyMTQsXG4gICAgICAyMzYsXG4gICAgICAxMjcsXG4gICAgICA0MixcbiAgICAgIDU5LFxuICAgICAgMixcbiAgICAgIDI0NixcbiAgICAgIDgyLFxuICAgICAgOTIsXG4gICAgICAyMzEsXG4gICAgICAxODQsXG4gICAgICAxNTIsXG4gICAgICA0MixcbiAgICAgIDY2LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFKV1Q1RVo2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDIwNjQxODE3NTY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZSQ8J2UryDwnZSI8J2UsPCdlK3wnZSv8J2UpvCdlLEg8J2UkvCdlKPwnZSj8J2UpvCdlLDwnZSl8J2UnvCdlKlcIixcbiAgICBcImxpZFwiOiBcIjIyMjU5OTY4MjQ2OTk1OToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcndvbllRa2FIN3Z3WVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVZV1VLamY0cWtWb0ptUHRwVkpjUXdGZlNEL0xLUERIUWphZnpvcjFNUXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL0NXUnFuSXRBckZUc2FrZ1RRdWJnMzJMcEUxRURieHdDM0FRc09xVStybDJiZlVtM3plZ3VsTm52b2hFeDM1Kzdjb2tZRFhpOGZQNXV4cjlSa25OQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOUpCMmxNbUJYRGQvTlFFMnZxRnZVNjhmWmVUT1RjQVo4VjlGOVJVMUZ3MGpWV3pGd3NPVm5Sdk9Nc0wydmczUWRTOEo5SEdvVEpkVzhmUEhxQTZXRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDY0MTgxNzU2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0NzUyNzg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUVzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFRXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVUEJnYlZWOVpwdEtvSHN4WklNbXcyWG9RZ2NaanZabnp4M1A1ZzRJb09ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0ODAzNTMzOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQ3NTI2Nzg1MzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
