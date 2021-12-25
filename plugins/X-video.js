/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Codded BY teenuX🎵
Wa.me/+94766598862
*/

const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_UP = "*📵Please Wait Little Bit Im Uploding Your Video*"
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*🔞Downloading Your Video*"
let tn = Config.WORKTYPE == 'public' ? false : true
let ad = Config.WORKTYPE == 'public' ? true : true   

if (Config.ADULT_MODE == 'on') {
Neotro.addCommand({pattern: 'x1v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61193`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
  
      }));

Neotro.addCommand({pattern: 'x2v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61194`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
  }));
Neotro.addCommand({pattern: 'x3v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61197`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
  }));
Neotro.addCommand({pattern: 'x4v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61199`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
  }));
Neotro.addCommand({pattern: 'x5v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61200`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
  }));
Neotro.addCommand({pattern: 'x6v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61203`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
  }));
Neotro.addCommand({pattern: 'x7v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61206`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'x8v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61209`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'x9v ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61211`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: '10xv ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61212`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv11 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61214`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv12 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61215`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv13 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61219`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv14 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61221`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv15 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61223`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv16 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61225`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv17 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61227`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv18 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61231`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv19 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61233`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv20 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61235`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv21 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61237`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv22 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61239`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv23 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61241`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv24 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61243`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv25 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61247`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv26 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61251`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv27 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61253`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv28 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61254`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv29 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61255`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
 }));
Neotro.addCommand({pattern: 'xv30 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61262`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv31 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61259`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv32 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61263`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv34 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61268`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
 }));
Neotro.addCommand({pattern: 'xv35 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61274`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv36 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61277`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv37 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61279`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv38 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61282`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv39 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61284`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv40 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61287`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv41 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61289`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv42 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61295`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv43 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61290`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv44 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61294`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv45 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61299`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv46 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61300`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv47 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61303`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv48 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61305`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv49 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61306`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv50 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61309`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv51 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61311`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv52 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61314`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv53 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61316`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv54 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61312`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv55 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61319`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv56 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61321`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv57 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61324`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv58 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61326`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv59 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61329`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})
}));
Neotro.addCommand({pattern: 'xv60 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}61331`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv61 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67663`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv62 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67664`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv63 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67667`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv64 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67669`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv65 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67670`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv66 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67673`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv67 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67675`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv68 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67676`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv69 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67679`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv70 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67681`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv71 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67684`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv72 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67686`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv73 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67682`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv74 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67689`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv75 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67691`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv76 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67694`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv77 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67696`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv78 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67692`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv79 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67699`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv80 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67701`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));
Neotro.addCommand({pattern: 'xv81 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67704`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv82 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67705`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv83 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67702`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv84 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67708`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));
Neotro.addCommand({pattern: 'xv85 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67712`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv86 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67713`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv87 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67711`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv88 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67717`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

Neotro.addCommand({pattern: 'xv89 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67718`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));
Neotro.addCommand({pattern: 'xv90 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}67721`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.Mp4})

}));

}
