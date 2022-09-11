const Discord = require('discord.js');
const client = new Discord. Client();
const auth = require('./auth.json');

const dirtyW = ["幹你娘"] 
const DirtyW_Reply = [
    "罵誰呢<:omg:1002735991834021890>"
] //ok

const RRRR = ["RRRR","啊啊啊啊","rrrr","!山羌","！山羌","!當","!三槍"] 
const R_Reply = [
    "啊啊啊啊...啊啊啊..啊...",
    "我中了兩槍，如果我這次不幸死的話..."
] //ok

const Meow = ["喵喵喵喵"] 
const Meow_Reply = [
    "喵啥虫啦!!!<:CCFQ:1004511375906840668>",
    "AWEI_2",
    "AWEI_1",
    "BansheeMeow"
] //ok

const Notgay = ["不是男同","不是甲","不是gay"] 
const Notgay_Reply = [
    "闢賽啦!!!<:__:1000311544791449760>",
    "<:CCOK:1004509924270800918><:__:1013871947525926993>"
] //not sure

const GN=["!晚安晚安","！晚安晚安"]
const GN_Reply=[
    "./Meow.mp3",
    "./banshee_5ma.mp3",
    "晚安晚安",
    "歐茲嘎哩... 痾痾痾頭好痛"
] //ok

const GN99 = ["!晚安啾啾","！晚安啾啾"]
const GN99_Reply = [
    "沒有晚安啾啾啦! 賣剎!<:__:1000311544791449760>",
    "ㄜ下次一定 下次一定",
    "今天領過囉!",
    "https://cdn.discordapp.com/emojis/895882525967257632.gif?size=4096&quality=lossless"
] //ok

const Late = ["!遲到","！遲到","!大遲到"]
const Late_Reply = [
    "才沒有遲到! 賣岔啦!<:__:1000311544791449760>",
    "cryoh"
] //ok

const JJ = ["!林俊傑","！林俊傑"]
const JJ_Reply = [
    "林俊傑 --> 阿趙",
    "https://tenor.com/view/jj-lin-jun-j-ie-haha-laugh-laughing-gif-10725170",
    "林俊傑我愛你!!!",
    "https://tenor.com/view/blow-a-kiss-lin-jun-j-ie-jj-gif-10725177"
] //ok

const GirlD = ["!女裝","!偽娘"]
const GirlD_Reply = [
    "女僕 --> 七寶",
    "女裝大佬 -->押他庫"
] //ok

const O1O1 =  ["!喔咿喔咿","!喔咿喔一","!喔一喔一"]//ok

const WEIWEI = ["!李維哲","!維哲"]
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
]
const Notyourwife_Reply = [
    "<:2_:1004514328361324626>謝謝你的支持但真的不是你婆捏<:__:1001436495384690770>"
]//ok

const Gay = ["!男同"] //ok

const RSHO = ["!阿修","!夕燒","!一生摯愛","!阿燒"] //ok

const HAKU=["!HAKU","!哈酷","!哈苦"] //ok

const SHALALA =["!蝦哥","!蝦拉拉"] //ok

const FatEn = ["!胖安","!胖銨"]
const FatEn_Reply = ["女僕咖一個","女僕咖咖"] //ok

const YAN = ["!YAN"]
const YAN_Reply = [":chart::chart::chart:"] //ok

const WaterMelon = ["!蠵龜","!西龜","!西瓜"]
const WaterMelon_Reply = ["黃東俠 -->西瓜","魏洋洋 -->西瓜"] //ok

const AH = ["!屁眼"]
const AH_Reply = ['屁眼<:Mmmm:999283674077999174>']//ok

const Singer = ["!有考慮當歌手嗎","!歌手"]
const Singer_Reply = ["我當然有考慮當歌手啊...當歌手是...最想當的..."]

const YUKI = ["!YUKI"]
const YUKI_Reply = ["蜜轟~~:bee:"] //ok

const Lick = ["!舔舔"]
const Lick_Reply = [
    "https://cdn.discordapp.com/emojis/854116139268833301.gif?size=4096&quality=lossless",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014542072583295109/1537DBE8-8D6B-438D-8C1F-52E5C00B2E94.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014542096356610170/bbbcaa2c51dc52f9.gif"
] //ok

const AQUA = ["!阿誇","!阿夸"]
const AQUA_Reply = [
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774370339651696/994976547784118364.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774412161064991/IMG_0035.gif",
    "https://tenor.com/view/minato-aqua-caps-cap-hoodie-inkyap-gif-23987910",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014777290028232825/My_project-1_2.png",
    "https://tenor.com/view/hologra-hololive-anime-minato-aqua-leak-gif-22462767",
    "./aqua-power.mp3"
]//ok

