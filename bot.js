const Discord = require('discord.js');
const {Intents} = require('discord.js')
const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})
const auth = require('./auth.json');

const dirtyW = "幹你娘" //ok
const DirtyW_Reply = "罵誰呢<:omg:1002735991834021890>"


const RRRR = ["RRRR","啊啊啊啊","rrrr","!山羌","！山羌","!當","!三槍"] //ok
const R_Reply = [
    "啊啊啊啊...啊啊啊..啊...",
    "我中了兩槍，如果我這次不幸死的話..."
] 

const Meow = ["喵喵喵喵"] //ok
const Meow_Reply = [
    "喵啥虫啦!!!<:CCFQ:1004511375906840668>",
    "AWEI_2",
    "AWEI_1",
    "BansheeMeow"
] //ok

const Notgay = ["不是男同","不是甲","不是gay"] //ok
const Notgay_Reply = [
    "闢賽啦!!!<:__:1000311544791449760>",
    "<:CCOK:1004509924270800918><:__:1013871947525926993>"
] //not sure

const GN="!晚安晚安" //ok
const GN_Reply=[
    "./Meow.mp3",
    "./banshee_5ma.mp3",
    "晚安晚安",
    "歐茲嘎哩... 痾痾痾頭好痛"
] 

const GN99 = "!晚安啾啾" //ok
const GN99_Reply = [
    "沒有晚安啾啾啦! 賣剎!<:__:1000311544791449760>",
    "ㄜ下次一定 下次一定",
    "今天領過囉!",
    "https://cdn.discordapp.com/emojis/895882525967257632.gif?size=4096&quality=lossless"
] 

const Late = ["!遲到","!大遲到"] //ok
const Late_Reply = [
    "才沒有遲到! 賣岔啦!<:__:1000311544791449760>",
    "cryoh"
] 

const JJ = "!林俊傑" //ok
const JJ_Reply = [
    "林俊傑 --> 阿趙",
    "https://tenor.com/view/jj-lin-jun-j-ie-haha-laugh-laughing-gif-10725170",
    "林俊傑我愛你!!!",
    "https://tenor.com/view/blow-a-kiss-lin-jun-j-ie-jj-gif-10725177"
] 

const GirlD = ["!女裝","!偽娘"] //ok
const GirlD_Reply = [
    "女僕 --> 七寶",
    "女裝大佬 -->押他庫"
] 

const O1O1 =  ["!喔咿喔咿","!喔咿喔一","!喔一喔一"] //ok

const WEIWEI = "!維哲" //ok
const WEIWEI_Reply = ["烈火雄心",
    "https://cdn.discordapp.com/attachments/1008337030339624981/1015932281921228830/unknown.png",
    "https://cdn.discordapp.com/attachments/1008337030339624981/1015932399101681704/unknown.png"
]

const drawlots = ["!抽獎","!無糖綠茶","!綠茶","!水水"] //ok
const drawlots_Reply =["恭喜獲得特別獎：水水一份","恭喜獲得普通獎：自製無糖綠茶一瓶","沒有抽獎啦:rage:","沒有抽獎啦:rage:","沒有抽獎啦:rage:","沒有抽獎啦:rage:","沒有抽獎啦:rage:","沒有抽獎啦:rage:","沒有抽獎啦:rage:","沒有抽獎啦:rage:"]

const Notyourwife = [
    "好的老婆",
    "老婆班西",
    "班西老婆",
    "!老婆"
] //ok
const Notyourwife_Reply = [
    "<:2_:1004514328361324626>謝謝你的支持但真的不是你婆捏<:__:1001436495384690770>",
    "xinlibiantai"
]

const Gay = ["!男同"] //ok

const RSHO = ["!阿修","!夕燒","!一生摯愛","!阿燒"] //ok

const HAKU=["!HAKU","!哈酷","!哈苦"] //ok

const SHALALA =["!蝦哥","!蝦拉拉"] //ok

const FatEn = ["!胖安","!胖銨"]
const FatEn_Reply = ["女僕咖一個","女僕咖咖"] 

const YAN = "!YAN" //ok
const YAN_Reply = ":chart::chart::chart:" //ok

const WaterMelon = ["!蠵龜","!西龜","!西瓜"] //ok
const WaterMelon_Reply = ["黃東俠 -->西瓜","魏洋洋 -->西瓜"] //ok


