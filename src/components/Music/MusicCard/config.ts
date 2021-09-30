
type musicDataArr = {
    id: number,
    name: string,
    singer: string,
    src: string,
    img: string,
    timeLength: number,
    lyric: string
}
type musicDataType = Array<musicDataArr>
//音乐数据
export const musicData: musicDataType = [
    // {
    //     id: 29950496,
    //     name: 'Angels',
    //     singer: 'Joshua Radin',
    //     src: "https://music.163.com/song/media/outer/url?id=29950496.mp3",
    //     img: "https://p2.music.126.net/9FqM6gVM1te8atYZ5RKcpQ==/109951164853335450.jpg",
    //     timeLength: 188731,
    //     lyric: "[00:11.33]It's been a long time that I've been on my own, and I can't take no more\n[00:21.13]But these winds are changin'\n[00:23.66]They'll blow me through the storm until I see the shore\n[00:30.50]And I'm prayin' for someone to show me I'm not done\n[00:36.15]Sometimes I see your face\n[00:40.17]You've got everything I need\n[00:45.04]When I'm lost, it's only you I seek\n[00:50.21]You've got wings to set me free\n[00:55.30]When I doubt, you're makin' me believe\n[01:00.27]That angels can fall, angels can fall\n[01:09.97]And I'll cross the ocean\n[01:12.43]I'll walk the desert sand\n[01:14.84]I'll find those hills to climb\n[01:19.88]And I'll keep on searchin' 'cause I know you want to land\n[01:25.03]Into these arms of mine\n[01:29.25]On this road that I'm walkin', I hear you talkin'\n[01:34.89]I know I'll find you soon\n[01:38.85]You've got everything I need\n[01:43.84]When I'm lost, it's only you I seek\n[01:48.96]You've got wings to set me free\n[01:53.98]When I doubt, you're makin' me believe\n[01:58.99]That angels can fall, angels can fall\n[02:08.40]I've been hurt and I've been left on the floor\n[02:18.42]You're the light that lifts me up through that open door\n[02:29.92]You've got everything I need\n[02:34.82]When I'm lost, it's only you I seek\n[02:39.96]You've got wings to set me free\n[02:45.08]When I doubt, you're makin' me believe\n[02:50.07]That angels can fall, angels can fall\n"
    // },
    {
        id: 1303027499,
        name: 'Angels',
        singer: '棱镜',
        src: "https://music.163.com/song/media/outer/url?id=1303027499.mp3",
        img: "https://p2.music.126.net/RfUHXkanpxImcaGqFNWBeA==/109951163598901405.jpg",
        timeLength: 270000,
        lyric: "[00:00.000] 作词 : 高原/陈恒冠\n[00:01.000] 作曲 : 陈恒冠\n[00:02.10]编曲：陈恒冠\n[00:06.97]\n[00:13.58]从前我的另一边\n[00:18.14]通往凌晨的街\n[00:21.44]空无一人的世界\n[00:26.89]行影匆匆这些年\n[00:31.23]期望从未破灭\n[00:34.69]默不作响的时间\n[00:40.73]最好的人注定会到身边\n[00:47.23]孤注一掷的执念\n[00:53.84]我终将看到你身影逆光 出现\n[01:06.64]等这一切 都被你了解 十指错落相牵\n[01:20.29]跨越时间 再没有分别 携手走过明天\n[01:45.78]雨后路人化鱼鲔\n[01:50.29]欢愉游跃摇曳\n[01:52.89]灿烂一抱的世界\n[01:59.62]光芒捧起你的脸\n[02:03.33]我飞在云层间\n[02:06.63]狂奔向你不停歇\n[02:12.78]你说最好的人会到身边\n[02:19.33]此刻我也这样想\n[02:25.94]你终将看到我最美模样 出现\n[02:38.89]等这一切 都被你了解 十指错落相牵\n[02:52.19]跨越时间 再没有分别 携手走过明天\n[03:05.35]总会有些 幸运会出现 我等待这一天\n[03:18.59]总有艰险 哪怕是谎言 我等待你出现\n[03:31.73]等这一切 都被你了解 十指错落相牵\n[03:44.88]跨越时间 再没有分别 携手走过明天\n[03:57.70]等这一切 都被你了解 十指错落相牵\n[04:11.25]跨越时间 总会有一天 你出现我身边\n[04:12.25]\n[04:13.25]混音：陈恒家\n[04:14.25]封面：水吉\n[04:15.25]监制：1991与她\n"
    },
    // {
    //     id: 1294467974,
    //     name: '长沙HOOD',
    //     singer: 'KEY.L刘聪 / $CC731',
    //     src: "https://music.163.com/song/media/outer/url?id=1294467974.mp3",
    //     img: "https://p1.music.126.net/tjs6JyPbZFFSvlkLbSqJzw==/109951163412049985.jpg",
    //     timeLength: 244000,
    //     lyric: "[00:00.000] 作词 : KEY.L刘聪\n[00:01.000] 作曲 : KEY.L刘聪\n[00:05.031]Prod By：$CC731\n[00:09.583]\n[00:10.119]嗯咯 长沙city 长沙city hey 满哥\n[00:16.463]嗯咯 长沙city 长沙city hey 妹坨\n[00:19.849]VERSE 1\n[00:20.168]哥们住在韶山南路 rap长沙南部\n[00:22.664]各种新人和老顽固 说话爱绕弯路\n[00:25.206]说唱是我手里玩物 哥们玩的专注\n[00:27.894]这的圈子竞争残酷 我来帮你提高难度\n[00:30.736]拿走你肮脏的paper 哥们良心不会跪着\n[00:36.199]玩就玩真的感觉对了管你fake还是hater\n[00:38.752]公平才能是长久相处的规则\n[00:41.376]一下大晴天变暴风雨\n[00:43.319]两轮车自由穿梭在拥挤交通里\n[00:45.863]今天作息又不在我手机闹钟里\n[00:48.487]夏天路上的妹坨绝对能掏空你\n[00:51.064]这里骨肉皮叫ho 但不能smoke\n[00:53.994]必须fresh必须clean 哥们自然chill\n[00:56.263]这里og不再od 流行gold teeth\n[00:59.313]刘聪的key.L 狠歌不再藏抽屉\n[01:01.392]HOOK\n[01:01.687]put your hands up put your hands up\n[01:04.599]shout out 我的城市0731\n[01:07.303]keep you head up keep you head up\n[01:09.720]shout out 我的城市0731\n[01:12.271]嗯咯 长沙city 长沙city hey 满哥 嗯咯\n[01:17.839]嗯咯 长沙city 长沙city hey 妹坨\n[01:21.775]VERSE 2\n[01:22.385]我每次经过猴子石望着那湘江\n[01:24.695]青年毛泽东屹立在革命的江上\n[01:27.519]要当个真正的hustler得奋发向上\n[01:29.985]风吹散岳麓山顶的乌云露出阳光\n[01:32.894]风吹散这儿的爱恨 风带来我的爱人\n[01:38.047]生活磨砺我的意志我的天赋我的才能\n[01:40.956]音乐是我兴趣也是我的财神\n[01:43.288]我爱他因为没有一线城市冰冷而该有的都有感谢遇到我的homie 有事随时call me\n[01:48.495]钱放进我兜里 命运握在手里 eeeeer\n[01:51.127]dont act like u dont know me\n[01:53.306]我恨他 娱乐过度 丢失态度\n[01:54.633]搞关系说是人情世故\n[01:55.928]圈子太小 调子太高\n[01:57.183]不合理传统作茧自缚\n[01:58.495]画地为牢 手低眼高\n[01:59.799]不爱脚踏实地满是套路\n[02:01.080]黑麋峰 压山路\n[02:01.731]看日出 摩托车\n[02:02.431]该管控 而不是\n[02:03.127]不能上路\n[02:03.720]wu～\n[02:04.375]这是key.L 从小就喝湘江水 晓得噻\n[02:09.831]来自0734 混迹0731\n[02:12.839]u better know 我的湖湘flow\n[02:14.287]HOOK\n[02:14.607]put your hands up put your hands up\n[02:16.807]shout out 我的城市0731\n[02:19.344]keep you head up keep you head up\n[02:21.737]shout out 我的城市0731\n[02:24.311]嗯咯 长沙city 长沙city hey 满哥 嗯咯\n[02:29.959]嗯咯 长沙city 长沙city hey 妹坨\n[02:34.511]VERSE 3\n[02:34.824]我从中山亭到白沙路\n[02:36.927]解放西那不是我的hood\n[02:39.472]中南大学开到梅溪湖\n[02:41.999]没有长沙户口没地儿住 wu～\n[02:44.831]homie要我学长沙话\n[02:46.896]方便杀价 就算不打架也方便你去拉架\n[02:49.780]我认识很多长沙人 不懂长沙魂\n[02:52.607]我住长沙城 flow常杀人 un\n[02:55.552]没营养的trap我们叫它缺的\n[02:58.079]切歌 兄弟 叫他歇着\n[03:00.607]趴在床上屁股撅着 还在刷着朋友圈呢\n[03:03.015]有了女朋友 不能约了\n[03:05.879]只好约我女友去河边走\n[03:08.423]这湘江不叫江边叫河边头\n[03:10.936]行人随意扔掉手里的烟头\n[03:13.391]一转眼也差不多十二个年头\n[03:16.168]HOOK\n[03:16.361]put your hands up put your hands up\n[03:21.343]shout out 我的城市0731\n[03:23.207]keep you head up keep you head up\n[03:25.192]shout out 我的城市0731\n[03:26.536]嗯咯 长沙city 长沙city hey 满哥 嗯咯\n[03:31.424]嗯咯 长沙city 长沙city hey 妹坨\n[03:58.216]CSC  mother **** peace\n"
    // },
    {
        id: 1349946492,
        name: 'Way Back Into Love',
        singer: 'ZAYN / Sia',
        src: "https://music.163.com/song/media/outer/url?id=1349946492.mp3",
        img: "https://p1.music.126.net/7Uh3afMddCGf-WRNBylAUQ==/109951163903701291.jpg",
        timeLength: 252447,
        lyric: "[00:00.87]\"Way Back Into Love\"Take one\n[00:03.81]Oh,God.I'm getting really nervous.\n[00:05.59]You'll be fine.Just use your normal nice voice.\n[00:08.81]that I've heard so much of in the last three days.\n[00:10.27]It;s like my throat's closing up.It's like anaphylactic\n[00:14.48]It's fine.It's just a three-minute song.\n[00:20.57]I've been living with a shadow overhead\n[00:25.29]I've been sleeping with a could\n[00:25.28]\n[00:27.44]Just a little bit louder.Cause the song is intended for humans.OK.\n[00:30.07]\"Way Back Into Love\"Take two.\n[00:34.61]I've been living with a shadow overhead\n[00:38.87]I've been sleeping with a cloud above my bed\n[00:43.66]I've been lonely for so long\n[00:47.55]Trapped in the past\n[00:50.03]I just can't seem to move on\n[00:52.95]\n[00:53.54]I've been hiding all my hopes and dreams away\n[00:57.73]\n[00:58.04]Just in case I ever need them again someday\n[01:02.57]\n[01:02.92]I've been setting aside time\n[01:06.35]\n[01:06.86]To clear a little space in the corners of my mind\n[01:12.29]\n[01:13.28]All I wanna do is find a way back into love\n[01:20.03]\n[01:21.61]I can't make it through without a way back into love\n[01:29.38]\n[01:30.33]Oh oh oh\n[01:33.30]\n[01:33.76]\n[01:36.66]I've been watching but the stars refuse to shine\n[01:40.97]\n[01:41.38]I've been searching but I just don't see the signs\n[01:45.03]\n[01:45.94]I know that it is out there\n[01:49.06]\n[01:49.93]There is got to be something for my soul somewhere\n[01:54.92]\n[01:55.32]I've been looking for someone to shed some lights\n[01:59.25]\n[01:59.77]Not somebody just to get me through the night\n[02:03.89]\n[02:04.30]I could use some direction\n[02:07.74]\n[02:08.78]And I'm open to your suggestions\n[02:13.43]\n[02:14.54]All I wanna do is find a way back into love\n[02:20.76]\n[02:22.63]I can't make it through without a way back into love\n[02:30.43]\n[02:31.33]And if I open my heart again\n[02:35.33]\n[02:35.70]I guess I am hoping you'll be there for me in the end\n[02:42.18]\n[02:42.43]（Drew Laughing)\n[02:45.64]\n[02:46.46]Oh for heaven's sake!\n[02:47.54]\n[02:47.94]That's your serious Oh, Oh, Oh face.\n[02:50.25]\n[02:50.80]I know I can work with that much\n[02:52.31]\n[02:52.52]that is my Rock n' Roll face\n[02:53.54]\n[02:54.08]millions of women find that very ***y,\n[02:56.26]\n[02:56.64]are you promise ? R U?... Oh, OK.\n[02:59.55]\n[02:59.96]\n[03:00.73]There are moments when I don't know if it's real\n[03:04.73]\n[03:05.09]Or if anybody feels the way I feel\n[03:09.42]\n[03:09.82]I need inspiration\n[03:13.07]\n[03:14.12]Not just another negotiation\n[03:20.17]All I wanna do is find a way back into love\n[03:27.09]\n[03:29.61]I can't make it through without a way back into love\n[03:36.56]\n[03:37.42]And if I open my heart to you\n[03:41.41]\n[03:41.84]I'm hoping you'll show me what to do\n[03:46.20]\n[03:46.52]And if you help me to start again\n[03:50.79]\n[03:52.23]You know that I'll be there for you in the end\n"
    },
    {
        id: 1409344469,
        name: '骂醒我 (翻自 周汤豪) ',
        singer: '崔天琪',
        src: "https://music.163.com/song/media/outer/url?id=1409344469.mp3",
        img: "https://p1.music.126.net/KZtTEGYxqE82UgtNBtPvlw==/109951164546514166.jpg",
        timeLength: 256966,
        lyric: "[00:00.000] 作词 : 姚若龙\n[00:00.005] 作曲 : 陈颖见\n[00:00.11]\n[00:03.60]Oh~ Babe 能不能抓住我\n[00:08.01]当我的心被搞乱了\n[00:11.36]当我又笨得要逃走 Oh~\n[00:17.35]Babe 从背後抓住我\n[00:21.62]当我的冲动又犯了\n[00:24.98]当骄傲把我变讨厌了\n[00:29.14]狠狠骂醒我\n[00:34.10]有的时候很想玩\n[00:37.17]有的时候只想和你作伴\n[00:41.45]心情不停不停地旋转 Oh yeah~\n[00:47.34]就算发了脾气嫌你烦\n[00:50.81]也愿意为你接受任何挑战\n[00:56.36]要你笑得最灿烂\n[01:01.21]恨别人管我 又爱有人等我\n[01:08.00]嘴里喊着想自由 又渴望你抱我\n[01:14.76]每次看你难过 不管我道歉没有\n[01:22.89]心还是会刺痛 Oh~\n[01:28.29]Babe 能不能抓住我\n[01:32.54]当我的心被搞乱了\n[01:35.87]当我又笨得要逃走 Oh~\n[01:41.82]Babe 从背後抓住我\n[01:46.06]当我的冲动又犯了\n[01:49.42]当骄傲把我变讨厌了\n[01:53.62]狠狠骂醒我yeah~\n[01:59.96]不要放弃我yeah~\n[02:08.50]有的时候很简单\n[02:11.80]有的时候沟通那么的难\n[02:16.02]就有冲动调头不听也不看\n[02:22.12]就算争吵的话多难堪\n[02:25.24]最後还是鼻酸又抱成一团\n[02:30.84]就怕爱变遗憾\n[02:35.87]Babe 能不能抓住我\n[02:40.00]当我的心被搞乱了\n[02:43.41]当我又笨得要逃走 Oh~\n[02:49.37]Babe 从背後抓住我\n[02:53.50]当我的冲动又犯了\n[02:56.88]当骄傲把我变讨厌了\n[03:01.19]狠狠骂醒我\n[03:03.12]Babe 能不能抓住我\n[03:07.09]当我的心被搞乱了\n[03:10.28]当我又笨得要逃走 Oh~\n[03:16.25]Babe 从背後抓住我\n[03:20.52]当我的冲动又犯了\n[03:23.87]当骄傲把我变讨厌了\n[03:28.15]狠狠骂醒我yeah~\n[03:30.21]Babe 能不能抓住我\n[03:34.03]当我的心被搞乱了\n[03:37.36]当我又笨得要逃走 Oh~\n[03:43.34]Babe 从背後抓住我\n[03:47.61]当我的冲动又犯了\n[03:50.97]当骄傲把我变讨厌了\n[03:55.19]狠狠骂醒我yeah~\n[04:01.78]不要放弃我yeah~\n[04:09.75]不要放弃我\n"
    },
    {
        id: 18638058,
        name: 'Mistletoe',
        singer: 'Justin Bieber',
        src: "https://music.163.com/song/media/outer/url?id=18638058.mp3",
        img: "https://p2.music.126.net/e5SktTlrYYZbH6TD3LFilA==/109951163221138967.jpg",
        timeLength: 183000,
        lyric: "[00:00.000] 作词 : Nasri Atweh/ADAM MESSINGER/Justin Bieber\n[00:01.000] 作曲 : Nasri Atweh/ADAM MESSINGER/Justin Bieber\n[00:04.280]It's the most beautiful time of the year\n[00:07.050]Lights fill the streets spreading so much cheer\n[00:10.170]I should be playing in the winter snow\n[00:12.970]But I'mma be under the mistletoe\n[00:15.880]I don't wanna miss out on the holiday\n[00:18.750]But I can't stop staring at your face\n[00:22.020]I should be playing in the winter snow\n[00:24.870]But I'mma be under the mistletoe\n[00:27.780]With you' shawty with you\n[00:30.590]With you' shawty with you\n[00:33.440]With you' under the mistletoe\n[00:39.800]Everyone's gathering around the fire\n[00:42.690]Chestnuts roasting like a hot July\n[00:45.530]I should be chillin with my folks I know\n[00:48.610]But I'mma be under the mistletoe\n[00:51.710]Word on the street santa's coming at night\n[00:54.450]Reindeer's flying to the sky so high\n[00:57.630]I should be making a list i know\n[01:00.750]But I'mma be under the mistletoe\n[01:03.630]With you,shawty with you\n[01:05.940]With you,shawty with you\n[01:08.990]With you,under the mistletoe\n[01:14.840]With you,shawty with you\n[01:17.790]With you,shawty with you\n[01:20.730]With you,under the mistletoe\n[01:26.340]Aye love' the wiseman followed a star\n[01:30.830]The way I follow my heart\n[01:34.870]And it led me to a miracle\n[01:39.200]Aye love' dont you buy me nothing\n[01:43.650]Cause I am feelin one thing\n[01:46.620]your lips on my lips\n[01:49.570]That's a merry merry Christmas\n[01:52.170]It's the most beautiful time of the year\n[01:54.850]Lights fill the streets spreading so much cheer\n[01:58.050]I should be playing in the winter snow\n[02:00.660]But I'mma be under the mistletoe\n[02:03.940]I don't wanna miss out on the holiday\n[02:06.630]But I can't stop staring at your face\n[02:09.680]I should be playing in the winter snow\n[02:12.600]But I'mma be under the mistletoe\n[02:15.870]With you' shawty with you\n[02:18.200]With you' shawty with you\n[02:21.250]With you' under the mistletoe\n[02:27.050]With you' shawty with you\n[02:29.990]With you' shawty with you\n[02:32.940]With you' under the mistletoe\n[02:38.840]Kiss me underneath the mistletoe\n[02:41.420]show me baby that you love me so oh oh\n[02:45.020]oh oh oh\n[02:50.630]Kiss me underneath the mistletoe\n[02:53.350]show me baby that you love me so oh oh\n[02:58.550]oh oh oh\n"
    },
    {
        id: 28830160,
        name: '长沙策长沙',
        singer: 'C-BLOCK',
        src: "https://music.163.com/song/media/outer/url?id=28830160.mp3",
        img: "https://p2.music.126.net/4yI-ClgZGIGaHisOWwJFXg==/5931865232257374.jpg",
        timeLength: 278000,
        lyric: "[00:00.000] 作词 : C-BLOCK\n[00:01.000] 作曲 : C-BLOCK\n[00:32.840]我从细到大 住在长沙河西\n[00:35.290]恰的水 恰的鱼 哈是湘江河滴\n[00:37.730]河东到河西 那里到各里\n[00:40.350]公车线我哈熟 万一不懂的就打的\n[00:42.660]我不是杂满哥也不是老口子\n[00:44.840]但是槟榔不选别的只恰老口子\n[00:47.650]你晓得白沙井 白沙烟 白沙酒\n[00:50.270]不晓得红花坡 黄土岭 黑石渡\n[00:52.710]马王堆的辛追娭毑现在住在博物馆里\n[00:55.650]省图书馆从周一到周日都是满的\n[00:58.090]古迹现在只有走马楼和天心阁\n[01:00.270]爱晚亭和岳麓书院你要清白\n[01:02.890]你听过弹词 不一定听过C-BLOCK\n[01:04.879]\n[01:05.730]你晓得练地 不一定晓得HIPHOP\n[01:07.849]我们住得长沙 所以长沙话说唱\n[01:10.549]你要懂味 举哒手摇 就像我各范\n[01:13.360]嗲嗲60岁还要克五一广场玩板\n[01:15.790]驮哒崽要恰辣椒 她港不然难产\n[01:18.230]恰得亏 霸得蛮 各叫长沙态度\n[01:20.670]湘楚的古老文化 长沙才有\n[01:23.189]我在附中读书 各里有条堕落街\n[01:25.620]小吃尽是 妹子一个比一个HIGH\n[01:28.189]一车过桥步行街 还搞点别的\n[01:30.860]药王街的四合一 那硬是要恰热的\n[01:33.610]记住长沙有花鼓戏和湘绣\n[01:35.860]听哒刘海砍樵就不想走\n[01:38.260]C-BLOCK欢迎大家来到长沙\n[01:40.959]长沙人伸出你的手再莫港哒\n[01:43.489]\n[01:48.840]长沙CITY 长沙SHOW\n[01:51.090]长沙C-BLOCK 长沙FLOW\n[01:53.709]长沙妹坨 叫长沙GIRL\n[01:56.140]我从南门口走到河边头\n[01:58.140]\n[01:59.040]长沙CITY 长沙SHOW\n[02:01.219]长沙C-BLOCK 长沙FLOW\n[02:03.719]长沙妹坨叫长沙GIRL\n[02:06.230]我从南门口走到河边头\n[02:08.469]\n[02:14.460]月亮粑粑兜里坐个嗲嗲\n[02:16.650]嗲嗲出来买菜兜里坐个奶奶\n[02:17.870]\n[02:31.720]跟你港 我是长沙伢子地道滴长沙娃\n[02:33.979]所以长沙的说唱我用长沙话\n[02:35.919]\n[02:36.470]从小到大 从细到老\n[02:38.949]0731时刻子只让你觉得骄傲\n[02:41.569]南门口 河边头 变化的很大\n[02:44.000]以前稀烂的北正街早就已经不在\n[02:46.580]从东塘 清水塘到扫把塘\n[02:48.840]还有长岭 窑岭到伍家岭\n[02:50.970]\n[02:51.590]长沙飞快发展 城市越来越好\n[02:53.960]就像长沙的HIPHOP 越来越吊\n[02:56.639]长沙电视厉害 收视飞上天\n[02:59.030]想法走在别个前面 你们莫拢我的边\n[03:01.780]老一辈的长沙理手 创建美丽星城\n[03:04.270]告诉我们恰苦耐劳 是长沙精神\n[03:06.960]长沙好多靓姐 星姐倾国倾城\n[03:09.270]我爱长沙 要港出我的心声\n[03:11.259]\n[03:11.949]每次演出 嗲嗲娭毑跟哒我吼\n[03:14.490]要恰好恰的 细牙子哈跟哒我走\n[03:17.050]四娭毑 杨裕兴 火宫殿\n[03:18.789]\n[03:19.419]饭前白沙井水 饭后点一根白沙烟\n[03:21.909]不仅恰得饱 味道好还嗬便宜\n[03:24.470]实在不行 还可以 七圆的七扁的\n[03:27.090]各里除开月亮粑粑还有糖油粑粑\n[03:29.509]兜里坐的不是嗲嗲 但是真的很好恰\n[03:31.879]还有南门口 喷香的臭干子\n[03:34.210]哪个港不好恰 就是砸戳把子\n[03:36.789]我爱长沙 她就像我的姆妈\n[03:39.220]\n[03:39.780]我们都是策神 叫做C-BLOCK\n[03:41.590]\n[03:42.210]不是夹多力多 也不是结筋惯筋\n[03:44.639]只是代表长沙向大家表示欢迎\n[03:47.270]长沙CITY 长沙SHOW\n[03:49.259]\n[03:49.830]长沙C-BLOCK 长沙FLOW\n[03:51.879]\n[03:52.509]长沙妹坨 叫长沙GIRL\n[03:54.440]\n[03:55.009]我从南门口走到河边头\n[03:57.250]长沙CITY 长沙SHOW\n[03:59.330]\n[04:00.139]长沙C-BLOCK 长沙FLOW\n[04:01.879]\n[04:02.509]长沙妹坨 叫长沙GIRL\n[04:04.439]\n[04:05.330]我从南门口走到河边头\n[04:07.080]\n[04:07.759]长沙CITY 长沙SHOW\n[04:10.009]长沙C-BLOCK 长沙FLOW\n[04:12.669]长沙的妹坨 叫长沙GIRL\n[04:15.099]我从南门口走到河边头\n[04:16.860]\n[04:17.550]长沙CITY 长沙SHOW\n[04:19.360]\n[04:20.110]长沙C-BLOCK 长沙FLOW\n[04:22.670]长沙妹坨 叫长沙GIRL\n[04:25.110]我从南门口走到河边头\n"
    }
]