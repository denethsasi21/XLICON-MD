const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94786254229"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZRUmgrdWlRcEtIcEtEMENpMkFZZXI5blRyL216UENoSVFvWWM0cDBYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTdqa3luenVpMDVBdDVwTzBkYTZYN2pHK1R2dG1Vd0dNN3NYRHdzaExFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTkFaeW1UODQ1c2JOSGNsaVNPWU4vNk9mOTY5UlI5dVFqZGNRZFN4Y1c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4ekdSalpQU0tqekhzRHZFQ0R5bkV0V01ydERkNjA5cEt5elpmcVNpcjBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHQU9KNy9CR3E0dWNTUVVkaTJNOSt2K0wrVzhZc2NqeVNBVkpvbC9XM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVmbHh2Sk5XUTgvaWtJRU5RWlFRQVVDdXdLcGNXb0Nyd1htZDRGamhzVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUorZSt5NTNpRXF2SjBoazJsdW1zY0FnZUZVclhycGJVZGtpd1pSNGFHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmFrM2ljRmd3b0NENEY0aXEydUoraWN1LzM5d2kwT0FacFFOQjhUbTJCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklYTmROUWd6ZUM0eDVEOG9JQ1lxSHRTRnFjcDlkSlZqTDArSlUvM3FETHpCM2g2MzVkbW9KNGdCOVgzVFRsYUxzOGR0N2RyS2RNcjg5amV1czh4dERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJ5TE04ZDZZNlhyRUt0NGxmUXRhb0xaMjludGR0Q0lYbjI5UVVTY3drSEd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg2MjU0MjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIwQjdBREM4NEExMzYxRkUzMDJCMEQ1MENCMDAwNUE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDkzODI4NDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFINDdhZTdtU2Z1TVh0d2huN3J4QVEiLCJwaG9uZUlkIjoiZDUxMDE5ZjItNzdlNC00NDY3LTg0YzktMGM5ZDFhNDJlMDYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwyNFBDNmdWTHpCLzRYRVBFZTJ5TDhLajlkaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpY05qTjlaZFV3K3NqS0M1M3c3NlltODZKbEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM0sxTVdOUEIiLCJtZSI6eyJpZCI6Ijk0Nzg2MjU0MjI5OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+MuSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2ExMk1vRkVMUzVqSzhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM2xjYlZrajlSY3RibnhsSkNyVXI4dFBKczZTL1ZqRzh0dDJPS0w2Tmludz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQWEvQ2oyNm1ZZlR0VXh1b3pMWldudVRYTVpibmxWZ3RHRCtjcTN3OGY2ZFgyNmlGZ1lJNFh0ZEVrWGY2QWd5WGNVd1V4VDA1Z1AwTlJRZVpUU2QrQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkhUTXRJTVZaZjlNNzlVYkZQZC95cUg4R2tVQW1xWnZ4Y0UrTWxHeVV2ZEp5Y3ljZTdSQm1pQTkyMFZFamNVWGZUV2h1eXU3R3pOaTJuYUpCNG53M0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODYyNTQyMjk6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNVhHMVpJL1VYTFc1OFpTUXExSy9MVHliT2t2MVl4dkxiZGppaStqWXA4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA5MzgyODQxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUYybiJ9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'sasi',
  packname:  process.env.PACK_NAME || 'sasi',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
