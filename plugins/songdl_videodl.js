const {cmd , commands} = require('../command')
const fg = required ('api-dylux')
const yts = required('yt-search')


cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("Please Give Url in YOUTUBE")
const search = await yts(q)
const data = search.videos[0];
// download audio
  let down = await fg.yts(url)
  let downloadUrl = down.dl_url
  //send audio msg
  await conn. sendMessage(form, {audio:{url:downloadUrl} ,mimetype:"audio/mpge"} ,{quoted:mek});
}catch(e){
consol.log(e)
reply('${e}')
}
})
