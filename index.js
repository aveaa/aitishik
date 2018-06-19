const Discord = require("discord.js");
const bot = new Discord.Client();

/** @namespace process.env.PREFIX */
/** @namespace process.env.BOT_TOKEN */
 
//Префикс
let p = process.env.PREFIX
//ID Создателя
let creator_id = `242975403512168449`
//ID Ролей
let moder = `437291491724099586`
let owner = `437291380625113108`
let plus = '437308696805113857'
let color = `437594996758020099`
let elite = `437308437991260170`
let watcher = '437309176105009152' //Watcher - Наблюдатель
let epic = '437584248677990410'
let textChannel = '446351322997063692' //testChannel - Разрешение на создание текстового канала
let warn1 = '449221480346288139';
let warn2 = '449221534360403978';
let warn3 = '449221570901180417';
let muted = '439490675281756172';
//ID Кейсов
let caseRole = `444419306155933716`
let magicCaseRole = '444419909947097089'
let legendaryCaseRole = '444420023755210752'
let caseLotteryRole = '444420247282253825'
//ID Тесктовых каналов
let chat = '437290659142041602'
//ID Голосовых каналов
let music = '437306582305341443'
let CXODKA = '442419802947059722'//Сходка
//Эмодзи
let yoba = '<:yoba:437618349917339658>';
let one = '<:oneEmoji:457554835676332032>';
let two = '<:twoEmoji:457554850582888459>';
let three = '<:threeEmoji:457554861739868181>';
let four = '<:fourEmoji:457554874935279616>';
let five = '<:fiveEmoji:457554890374250516>';

const bot_name = 'Айтишник';
const version = 'v0.9.0'
//Функции
//Функция для генерации случайного числа от min до max
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
 
//Функции для перемены игр
function game1() {
    bot.user.setActivity('на ' + p + 'help для справки',{ type: 'WATCHING' })
    setTimeout(game2, 16000);
}
 
function game2() {
    bot.user.setActivity('на ' + p + 'info для информации',{ type: 'WATCHING' })
    setTimeout(game3, 16000);
}
 
function game3() {
    bot.user.setActivity('It The Best!',{ type: 'PLAYING' })
    setTimeout(game1, 16000);
}
//Функция для добавления нескольких реакций под сообщение
async function multipleReact(message, arr) {
    if (arr !== []) {
        await message.react(arr.shift()).catch(console.error).then(function () {multipleReact(message,arr).catch();});
    }
}

function setBigTimeout(func, timeout) {
    if (timeout > 0x7FFFFFFF)
        setTimeout(function() {setBigTimeout(func, timeout-0x7FFFFFFF);}, 0x7FFFFFFF);
    else
        setTimeout(func, timeout);
}
 
bot.on('guildMemberAdd', (member) => {
    member.send('Приветствую тебя дорогой друг, я - бот этого сервера. Познакомься с ним не торопясь. Желательно, прочитать все написанное в #info. А если понадобится помощь с моими командами, то просто напиши ' + p + 'help');
    });
 
//То что должно произойти после запуска бота
bot.on('ready', () => {
    //Запуск цикла перемены игр
    setTimeout(game1, 1000)
    console.log('Успешный запуск');
});