const Smoke = ["!抽菸"]
const Smoke_Reply = [
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774370339651696/994976547784118364.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014774412161064991/IMG_0035.gif",
    "https://tenor.com/view/minato-aqua-caps-cap-hoodie-inkyap-gif-23987910",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014777290028232825/My_project-1_2.png"
]//ok

const Bansheee = ["!阿西","!班西","!哭哭班西"]
const Bansheee_Reply = [
    "失去了記憶、找尋自己到底是被誰殺掉而跑來人類世界的愛哭鬼報喪女妖－－班西<:__:1001414045603209286>",
    "licklick.mp3"
]//ok

const Mfmf = ["!mfmf"] //ok
const Mfmf_Reply = ["https://memeprod.ap-south-1.linodeobjects.com/user-maker-thumbnail/99123acf67eceaa44e9b90ce5993245e.gif"]

const Rage = ["怒火中燒","!憤怒","!爆氣","!大爆氣"]
const Rage_Reply = [
    "<:__:1000308771446337546><:__:1000308771446337546><:__:1000308771446337546>",
    "https://memeprod.ap-south-1.linodeobjects.com/user-maker-thumbnail/1c3de237b838c6ca4cb1d612f0992977.gif",
    "https://cdn.discordapp.com/attachments/1013744117890699296/1014782756431089684/810437918384455711.gif",
    "AWEIsound.mp3",
    "cryoh.mp3"
]//ok

const Rightnow = ["!就是現在"] 
const Rightnow_Reply = ["就是現在!!!澆下熱水!!!"]//ok

const Heartwall = ["!心之壁","!破防"] //ok
const Heartwall_Reply = ["人類真脆弱，\n怎麼不鍛鍊心之壁，動不動就破防"]

const Spider = ["!帥帥蜘蛛人","!批怕"]
const Spider_Reply = [
    "https://cdn.discordapp.com/attachments/1000296106355343430/1014804951844782080/QVersionSpiderman.png",
    "https://cdn.discordapp.com/attachments/1000296106355343430/1014805039392497735/no-way-home-spider-man-no-way-home.gif"
]

const WhokillBC = ["!誰殺班西"]
const WhokillBC_Reply = ["你啊，還問啊:eyes:"]

const JKBRY = ["!JKBRY"]
const JKBRY_Reply = ["一個被學妹甩的咖<:emoji_20:1001492654854520932>"]

const G7788 = ["!7788"]
const G7788_Reply = [
    "https://tenor.com/view/danny-lee-super-kazuya-kazuya-gachimuchi-gachi-gif-22029354",
    "https://media.discordapp.net/attachments/999992199309692978/1006227130557939902/gin__sym__-938606075_AdobeExpress.gif"
]

const Pumpkin = ["!南瓜"]
const Pumpkin_Reply = [
    "https://tenor.com/view/pumpkin-smash-destroy-crush-mallet-gif-23485408",
    "https://tenor.com/view/pumpkins-pumpkin-pumpkinhead-rrrpumpkinhead-gif-18896751"
]

const TH = ["!拓海"]
const TH_Reply = [
    "垃圾謎語人被國中生封鎖(已解封)，聲稱自己被詐騙的八卦區棒棒糖(副人格說自己主人格在裝可憐)\n還曾經在主播台上畫性器官，記得要先去倒讚再高歌離席:thumbdown:"
]

const HARU = ["!HARU","!haru","!哈魯"]
const HARU_Reply =[
    "最可愛的馬麻，HAKU的寶貝!!!<:2_:1004514328361324626>"
]
const AJ = ["!阿介"]
const AJ_Reply = ["https://cdn.discordapp.com/attachments/1013744117890699296/1015551000150544454/unknown.png"]

const ARAM = ["有AR幫嗎"]
const LCC = ["愛西西"]
const HCC = ["恨西西"]
const AH_React = ["屁眼"]
const RICHMAN = ["社頂"]

const Insurance = ["!保險丸子","!保保丸"]
const Insurance_Reply = ["https://cdn.discordapp.com/attachments/1008337030339624981/1017059146765438996/unknown-01-01.jpg"]

const Lebron = ["!死人","!LBJ","!lbj"]
const Lebron_Reply = ["LBJ他就社頂一個，還假裝自己是社底"] //ok

const Bluefox = ["!藍狐"]
const Bluefox_Reply = ["唱歌撩妹男 雲科砲王 最近活躍於小祈 庫麻直播 會在庫麻DC駐唱"]

const GHD = ["!綠帽狗"]
const GHD_Reply = ["老處男~~考研…再一年…~~"]

const FF = ["!花花"]
const FF_Reply = ["學姊殺手","大學現充咖","和ㄩㄣ一起度過一個禁忌的晚上…","掉出來要記得扶好"]

