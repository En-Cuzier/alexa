/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Amazone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('system_stats');

    Amazone.addCommand({pattern: 'xxx', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n*◄━━━━━━⦁▣❪🧝‍♀️❫▣⦁━━━━━━━►*\n                 *⚜Queen  Alexa⚜*\n  *🧚‍♀️ Hey There Im Alive Now 🕊*\n\n*❍ Version :► 8.5.0 (Public Release)*\n*❍ Branch  :► Awsh*\n*❍ About    :►Queen Alexa Is a Powerfull Bot For Whatsapp.*\n*❍ Github Link :►github.com/En-Cuzier*\n\n\n       *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*' })
     }
    }));

    Amazone.addCommand({pattern: 'sysd', fromMe: am, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

 if (Config.WORKTYPE == 'public') {

    Amazone.addCommand({pattern: 'xxx', fromMe: false, dontAddCommandList:true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n*◄━━━━━━⦁▣❪🧝‍♀️❫▣⦁━━━━━━━►*\n                 *⚜Queen  Alexa⚜*\n  *🧚‍♀️ Hey There Im Alive Now 🕊*\n\n*❍ Version :► 8.5.0 (Public Release)*\n*❍ Branch  :► Awsh*\n*❍ About    :►Queen Alexa Is a Powerfull Bot For Whatsapp.*\n*❍ Github Link :►github.com/En-Cuzier*\n\n\n       *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*' })
     }
    }));

    Amazone.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