bot.on('message', message => {
    if(message.channel.type !== 'text') return;
    if(message.channel.id === '451456071685636096') return;
    let arr = [];
    message.guild.fetchInvites().then(invites => {
        let user = message.mentions.members.first();
        invites.forEach(invite => {
            arr.push(invite.code);
        })
    let matches = message.content.match(/https:\/\/discord(app\.com|\.gg|\.me|\.io)\/?(invite\/)?([_a-zA-Z0-9]{5,32})/gi);
    if (matches)
        matches.forEach((match) => {
            if (!arr.includes(match.match(/https:\/\/discord(app\.com|\.gg|\.me|\.io)\/?(invite\/)?([_a-zA-Z0-9]{5,32})/i)[3])) {
                message.delete();
                user.addRole(muted);
                message.channel.send(user + ' был успешно замучен на 24 часа. Причина: пиар');
                setBigTimeout(() => {
                    user.removeRole(muted);
                    message.channel.send(user + ' был размучен');}, getSeconds(86400)*1000);
        }

    })
    });
 
    if (message.author.bot) return;
    if(message.content.indexOf(process.env.PREFIX) !== 0) return;
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const vote = message.content.slice(process.env.PREFIX.length).trim().split(/;+/g);
    const command = args.shift().toLowerCase();
   
    if (message.channel.type !== 'text') return;
 
    if (['poll', 'vote'].includes(command)) {
        let question
        if (!vote[0]) {
            message.channel.send('Вы забыли указать вопрос');
            return
        } else {
            question = vote[0].replace('poll ', '')
        }
 
        if (!vote[1]) {
            message.channel.send('Вы забыли указать за что голосовать');
            return
        } else {
            message.delete();

            if (!vote[2]) {
                message.channel.send(':bar_chart:**' + question + '**\n' + one + ' - ' + vote[1]).then((msg) => {
                multipleReact(msg, [bot.emojis.get('457554835676332032'), ])});
                    
            } else if (!vote[3]) {
                message.channel.send(':bar_chart:**' + question + '**\n' + one + ' - ' + vote[1] + '\n' + two + ' - ' + vote[2]).then((msg) => {
                multipleReact(msg, [bot.emojis.get('457554835676332032'), bot.emojis.get('457554850582888459'),])});
                return;
            } else if (!vote[4]) {
                message.channel.send(':bar_chart:**' + question + '**\n' + one + ' - ' + vote[1] + '\n' + two + ' - ' + vote[2] + '\n' + three + ' - ' + vote[3]).then((msg) => {
                multipleReact(msg, [bot.emojis.get('457554835676332032'), bot.emojis.get('457554850582888459'), bot.emojis.get('457554861739868181') ])});
                return;
            } else if (!vote[5]) {
                message.channel.send(':bar_chart:**' + question + '**\n' + one + ' - ' + vote[1] + '\n' + two + ' - ' + vote[2] + '\n' + three + ' - ' + vote[3] + '\n' + four + ' - ' + vote[4]).then((msg) => {
                multipleReact(msg, [bot.emojis.get('457554835676332032'), bot.emojis.get('457554850582888459'), bot.emojis.get('457554861739868181'), bot.emojis.get('457554874935279616')])});
            }
            else if (!vote[6]) {
                message.channel.send(':bar_chart:**' + question + '**\n' + one + ' - ' + vote[1] + '\n' + two + ' - ' + vote[2] + '\n' + three + ' - ' + vote[3] + '\n' + four + ' - ' + vote[4] + '\n' + five + ' - ' + vote[5]).then((msg) => {
                multipleReact(msg, [bot.emojis.get('457554835676332032'), bot.emojis.get('457554850582888459'), bot.emojis.get('457554861739868181'), bot.emojis.get('457554874935279616'), bot.emojis.get('457554890374250516')])});
            }
            else if (vote[6]) {
                message.channel.send('Вы превысили максимальный лимит выборов для голосования');
            }
        }
    }
if (['Test', 'Тест', 'Еуые'].includes(command)) {
    const embed = new Discord.RichEmbed()
    .setTitle("Мут")
    .setColor("af00ff")
    .setDescription('Вы были замучены пользователем ' + message.author + 'Время: ' + 'time' + '. Причина: ' + 'reason' + '. Не ведите себя плохо!')
    .setFooter(bot_name + " | " + version + " | Все права защищены")
    .setTimestamp();
    message.channel.send({embed});
}
   
if (['ьгеу', 'mute', 'мут'].includes(command) && message.member.roles.some(r=>[moder, owner].includes(r.id))) {
    let user = message.mentions.members.first();
 
    if (!user)
        return message.channel.send('Вы забыли упомянуть пользователя или вы хотите замутить того кто не является пользователем');
 
    if (user.id == message.author.id) {
        message.channel.send('Зачем ты пытаешься замутить самого себя?');
        return;
    }
    function getSeconds(str) {
        let seconds = 0;
        let years = str.match(/(\d+)\s*y/);
        let months = str.match(/(\d+)\s*M/);
        let weeks = str.match(/(\d+)\s*w/);
        let days = str.match(/(\d+)\s*d/);
        let hours = str.match(/(\d+)\s*h/);
        let minutes = str.match(/(\d+)\s*m/);
        let secs = str.match(/(\d+)\s*s/);
        if (years) { seconds += parseInt(years[1])*31556926; }
        if (months) { seconds += parseInt(months[1])*2592000; }
        if (weeks) { seconds += parseInt(weeks[1])*604800; }
        if (days) { seconds += parseInt(days[1])*86400; }
        if (hours) { seconds += parseInt(hours[1])*3600; }
        if (minutes) { seconds += parseInt(minutes[1])*60; }
        if (secs) { seconds += parseInt(secs[1]); }
        return seconds;
    }
 
    user.addRole(muted);
    message.channel.send(user + ' был успешно замучен');
 
    if (args[1] && getSeconds(args[1]) !== 0 )
    setBigTimeout(() => {
        user.removeRole(muted);
        message.channel.send(user + ' был размучен');}, getSeconds(args[1])*1000);
}
 
    if (['unmute', 'гтьгеу'].includes(command)) {
        let user = message.mentions.members.first();
        if (!user) {
            message.channel.send('Вы забыли упомянуть пользователя');
        } else {
            if (user.roles.some(r=>[muted].includes(r.id))) {
                user.removeRole(muted);
                message.channel.send(user + ' был размучен');
            } else {
                message.channel.send(user + ' и так был не замучен');
            }
        }
    }
   
    if(['help'].includes(command)) {
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("af00ff")
            .setDescription('Мои команды: \n' + p + 'avatar `пользователь` - Показ аватарки пользоввателя \n' + p + 'say `текст` - бот скажет вашу реплику \(Могут только модераторы и Epic\) \n' + p + 'rsp `камень | ножницы |бумага` - Миниигра "Камень, ножницы, бумага" \n' + p + 'random `число` `число` - генерация случайного числа от 0 до любого другого числа \n' + p + 'poll `вопрос` `;` `варианты через \';\'` - голосование \n' + p + 'mute|unmute - мут или размут пользователя (Могут не все) \n' + p + 'caseinfo - информация о кейсах')
            .setFooter(bot_name + " | " + version + " | Все права защищены")
            .setTimestamp();
        message.channel.send({embed});
    }

   
            //.setDescription(p + 'case - открыть обычный кейс \n' + p + 'magiccase - открыть магичский кейс \n' + p + 'legendarycase - открыть легендарный кейс' + p + 'caselottery - открыть кейс-лотерею')
 
    if(["info"].includes(command)) {
        const embed = new Discord.RichEmbed()
            .setTitle("Информация")
            .setColor("af00ff")
            .setDescription('Привет, я собственный бот сервера \"IT\"\n `>-Зачем меня создали?-<`\n Я создан для автоматического открытия кейсов, для удаления спама, миниигр, и многого другого\n Чтобы узнать список моих команд на данный момент напиши команду =help')
            .setFooter(bot_name + " | " + version + " | Все права защищены")
            .setTimestamp();
        message.channel.send({embed});
    }

    if(["caseinfo"].includes(command)) {
        const embed = new Discord.RichEmbed()
            .setTitle("Информация о кейсах")
            .setColor("af00ff")
            .setDescription(p + 'open case - открыть обычный кейс \n' + p + 'open magiccase - открыть магичский кейс \n' + p + 'open legendarycase - открыть легендарный кейс\n' + p + 'open caselottery - открыть кейс-лотерею')
            .setFooter(bot_name + " | " + version + " | Все права защищены")
            .setTimestamp();
        message.channel.send({embed});
    }
 
    if (['скажи', 'say', 's'].includes(command)) {
        if (message.member.roles.some(r=> [moder, owner, epic].includes(r.id))) {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        let msg = message.channel.send(sayMessage).catch(()=>{message.reply(' не пиши просто =say. Надо писать =say \'Текст\'');
        });
    } else {
            message.channel.send('Извините, вы не можете использовать команду say, вы должны иметь роли Модератор или Epic');
    }}
 
    if(['av', 'avatar', 'ав', 'аватар', 'ava', 'a', 'ава', 'а'].includes(command)) {
        let user = message.mentions.members.first();
        if (!user) user = message.member;
        let av = new Discord.RichEmbed()
            .setImage(user.user.avatarURL)
            .setDescription("**Аватар пользователя **" + user + "\n" + "Представлено по запросу " + message.author)
            .setColor("af00ff")
            .setFooter(bot_name + " | " + version + " | Все права защищены")
            .setTimestamp();
        message.channel.send({embed: av});
        message.delete();
    }
    /*if (message.content.match(/\<\@.?\d+\>/gi)) {
        message.delete();
        message.channel.send('Не пингуй!');
    }*/
 
   /*if ([('IP').includes(command)]) {
        if (message.member.roles.some(r=> [owner].includes(r.id))) {
                let user = message.mentions.members.first();
                message.channel.send('Процесс вычисления IP ' + user + 'пошел');
                setInterval(8600000);
            message.channel.send('IP ' + user + 'вычислен. Дабы избежать взломов и подобного мошеничества я скинул IP вам в лс');
                if (!user) {
                    message.channel.send('Вы забыли упомянуть пользователя');
                }
        } else {
            message.channel.send('У вас недостаточно прав');
        }
    }*/
   
    if (['random', 'r'].includes(command)) {
 
        if (!args[0]) args[0] = 0;
       
        if (!args[1]) args[1] = 10;
 
        let rand = randomInteger(parseInt(args[0]), parseInt(args[1]));
        const embed = new Discord.RichEmbed()
            .setTitle("Информация")
            .setColor("af00ff")
            .setDescription('Вам выпало число ' + rand)
            .setFooter(bot_name + " | " + version + " | Все права защищены")
            .setTimestamp();
        message.channel.send({embed});
    }

    if (message.content.match(/@clan member`s/gi)) {
        message.channel.send(message.author + ', за упоминание, полагается наказание');
    }

    if (message.content.match(/@veryone/gi)) {
        message.channel.send(message.author + ', плати налоги за упоминания');
    }

    if (message.content.match(/@ere/gi)) {
        message.channel.send(message.author + ', плати налоги за упоминания');
    }
 
    //Камень, ножницы, бумага
    if (['rsp', 'кнб', 'кыз'].includes(command)) {
        let userChoice;
                if (['камень', 'rock', 'r', 'к'].includes(args[0].toLowerCase())) {
                    userChoice = 'камень';
                }
                else if (['бумагу', 'бумага', 'paper', 'p', 'б'].includes(args[0].toLowerCase())) {
                    userChoice = 'бумагу';
                }
                else if (['scissors', 'ножницы', 's', 'н'].includes(args[0].toLowerCase())) {
                    userChoice = 'ножницы';
                }
                else if (!args[0]) {
                    message.channel.send('Вы забыли указать что вы выбираете, камень, ножницы или бумагу');
                    return;
                }
                else {
                    userChoice = 'Incorrect';
                }
                let computerChoice = Math.random();
                if (computerChoice < 0.34) {
                    computerChoice = "камень";
                } else if(computerChoice <= 0.67) {
                    computerChoice = "бумагу";
                } else {
                    computerChoice = "ножницы";
                } message.channel.send("Я выбрал " + computerChoice);
                function rspCW(userChoice, computerChoice) {
                    if (userChoice === computerChoice) {
                        return "ничья!";
                    }
                    else if(userChoice === "камень") {
                        if(computerChoice === "ножницы") {
                            return "ты выиграл!";
                        }
                        else if (computerChoice === "бумагу") {
                            return "ты проиграл";
                        }
                    }
                    else if(userChoice === "бумагу") {
                        if(computerChoice === "камень") {
                            return "ты выиграл!";
                        } else if (computerChoice === "ножницы") {
                            return "ты проиграл";
                        }
                    }
                    else if(userChoice === "ножницы") {
                        if(computerChoice === "бумагу") {
                            return "ты выиграл!";
                        } else if (computerChoice === "камень") {
                            return "ты проиграл.";
                        }
                    }
                    else if (userChoice === 'Incorrect') {
                        return "ты не выбрал ни камень, ни ножницы, ни бумагу";
                    }
                }
                if (userChoice === 'Incorrect') {
                    message.channel.send(message.author + ", " + rspCW(userChoice, computerChoice))
                }
                else {
                message.channel.send(message.author + ", " + rspCW(userChoice, computerChoice) + ' Ты выбрал\(а\) ' + userChoice + ' Я выбрал ' + computerChoice);
             }};
    //Кейсы
    if (message.content.startsWith(p + 'open case') && message.member.roles.some(r=>[caseRole].includes(r.id))) {
            let present = randomInteger(1, 6);
            if (present === 1) {
                message.channel.send('Ты выиграл Plus и Color!');
                message.member.addRole(plus);
                message.member.addRole(color);
                message.member.removeRole(caseRole);
            } else if (present === 2) {
                message.channel.send('Ты выиграл Color!');
                message.member.addRole(color);
                message.member.removeRole(caseRole);
            } else if (present === 3) {
                message.channel.send('Ты выиграл Plus и Color!');
                message.member.addRole(color);
                message.member.addRole(plus);
                message.member.removeRole(caseRole);
            } else if (present === 4) {
                message.channel.send('Ты проиграл ' + yoba + ' Тебе ничего не выпало.');
                message.member.removeRole(caseRole);
            } else if (present === 5) {
                message.channel.send('Ты выиграл Elite!');
                message.member.addRole(elite);
                message.member.removeRole(caseRole);
        }
    }
 
    if(message.content.startsWith(p + 'open magiccase') && message.member.roles.some(r=>[magicCaseRole].includes(r.id))) {
            let present = randomInteger(1, 6);
            if (present === 1) {
                message.channel.send('Ты выиграл Plus и Elite!');
                message.member.addRole(plus);
                message.member.addRole(elite);
                message.member.removeRole(magicCaseRole);
            } else if (present === 2) {
                message.channel.send('Ты выиграл Color, Plus и Elite!');
                message.member.addRole(elite);
                message.member.addRole(plus);
                message.member.addRole(color);
                message.member.removeRole(magicCaseRole);
            } else if (present === 3) {
                message.channel.send('Ты выиграл Plus и Color!');
                message.member.addRole(color);
                message.member.addRole(plus);
                message.member.removeRole(magicCaseRole);
            } else if (present === 4) {
                message.channel.send('Ты проиграл ' + yoba + ' Тебе ничего не выпало.');
                message.member.removeRole(magicCaseRole);
            } else if (present === 5) {
                message.channel.send('Ты выиграл Elite!');
                message.member.addRole(elite);
                message.member.removeRole(magicCaseRole);
        }
    }
 
    if(message.content.startsWith(p + 'open legendarycase') && message.member.roles.some(r=>[legendaryCaseRole].includes(r.id))) {
            let present = randomInteger(1, 6);
            if (present === 1) {
                message.channel.send('Ты выиграл Plus, Color, Elite и Наблюдателя!');
                message.member.addRole(color);
                message.member.addRole(elite);
                message.member.addRole(plus);
                message.member.addRole(watcher);
                message.member.removeRole(legendaryCaseRole);
            } else if (present === 2) {
                message.channel.send('Ты выиграл Elite и Наблюдателя!');
                message.member.addRole(elite);
                message.member.addRole(watcher);
                message.member.removeRole(legendaryCaseRole);
            } else if (present === 3) {
                message.channel.send('Ты выиграл Elite и Наблюдателя!');
                message.member.addRole(elite);
                message.member.addRole(watcher);
                message.member.removeRole(legendaryCaseRole);
            } else if (present === 4) {
                message.channel.send('Ты проиграл ' + yoba + ' Тебе ничего не выпало.');
                message.member.removeRole(legendaryCaseRole);
            } else if (present === 5) {
                message.channel.send('Ты выиграл Elite!');
                message.member.addRole(elite);
                message.member.removeRole(legendaryCaseRole);
        }
    }
 
    if(message.content.startsWith(p + 'open caselottery') && message.member.roles.some(r=>[caseLotteryRole].includes(r.id))) {
            let present = Math.random();
            if (present <= 0.12) {
                message.channel.send('Ты выиграл Epic!');
                message.member.addRole(epic);
                message.member.removeRole(caseLotteryRole);
            } else if (present <= 0.33) {
                message.channel.send('Ты выиграл собственный текстовый канал!');
                message.member.addRole(textChannel);
                message.member.removeRole(caseLotteryRole);
            } else if (present <= 1) {
                message.channel.send('Ты проиграл ' + yoba + ' Тебе ничего не выпало.');
                message.member.removeRole(caseLotteryRole);
        }
    }
});

bot.login(process.env.BOT_TOKEN).catch(err => {console.log(err)});