const Eldon = ["!艾爾登","!ELDON","!Eldon","!eldon"]
const Eldon_Reply = ["https://tenor.com/view/zherka-jonzherka-gif-20420495"]

const FS = ["!費雪"]
const FS_Reply = ["八卦區首席咒術師 ~~高配文華拓海~~"]

const BlackF = ["!黑狐"]
const BlackF_Reply = ["夢到被偽娘跟EJ追著跑的小大一，整天看本子還被抓包"]

const COKY = ["!COKY"]
const COKY_Reply = [
    "整天貼阿西給他的啾啾影片的噁男",
    "gif機器人"
]

client.login(auth.key);

client.on('ready',() =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('哭哭班西 Banshee ch.', {type: 'WATCHING'});   
});

client.on('message', msg =>{

    if(msg.author == client.user) return;

    if (AH_React.some(word => msg.content.includes(word))){
        msg.react("<:Mmmm:999283674077999174>") ///ok
    }

    if (COKY.some(word => msg.content.includes(word))){
        const COKY_ReplyS = COKY_Reply[Math.floor(Math.random()* COKY_Reply.length)]
        msg.reply(COKY_ReplyS) ///ok
    }

    if (Bluefox.some(word => msg.content.includes(word))){
        msg.reply(Bluefox_Reply) ///ok
    }

    if (BlackF.some(word => msg.content.includes(word))){
        msg.reply(BlackF_Reply) ///ok
    }

    if (FS.some(word => msg.content.includes(word))){
        msg.reply(FS_Reply) ///ok
    }

    if (GHD.some(word => msg.content.includes(word))){
        msg.channel.send(GHD_Reply) ///ok
    }

    if (Eldon.some(word => msg.content.includes(word))){
        msg.channel.send(Eldon_Reply) ///ok
    }

    if (FF.some(word => msg.content.includes(word))){
        const FF_ReplyS = FF_Reply[Math.floor(Math.random()* FF_Reply.length)]
        msg.reply(FF_ReplyS) ///ok
    }

    if (Lebron.some(word => msg.content.includes(word))){
        msg.reply(Lebron_Reply) ///ok
    }

    if (Insurance.some(word => msg.content.includes(word))){
        msg.channel.send(Insurance_Reply) ///ok
    }

    if (RICHMAN.some(word => msg.content.includes(word))){
        const RICHMAN_trigger = Math.floor(Math.random()*10)+1
        if (RICHMAN_trigger<=4){
        msg.react("<:__:1001430356102221955>") ///ok
        }
    }


    if (ARAM.some(word => msg.content.includes(word))){
        msg.react("<:__:1001430356102221955>") ///ok
    }

    if (LCC.some(word => msg.content.includes(word))){
        msg.react("<:2_:1004514328361324626>") ///ok
    }
    
    if (HCC.some(word => msg.content.includes(word))){
        msg.react("<:CCFQ:1004511375906840668>") ///ok
    }

    if (AJ.some(word => msg.content.includes(word))){
        msg.channel.send(AJ_Reply) ///ok
    }

    if (Spider.some(word => msg.content.includes(word))){
        const Spider_ReplyS = Spider_Reply[Math.floor(Math.random()* Spider_Reply.length)]
        msg.channel.send(Spider_ReplyS) ///ok
    }

    if (Pumpkin.some(word => msg.content.includes(word))){
        const Pumpkin_Replys = Pumpkin_Reply[Math.floor(Math.random()* Pumpkin_Reply.length)]
        msg.channel.send(Pumpkin_Replys) 
    } //ok

    if (G7788.some(word => msg.content.includes(word))){
        const G7788_Replys = G7788_Reply[Math.floor(Math.random()* G7788_Reply.length)]
        msg.channel.send(G7788_Replys) 
    } //ok

    if (WhokillBC.some(word => msg.content.includes(word))){
        msg.reply(WhokillBC_Reply) 
    } //ok

    if (TH.some(word => msg.content.includes(word))){
        msg.reply(TH_Reply) 
    } //ok

    if (HARU.some(word => msg.content.includes(word))){
        msg.reply(HARU_Reply) 
    } //ok

    if (JKBRY.some(word => msg.content.includes(word))){
        msg.reply(JKBRY_Reply) 
    } //ok

    if (Heartwall.some(word => msg.content.includes(word))){
        msg.reply(Heartwall_Reply) 
    } //ok

    if (Mfmf.some(word => msg.content.includes(word))){
        msg.channel.send(Mfmf_Reply) 
    } //ok

    if (AQUA.some(word => msg.content.includes(word))){
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

    if (Smoke.some(word => msg.content.includes(word))){
        const Smoke_ReplyS = Smoke_Reply[Math.floor(Math.random()* Smoke_Reply.length)]
        msg.channel.send(Smoke_ReplyS) ///ok
    }

    if (Rage.some(word => msg.content.includes(word))){
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

    if (Bansheee.some(word => msg.content.includes(word))){
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

    if (Rightnow.some(word => msg.content.includes(word))){
        msg.reply(Rightnow_Reply) 
    } //ok

    if (RSHO.some(word => msg.content.includes(word))){
        msg.channel.send("<:2_:1004514328361324626>阿修一生摯愛!!!趕快去訂閱!!!") 
    } //ok

    if (HAKU.some(word => msg.content.includes(word))){
        msg.channel.send("<:2_:1004514328361324626>酷酷的警官!!!趕快去訂閱!!!") 
    } //ok

    if (SHALALA.some(word => msg.content.includes(word))){
        msg.channel.send("<:2_:1004514328361324626>講話色色的蝦哥!!!趕快去訂閱!!!") 
    } //ok

    if (YAN.some(word => msg.content.includes(word))){
        msg.reply(YAN_Reply) 
    } //ok

    if (AH.some(word => msg.content.includes(word))){
        msg.reply(AH_Reply)
    } //ok

    if (YUKI.some(word => msg.content.includes(word))){
        msg.reply(YUKI_Reply) //ok
    }
    
    if (Singer.some(word => msg.content.includes(word))){
        msg.reply(Singer_Reply) //ok
        msg.channel.send("https://cdn.discordapp.com/emojis/946832559642378290.gif?size=4096&quality=lossless")
    }

    if (Lick.some(word => msg.content.includes(word))){
        const Lick_ReplyS = Lick_Reply[Math.floor(Math.random()* Lick_Reply.length)]
        msg.channel.send(Lick_ReplyS) ///ok
    }

    if (FatEn.some(word => msg.content.includes(word))){
        const FatEn_ReplyS = FatEn_Reply[Math.floor(Math.random()* FatEn_Reply.length)]
        msg.reply(FatEn_ReplyS) ///ok
    }

    if (WaterMelon.some(word => msg.content.includes(word))){
        const WaterMelon_ReplyS = WaterMelon_Reply[Math.floor(Math.random()* WaterMelon_Reply.length)]
        msg.reply(WaterMelon_ReplyS) ///ok
    }

    if (Meow.some(word => msg.content.includes(word))||msg.content===("!喵喵")){
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
    if (Notgay.some(word => msg.content.includes(word))){
        const Notgay_ReplyS = Notgay_Reply[Math.floor(Math.random()* Notgay_Reply.length)]
        msg.channel.send(Notgay_ReplyS) ///ok
    }
    if (dirtyW.some(word => msg.content.includes(word))) {
        msg.reply(DirtyW_Reply) //ok
    }
    if (RRRR.some(word => msg.content.includes(word))){
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
    if (GN.some(word => msg.content.includes(word))){
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
    if (GN99.some(word => msg.content.includes(word))){
        const GN99_Replys = GN99_Reply[Math.floor(Math.random()* GN99_Reply.length)]
        msg.channel.send(GN99_Replys) //ok
    }
    if (Late.some(word => msg.content.includes(word))){
        const Late_Replys = Late_Reply[Math.floor(Math.random()* Late_Reply.length)]
        if (Late_Replys==Late_Reply[0])
        {
        msg.reply(Late_Replys) //ok
        }
        else{
            msg.channel.send({files:['./cry_oh.mp3']});
        }
    }
    if (O1O1.some(word => msg.content.includes(word))){
        //msg.channel.send("https://imgur.com/a/uVTEjiV.jpg")
        msg.channel.send({files:['./O1O1.jpg']});
    } //ok

    if (WEIWEI.some(word => msg.content.includes(word))){
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

    if (Gay.some(word => msg.content.includes(word))){
        //msg.channel.send("https://imgur.com/a/uVTEjiV.jpg")
        msg.channel.send({files:['./ewwww.png']});
    } //ok
    if (JJ.some(word => msg.content.includes(word))){
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
    if (GirlD.some(word => msg.content.includes(word))){
        const GirlD_Replys = GirlD_Reply[Math.floor(Math.random()* GirlD_Reply.length)]
        msg.reply(GirlD_Replys) //ok
    }
    if (drawlots.some(word => msg.content.includes(word))){
        const drawlots_Replys = drawlots_Reply[Math.floor(Math.random()* drawlots_Reply.length)]
        msg.reply(drawlots_Replys) //ok
    }
    if (Notyourwife.some(word => msg.content.includes(word))){
        const Notyourwife_Replys = Notyourwife_Reply[Math.floor(Math.random()* Notyourwife_Reply.length)]
        msg.reply(Notyourwife_Replys) //ok
        msg.channel.send({files:['./xinlibiantai.mp3']});
    }
    
});

