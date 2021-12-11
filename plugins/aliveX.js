const Amazon = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('amazone');
const tk = Config.WORKTYPE == 'public' ? false : true

Amazon.addCommand({pattern: 'alive', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

 *╭─「 ǫᴜᴇᴇɴ ᴀʟᴇxᴀ 」*
 *│*
 *│ᴛʏᴘᴇ: .`+Config.PANEL_COMMAND+` for command panel*
 *├──────────●►*
 *│🌼HEY,*  `+wish+`
 *│👤Name:* `+Config.BOT_NAME+`
 *│💎Role:* Developer
 *│⏰Time:* `+time+`
 *│📡Server:* Digital Ocean
 *│📦Frameworks:* Nodejs
 *│👾Working As*
 *│🛡️ `+Config.WORKTYPE+`*
 *│ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ 2021*
 *╰───────────●►*


    *◄━━━━━━⦁═▣❪🧝‍♀️❫▣═⦁━━━━━━►*
        *◄●◈QUEEN ALEXA◈●►*
    *◄━━━━━━━⦁═⦁❶⦁═⦁━━━━━━━━►*
 
`}) 

 }));