const Singer = ["有考慮當歌手嗎","!歌手"] //ok
const Singer_Reply = ["我當然有考慮當歌手啊...當歌手是...最想當的..."]

const YUKI = "!YUKI" //ok
const YUKI_Reply = "蜜轟~~:bee:" 

const Lick = ["!舔舔"] //ok
const Lick_Reply = [
    "https://cdn.discordapp.com/emojis/854116139268833301.gif?size=4096&quality=lossless",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014542072583295109/1537DBE8-8D6B-438D-8C1F-52E5C00B2E94.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014542096356610170/bbbcaa2c51dc52f9.gif"
] 

const AQUA = ["!阿誇","!阿夸"] //ok
const AQUA_Reply = [
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774370339651696/994976547784118364.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774412161064991/IMG_0035.gif",
    "https://tenor.com/view/minato-aqua-caps-cap-hoodie-inkyap-gif-23987910",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014777290028232825/My_project-1_2.png",
    "https://tenor.com/view/hologra-hololive-anime-minato-aqua-leak-gif-22462767",
    "./aqua-power.mp3"
]

const Smoke = ["!抽菸"] //ok
const Smoke_Reply = [
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774370339651696/994976547784118364.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774412161064991/IMG_0035.gif",
    "https://tenor.com/view/minato-aqua-caps-cap-hoodie-inkyap-gif-23987910",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014777290028232825/My_project-1_2.png"
]//ok

const Bansheee = ["!阿西","!班西","!哭哭班西"] //ok
const Bansheee_Reply = [
    "失去了記憶、找尋自己到底是被誰殺掉而跑來人類世界的愛哭鬼報喪女妖－－班西<:__:1001414045603209286>",
    "licklick.mp3"
]

const Mfmf = "!mfmf" //ok
const Mfmf_Reply = "https://memeprod.ap-south-1.linodeobjects.com/user-maker-thumbnail/99123acf67eceaa44e9b90ce5993245e.gif"

const Rage = ["怒火中燒","!憤怒","!爆氣","!大爆氣"] //ok
const Rage_Reply = [
    "<:__:1000308771446337546><:__:1000308771446337546><:__:1000308771446337546>",
    "https://memeprod.ap-south-1.linodeobjects.com/user-maker-thumbnail/1c3de237b838c6ca4cb1d612f0992977.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014782756431089684/810437918384455711.gif",
    "AWEIsound.mp3",
    "cryoh.mp3"
]

const Rightnow = "!就是現在"  //ok
const Rightnow_Reply = "就是現在!!!澆下熱水!!!"

const Heartwall = ["!心之壁","!破防"]  //ok
const Heartwall_Reply = "人類真脆弱，\n怎麼不鍛鍊心之壁，動不動就破防"

const Spider = "!批怕" //ok
const Spider_Reply = [
    "https://cdn.discordapp.com/attachments/1000296106355343430/1014804951844782080/QVersionSpiderman.png",
    "https://cdn.discordapp.com/attachments/1000296106355343430/1014805039392497735/no-way-home-spider-man-no-way-home.gif"
]

const WhokillBC = "!誰殺班西" //ok
const WhokillBC_Reply = "你啊，還問啊:eyes:"

const JKBRY = "!JKBRY" //ok
const JKBRY_Reply = "一個被學妹甩 在HAKU DC群被一堆人封鎖的咖<:emoji_20:1001492654854520932>"

const G7788 = "!7788" //ok
const G7788_Reply = [
    "https://tenor.com/view/danny-lee-super-kazuya-kazuya-gachimuchi-gachi-gif-22029354",
    "https://media.discordapp.net/attachments/999992199309692978/1006227130557939902/gin__sym__-938606075_AdobeExpress.gif"
]

const Pumpkin = ["!南瓜"] //ok
const Pumpkin_Reply = [
    "https://tenor.com/view/pumpkin-smash-destroy-crush-mallet-gif-23485408",
    "https://tenor.com/view/pumpkins-pumpkin-pumpkinhead-rrrpumpkinhead-gif-18896751",
    "./USER1.mp3",
    "./USER2.mp3",
    "./USER3.mp3",
    "./USER4.mp3"
]

