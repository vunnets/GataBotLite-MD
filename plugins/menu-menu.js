import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
try {
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
˚₊·˚₊· ͟͟͞͞➳❥ ${packname} 
*☆═━┈◈ ╰ ${vs} ㎇ ╯ ◈┈━═☆*
*│*    
╰ ㊂ ▸▸ *_INFORMACIÓN DEL MENÚ_* ◂◂
*│* ┊
*│* ┊▸ ✦ ${usedPrefix}creadora
*│* ┊▸ ✦ ${usedPrefix}cuentasgb 
*│* ┊▸ ✦ ${usedPrefix}donar
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
╰ ㊂ ▸▸ *_INFORMACIÓN DEL MENÚ_* ◂◂
*│* ┊
*│* ┊▸ ✦ ${usedPrefix}creadora
*│* ┊▸ ✦ ${usedPrefix}cuentasgb 
*│* ┊▸ ✦ ${usedPrefix}donar
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
 `.trim()
    
const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4',
'https://telegra.ph/file/51aa9701839dcc29066e9.mp4',
'https://telegra.ph/file/c273b38104d3c31e7fa1a.mp4']


var vid = vi[Math.floor(Math.random() * (vi.length))]

//templateButtons
let templateButtons = [ 
{index: 1, urlButton: {displayText: 'GITHUB', url: 'https:'}},
{index: 1, urlButton: {displayText: 'GITHUB', url: 'https:'}}
]

conn.sendMessage(m.chat, { video: { url: vid }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: menu.trim(), footer: wm, templateButtons }, { quoted: m})
    
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
