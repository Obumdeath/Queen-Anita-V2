//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/Obumdeath-tv-08-21";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2347070495769";
global.owner = process.env.OWNER_NUMBER || "2347070495769";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/Hy1yo5h";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0F5b0ZTOFVsamFrZ1lTV0dkUTk3TDZtRkxtMlF3ZXB1R1Rnb2pHM2hFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmM4QVRHemc4bUg1NGc5STgzcklNT0UySVRlRmV4N2ZOcnJxMjd6cGpDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSjVLSE5Pc1pUY3pOOTlnVnNtNlFoV0FQL3FKejdLUnVTTFRtZFpyZzMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1S0d4dmxiVk5ya25kZHJtNk1QVmhtS0pNVlRieHdWVEF0ZkxVZjBsSTNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHU2pqMi91UjlrUFMvaWdBc2dBc1VTRk5KY0laZG9iMTNJT2ZMKytGVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImptdzNvazBzZkpzZUNTdUxpblZYTGpJYjdOR2ZGVTQrNzRpdS82RGM3UlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RJZ29UMEVtQ3RsVW1neU01RWwzQnFDdEJybjNBRDRYcDBnTHJ0TXpFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2tpbEhNNnhaMnlJS0ZrbHVtZjByWUhUZkxvd0kzUUdwQWN6VW1qMDQzcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFtdUpnMDBhNjN5cHZyZzcvWmdyRVllMTBCejltaTA1L3RZR3p6OGc1eVFkRjA3MTQyVEQxNUk3K05lb2RYMTh5ZjNoaUpWQkZ2YlFRNlhGTmpLNUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IjdzVmlaT01hS3JHZlJ2ME1oUU10VXlxaE1vMm03WWtDR29KS3Z6aGdFTW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklWbUNOeVU0UjVXd0FOak9NR25kVUEiLCJwaG9uZUlkIjoiM2JjNTNiMDUtMTU3NC00OGNkLWI1M2YtZDdmYmI5NzFlNTMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxVRXpIZHpaU1Z6THc5VnpQdW93TnplWGpKTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYY1FVSDlWeUZid0Fuby9GSDBkZmpmR1IrcE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREdaSFBSRjUiLCJtZSI6eyJpZCI6IjIzNDcwNzA0OTU3Njk6ODFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiw5hiw7ptZMOpYXRoIFR2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOUGFxZmtERVB1VWw3WUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJteGV0UnlsdGJJYkJ6Z3VVcmprb0luQkkwQnpkOGV1TWdIY3ZlMzU4S213PSIsImFjY291bnRTaWduYXR1cmUiOiJ2QUJZaXk0OWV5Z0NLQXZYd2ZlOXlYcEI0dGNIUUFQZEROSVZuWkR4UHhDV1FRdEFxeXRkeUVIaWVQQ01sOXZYa1JBZkx4V1puZ3pHODExc09ONWlBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRk16TTU0MFEvQ1p1QUVqMElCbE9BRU5WQTRUbmFOamRzdUJuY0JPQXQzTmZKbml6OFczVGg4QmZlUnZRMStON01pYVNGQnpteCswdFArME04K3JzQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDcwNDk1NzY5OjgxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpzWHJVY3BiV3lHd2M0TGxLNDVLQ0p3U05BYzNmSHJqSUIzTDN0K2ZDcHMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQyMzg0NzN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`OBUMDEATH_TV™`",
  author: process.env.PACK_AUTHER || "OBUMDEATH-TV B.O.T",
  packname: process.env.PACK_NAME || "O.B.U.M.D.E.A.T.H",
  botname: process.env.BOT_NAME || "OBUMDEATH_B.O.T",
  ownername: process.env.OWNER_NAME || "Øbumdeath",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