const TH = ["!拓海"] //ok
const TH_Reply = [
    "<@569134706889850881>垃圾謎語人被國中生封鎖(已解封)，只會叫人冷靜還有貼複製文笑話\n聲稱自己被詐騙的八卦區棒棒糖(副人格說自己主人格在裝可憐)\n好心幫忙掛台只是在聊天室喵幾下就被BAN了，還說權力讓他感受到愉悅，根本噁男\n假裝對喵喵過敏但是還是偷偷去看她的被封鎖噁男\n還曾經在主播台上畫性器官，記得要先去倒讚再高歌離席:thumbdown:",
    "垃圾謎語人被國中生封鎖(已解封)，只會叫人冷靜還有貼複製文笑話\n聲稱自己被詐騙的八卦區棒棒糖(副人格說自己主人格在裝可憐)\n好心幫忙掛台只是在聊天室喵幾下就被BAN了，還說權力讓他感受到愉悅，根本噁男\n假裝對喵喵過敏但是還是偷偷去看她的被封鎖噁男\n還曾經在主播台上畫性器官，記得要先去倒讚再高歌離席:thumbdown:"
]

const HARU = ["!HARU","!哈魯"] //ok
const HARU_Reply = "最可愛的馬麻，HAKU的寶貝!!!<:2_:1004514328361324626>"

const AJ = "!阿介" //ok
const AJ_Reply = "https://cdn.discordapp.com/attachments/1013744117890699296/1015551000150544454/unknown.png"

const ARAM = ["有AR幫嗎"] //ok
const LCC = ["愛西西"] //ok
const HCC = ["恨西西"] //ok
const AH_React = ["屁眼"] //ok
const RICHMAN = ["社頂"] //ok

const Insurance = ["!保險丸子","!保保丸"] //ok
const Insurance_Reply = "https://cdn.discordapp.com/attachments/1008337030339624981/1017059146765438996/unknown-01-01.jpg"

const Lebron = ["!死人","!LBJ"] //ok
const Lebron_Reply = "LBJ他就社頂一個，還假裝自己是社底" //ok

const Bluefox = "!藍狐" //ok
const Bluefox_Reply = "唱歌撩妹男 雲科砲王 最近活躍於小祈 庫麻直播 會在庫麻DC駐唱"

const GHD = "!綠帽狗" //ok
const GHD_Reply = "老處男~~考研…再一年…~~"

const FF = ["!花花"] //ok
const FF_Reply = ["學姊殺手","大學現充咖","和ㄩㄣ一起度過一個禁忌的晚上…","掉出來要記得扶好"]

const Eldon = ["!艾爾登","!ELDON"]
const Eldon_Reply = "https://tenor.com/view/zherka-jonzherka-gif-20420495"

const FS = "!費雪" //ok
const FS_Reply = "八卦區首席咒術師 ~~高配文華拓海~~"

const BlackF = "!黑狐" //ok
const BlackF_Reply = "夢到被偽娘跟EJ追著跑的小大一，整天看本子還被抓包"

const COKY = ["!COKY"] //ok
const COKY_Reply = [
    "整天貼阿西給他的啾啾影片的噁男",
    "gif機器人"
]

const Nightmare = ["!宵夜"] //ok
const Nightmare_Reply = [
    "https://cdn.discordapp.com/attachments/943440374142214144/1015707777890533386/d9a30e86.gif",
    "https://cdn.discordapp.com/attachments/908969062447595550/1018904891214790666/0_9.gif",
    "https://cdn.discordapp.com/attachments/908969062447595550/1018216574001348688/0ac22605.gif",
    "https://cdn.discordapp.com/attachments/908969062447595550/1018216622130999316/53e0afe0.gif",
    "https://cdn.discordapp.com/attachments/908969062447595550/1018216643714883665/669427101195042817.gif",
    "https://tenor.com/view/french-fries-fries-fry-day-national-french-fry-day-gif-19212423",
    "https://tenor.com/view/mcdonalds-fries-french-fries-mcdonalds-fries-french-fry-day-gif-25198060",
    "https://cdn.discordapp.com/attachments/1018134503199358997/1019484802656776235/0_3.gif",
    "https://cdn.discordapp.com/attachments/1018134503199358997/1019485359761006652/noodles-lunch.gif"
]

client.login(auth.key);

