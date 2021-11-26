/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
tzhukannak hari pasdadfasda
WhatsAsena - Yusuf Usta
*/

const simpleGit = require('simple-git');
const git = simpleGit();
const amazone = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })

const Language = require('../language');
const Lang = Language.getString('updater');

const axios = require('axios');


amazone.addCommand({pattern: 'haveup$', fromMe: true, dontAddCommandList: true, desc: Lang.UPDATER_DESC}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        commits['all'].map(
            (commit) => {
                newzel= '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
        
    var webimage = await axios.get(`https://telegra.ph/file/db327730246e6e142bd4e.jpg`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg  , caption: "යූ හෑව් නිව් අප්ඩේට් සගෝ .update now ගහපම් අප්ඩේට් කරන්න"+ newzel })
    
      
    }
}));