client.on('ready',() =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('哭哭班西 Banshee ch.', {type: 'WATCHING'});   
});

client.on('messageCreate', async msg =>{

    if(msg.author == client.user) return;

    if (msg.content.toLowerCase().includes(AH_React)){
        const AH_trigger = Math.floor(Math.random()*10)+1
        if (AH_trigger <=4)
        {
        msg.react("<:Mmmm:999283674077999174>") ///ok
        }
    }

    if (msg.content === `${'!'}COKY`){
        const COKY_ReplyS = COKY_Reply[Math.floor(Math.random()* COKY_Reply.length)]
        msg.reply(COKY_ReplyS) ///ok
    }
    
    if (msg.content == Bluefox){
        msg.reply(Bluefox_Reply) 
    }

    if (msg.content === BlackF ){
        msg.reply(BlackF_Reply) ///ok
    }

    if (msg.content.toLowerCase().includes(FS)){
        msg.reply(FS_Reply) ///ok
    }

    if (msg.content.toLowerCase().includes(GHD)){
        msg.reply(GHD_Reply) ///ok
    }
    for (let Eldon_index=0; Eldon_index<=1; Eldon_index++){
    if (msg.content.toUpperCase().includes(Eldon[Eldon_index])){
        msg.channel.send(Eldon_Reply) ///ok
    }
    }
    if (msg.content.toLowerCase().includes(FF)){
        const FF_ReplyS = FF_Reply[Math.floor(Math.random()* FF_Reply.length)]
        msg.reply(FF_ReplyS) ///ok
    }

    if (msg.content.toLowerCase().includes(Nightmare)){
        const Nightmare_ReplyS = Nightmare_Reply[Math.floor(Math.random()* Nightmare_Reply.length)]
        msg.channel.send(Nightmare_ReplyS) ///ok
    }
    for(let Lebron_index =0 ; Lebron_index<=1 ; Lebron_index++){
    if (msg.content.toUpperCase().includes(Lebron[Lebron_index])){
        msg.reply(Lebron_Reply) ///ok
    }
    }
    for (let Insurance_index=0;Insurance_index<=1;Insurance_index++){
    if (msg.content.toLowerCase().includes(Insurance[Insurance_index])){
        msg.channel.send(Insurance_Reply) ///ok
    }
    }
    if (msg.content.toLowerCase().includes(RICHMAN)){
        const RICHMAN_trigger = Math.floor(Math.random()*10)+1
        if (RICHMAN_trigger<=4){
        msg.react("<:__:1001430356102221955>") ///ok
        }
    }


    if (msg.content.toUpperCase().includes(ARAM)){
        msg.react("<:__:1001430356102221955>") ///ok
    }

    if (msg.content.toLowerCase().includes(LCC)){
        msg.react("<:2_:1004514328361324626>") ///ok
    }
    
    if (msg.content.toLowerCase().includes(HCC)){
        msg.react("<:CCFQ:1004511375906840668>") ///ok
    }

    if (msg.content.toUpperCase().includes(AJ)){
        msg.channel.send(AJ_Reply) ///ok
    }

    if (msg.content.toLowerCase().includes(Spider)){
        const Spider_ReplyS = Spider_Reply[Math.floor(Math.random()* Spider_Reply.length)]
        msg.channel.send(Spider_ReplyS) ///ok
    }

    if (msg.content.toLowerCase().includes(Pumpkin)){
        const Pumpkin_Replys = Pumpkin_Reply[Math.floor(Math.random()* Pumpkin_Reply.length)]
        if(Pumpkin_Replys==Pumpkin_Reply[0]||Pumpkin_Replys==Pumpkin_Reply[1])
        {
            msg.channel.send(Pumpkin_Replys) 
        }
        else
        {
            msg.channel.send({files:[Pumpkin_Replys]});
        }
    } //ok

    if (msg.content.toLowerCase().includes(G7788)){
        const G7788_Replys = G7788_Reply[Math.floor(Math.random()* G7788_Reply.length)]
        msg.channel.send(G7788_Replys) 
    } //ok

    if (msg.content.toLowerCase().includes(WhokillBC)){
        msg.reply(WhokillBC_Reply) 
    } //ok

    if (msg.content.toLowerCase().includes(TH)){
        const TH_trigger = Math.floor(Math.random()*10)+1
        if ((TH_trigger <= 2 || msg.author == 431092862789222400) && msg.author != 510337447079575563)
        {
            msg.channel.send(TH_Reply[0])
        }
        else if (TH_trigger > 2 && msg.author != 510337447079575563)
        {
            msg.channel.send(TH_Reply[1]) 
        }
        else if (msg.author == 510337447079575563)
        {
            msg.channel.send("<@569134706889850881>"+TH_Reply[0])
        }
    } //ok
    for (let HARU_index=0; HARU_index<=1 ; HARU_index++){
    if (msg.content.toUpperCase().includes(HARU[HARU_index])){
        msg.reply(HARU_Reply) 
    } //ok
    }
    if (msg.content.toUpperCase().includes(JKBRY)){
        msg.reply(JKBRY_Reply) 
    } //ok
    for(let Heatwall_index =0 ; Heatwall_index<=1; Heatwall_index++){
    if (msg.content.toLowerCase().includes(Heartwall[Heatwall_index])){
        msg.reply(Heartwall_Reply) 
    } //ok
    }
    if (msg.content.toLowerCase().includes(Mfmf)){
        msg.channel.send(Mfmf_Reply) 
    } //ok
    for (let AQUA_index=0 ; AQUA_index<=1 ; AQUA_index++){
    if (msg.content.includes(AQUA[AQUA_index])){
        const AQUA_ReplyS = AQUA_Reply[Math.floor(Math.random()* AQUA_Reply.length)]
        if (AQUA_ReplyS==AQUA_Reply[5])
        {
            msg.channel.send({files:[AQUA_ReplyS]});
        }
        else
        {
            msg.channel.send(AQUA_ReplyS) ///ok
        }
    }
    }
    if (msg.content.toLowerCase().includes(Smoke)){
        const Smoke_ReplyS = Smoke_Reply[Math.floor(Math.random()* Smoke_Reply.length)]
        msg.channel.send(Smoke_ReplyS) ///ok
    }
    for (let Rage_index=0; Rage_index<=3;Rage_index++){
    if (msg.content.toLowerCase().includes(Rage[Rage_index])){
        const Rage_ReplyS = Rage_Reply[Math.floor(Math.random()* Rage_Reply.length)]
        if (Rage_ReplyS == Rage_Reply[0])
        {
            msg.reply(Rage_ReplyS)
        }
        if (Rage_ReplyS == Rage_Reply[1]||Rage_ReplyS == Rage_Reply[2])
        {
            msg.channel.send(Rage_ReplyS)
        }
        if (Rage_ReplyS == Rage_Reply[3])
        {
            msg.channel.send({files:['./AWEIWEI_3.mp3']});
        }
        if (Rage_ReplyS == Rage_Reply[4])
        {
            msg.channel.send({files:['./cry_oh.mp3']});
        }
    }
    }
    for(let Bansheee_index =0 ; Bansheee_index <=2; Bansheee_index++){
    if (msg.content.toLowerCase().includes(Bansheee[Bansheee_index])){
        const Bansheee_Replys = Bansheee_Reply[Math.floor(Math.random()* Bansheee_Reply.length)]
        if (Bansheee_Replys == Bansheee_Reply[0])
        {
            msg.channel.send(Bansheee_Replys)
            msg.channel.send("https://cdn.discordapp.com/attachments/1013744117890699296/1014774503324262400/04746f7d75dd53d8.gif")
        }
        else 
        {
            msg.channel.send(Bansheee_Reply[0])
            msg.channel.send({files:['./licklick.mp3']});
        }
    } //ok
    }
    if (msg.content.toLowerCase().includes(Rightnow)){
        msg.reply(Rightnow_Reply) 
    } //ok
    for (let RSHO_index=0 ; RSHO_index <=3 ; RSHO_index++){
    if (msg.content.toLowerCase().includes(RSHO[RSHO_index])){
        msg.channel.send("<:2_:1004514328361324626>阿修一生摯愛!!!趕快去訂閱!!!") 
    } //ok
    }
    for(let HAKU_index=0 ; HAKU_index <=2 ; HAKU_index++){
    if (msg.content.toUpperCase().includes(HAKU[HAKU_index])){
        msg.channel.send("<:2_:1004514328361324626>酷酷的警官!!!趕快去訂閱!!!") 
    } //ok
    }
    for(let SHALALA_index=0; SHALALA_index<=1 ; SHALALA_index++){
    if (msg.content.toLowerCase().includes(SHALALA[SHALALA_index])){
        msg.channel.send("<:2_:1004514328361324626>講話色色的蝦哥!!!趕快去訂閱!!!") 
    } //ok
    }
    if (msg.content.toUpperCase().includes(YAN)){
        msg.reply(YAN_Reply) 
    } //ok


    if (msg.content.toUpperCase().includes(YUKI)){
        msg.reply(YUKI_Reply) //ok
    }
    for (let Singer_index=0 ; Singer_index<=1 ; Singer_index++ ){
    if (msg.content.toLowerCase().includes(Singer[Singer_index])){
        msg.reply(Singer_Reply) //ok
        msg.channel.send("https://cdn.discordapp.com/emojis/946832559642378290.gif?size=4096&quality=lossless")
    }
    }
    if (msg.content.toLowerCase().includes(Lick)){
        const Lick_ReplyS = Lick_Reply[Math.floor(Math.random()* Lick_Reply.length)]
        msg.channel.send(Lick_ReplyS) ///ok
    }
    for(let FatEn_index=0;FatEn_index <=1 ; FatEn_index++){
    if (msg.content.toLowerCase().includes(FatEn[FatEn_index])){
        const FatEn_ReplyS = FatEn_Reply[Math.floor(Math.random()* FatEn_Reply.length)]
        msg.reply(FatEn_ReplyS) ///ok
    }
    }
    for(let WaterMelon_index=0 ; WaterMelon_index<=2 ; WaterMelon_index++){
    if (msg.content.toLowerCase().includes(WaterMelon[WaterMelon_index])){
        const WaterMelon_ReplyS = WaterMelon_Reply[Math.floor(Math.random()* WaterMelon_Reply.length)]
        msg.reply(WaterMelon_ReplyS) ///ok
    }
    }
    if (msg.content.toLowerCase().includes(Meow)||msg.content===("!喵喵")){
        const Meow_ReplyS = Meow_Reply[Math.floor(Math.random()* Meow_Reply.length)]
        if (Meow_ReplyS == Meow_Reply[0])
        {
            msg.reply(Meow_ReplyS)
        }
        if (Meow_ReplyS == Meow_Reply[1])
        {
            msg.channel.send({files:['./AWEIWEI_1.mp3']})
        }
        if (Meow_ReplyS == Meow_Reply[2])
        {
            msg.channel.send({files:['./AWEIWEI_2.mp3']})
        }
        if (Meow_ReplyS == Meow_Reply[3])
        {
            msg.channel.send({files:['./Meow.mp3']})
        }
    }
    for(let Notgay_index=0 ; Notgay_index<=2 ; Notgay_index++){
    if (msg.content.toLowerCase().includes(Notgay[Notgay_index])){
        const Notgay_ReplyS = Notgay_Reply[Math.floor(Math.random()* Notgay_Reply.length)]
        msg.channel.send(Notgay_ReplyS) ///ok
    }
    }

    if (msg.content.toLowerCase().includes(dirtyW)) {
        msg.reply(DirtyW_Reply) //ok
    }
    for(let RRRR_index=0;RRRR_index <= 6 ; RRRR_index++ ){
    if (msg.content.toLowerCase().includes(RRRR[RRRR_index])){
        const R_Replys = R_Reply[Math.floor(Math.random()* R_Reply.length)]
        if (R_Replys == R_Reply[0])
        {
            msg.channel.send(R_Replys);
        }
        if (R_Replys == R_Reply[1])
        {
            msg.reply(R_Replys);
        }
    } //ok
    }
    if (msg.content.toLowerCase().includes(GN)){
        const GN_Replys = GN_Reply[Math.floor(Math.random()* GN_Reply.length)]
        if (GN_Replys==GN_Reply[2]|| GN_Replys==GN_Reply[3])
        {
            msg.reply(GN_Replys)
        }
        else
        {
            msg.channel.send({files:[GN_Replys]})
        }
         //ok
    }
    if (msg.content.toLowerCase().includes(GN99)){
        const GN99_Replys = GN99_Reply[Math.floor(Math.random()* GN99_Reply.length)]
        msg.channel.send(GN99_Replys) //ok
    }
    for (let Late_index=0; Late_index <=1; Late_index++){
        if (msg.content.toLowerCase().includes(Late[Late_index])){
            const Late_Replys = Late_Reply[Math.floor(Math.random()* Late_Reply.length)]
            if (Late_Replys==Late_Reply[0])
            {
            msg.reply(Late_Replys) //ok
            }
            else{
                msg.channel.send({files:['./cry_oh.mp3']});
            }
        }
    }
    for (let O1O1_index=0; O1O1_index<=2 ; O1O1_index++){
    if (msg.content.toLowerCase().includes(O1O1[O1O1_index])){
        //msg.channel.send("https://imgur.com/a/uVTEjiV.jpg")
        msg.channel.send({files:['./O1O1.jpg']});
    } //ok
    }
    if (msg.content.toLowerCase().includes(WEIWEI)){
        const WEIWEI_Replys = WEIWEI_Reply[Math.floor(Math.random()* WEIWEI_Reply.length)]
        if (WEIWEI_Replys == WEIWEI_Reply[0])
        {
            msg.channel.send({files:['./O1O1.jpg']});
        }
        else
        {   
            msg.reply("猛男清大便")
            msg.channel.send(WEIWEI_Replys)
        }
    }

    if (msg.content.toLowerCase().includes(Gay)){
        //msg.channel.send("https://imgur.com/a/uVTEjiV.jpg")
        msg.channel.send({files:['./ewwww.png']});
    } //ok
    if (msg.content.toLowerCase().includes(JJ)){
        const JJ_Replys = JJ_Reply[Math.floor(Math.random()* JJ_Reply.length)]
        if (JJ_Replys == JJ_Reply[0])
        {
            msg.reply(JJ_Replys);
        }
        if (JJ_Replys == JJ_Reply[1])
        {
            msg.channel.send(JJ_Replys)
        }
        if (JJ_Replys == JJ_Reply[2])
        {
            msg.channel.send(JJ_Replys)
        }
        if (JJ_Replys == JJ_Reply[3])
        {
            msg.channel.send(JJ_Replys)
        }
    }//ok
    for (let GirlD_index=0; GirlD_index<=1 ; GirlD_index++){
    if (msg.content.toLowerCase().includes(GirlD[GirlD_index])){
        const GirlD_Replys = GirlD_Reply[Math.floor(Math.random()* GirlD_Reply.length)]
        msg.reply(GirlD_Replys) //ok
    }
    }

    for (let drawlots_index=0; drawlots_index<=3; drawlots_index++){
    if (msg.content.toLowerCase().includes(drawlots[drawlots_index])){
        const drawlots_Replys = drawlots_Reply[Math.floor(Math.random()* drawlots_Reply.length)]
        msg.reply(drawlots_Replys) //ok
    }
    }
    for (let Notyourwife_index =0 ; Notyourwife_index<=3;Notyourwife_index++){
    if (msg.content.toLowerCase().includes(Notyourwife[Notyourwife_index])){
        const Notyourwife_Replys = Notyourwife_Reply[Math.floor(Math.random()* Notyourwife_Reply.length)]
        if(Notyourwife_Replys==Notyourwife_Reply[1])
        {
            msg.channel.send({files:['./xinlibiantai.mp3']});  
        }
        else
        {
            msg.reply(Notyourwife_Replys) //ok
        
        }
         
    }
    }
    if (msg.content === `${'/'}抽`) {
        let P10_overcome = new Array(750);
        let P10_S =0
        let P10_F = 0
        let P10_tag = ''
        for (let P10_index = 0; P10_index < 750; P10_index++) {
            P10_overcome[P10_index] = Math.floor(Math.random()*1000)+1
            if( P10_overcome[P10_index] >= 2)
            {
                P10_F++
            }
            else{
                P10_S++
                P10_tag = P10_tag +'<@569134706889850881>'
            }

        }
        if (P10_tag.length != 0)
        {
            P10_tag=P10_tag+TH_Reply[1]
            msg.channel.send('中獎次數:'+P10_S+'\n'+ P10_tag)
        }
        else
        {
            msg.react('<:maddog:1019464955554168872>')
        }
        
    
    }
    
});
