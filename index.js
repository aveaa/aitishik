const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');

/** @namespace process.env.BOT_TOKEN */
 
//Префикс
let p = "="
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
let textChannel = '446351322997063692' //textChannel - Разрешение на создание текстового канала
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
let version = 'v1.1.2'
let update = 'Вышла новая версия ' + version + '. Обновления:\n\n1. Исправлены баги.\n\n2. Добавлено еще 2 правила.'
let rules = '1. Оскорбления других людей (Мут на 1 час). НО в случае уместного оскорбления, а не беспричинного человек не будет наказан. Также, вы не будете наказаны назвав кого то "Нуб" или подобными словами.\n\n2. Убийсто соклановца (Варн). НО если убийце получится доказать то что он сдделал это случайно, то он останется безнаказанным. в противном случае убийца получит варн. При наборе трех варнов он получает пожизненный бан.\n\n3. Рассылка порнографического контента без цензуры (Мут на 1 час). НО если на контенте присутствует цензура, то вы останетесь безнаказанным. При слишком частой рассылке с цензурой вы все также будете наказаны мутом на 1 час.\n\n4. Рассылка вредноносного ПО, т. е. вирусов, троянов и т. п. (Мут на 1 час). НО если ПО способно любыми способами удалить данные с жесткого диска (Шифрование, Блокирование, Полное удаление), то вы получите пожизненный бан.\n\n5. Реклама чего либо без разрешения администрации, или в непредназначенных для этого каналах. Для приглашений на другие сервера существует канал #invites. А для пиара других проектов зайдите в #photoshop-projects или #code-projects. Если администрация согласиться рекламировть ваш проект (Не сервер), то у вас появится право писать о его обновлених в #updates.\n\n6. Флуд или спам (Мут на 1 час). Для нашего сервера флуд - это сообщение(ия) в большинстве случаев занимающие большие объемы и не несущие никакого смысла, или содержащее очень малое количесво полезной информации. Спам - это большое количество повторяющихся символов, слов или фраз.\n\n7. Попрошайничество роли (Мут на 1 час). Попрошайничество роли - это когда человек пишет подобное сообщение: "Дайте мне роль ___". А например "Когда голосование за модератора?" в это не входит.'
let rulesMore = '8. Написание большого количество /tts сообщений или одного большого бессмысленного сообщения. (Мут на 1 час). Если вы к многим своим сообщениям будете добавлять /tts, даже не смотря на то что они будут вполне адекватными вы все также получите наказание.\n\n9. Использовать @everyonе или @hеre более одного раза в день (Без наказания, это правило просто желательно выполнять)'
//Функции
//Функция для генерации случайного числа от min до max
function randomInteger(min, max) {
    max++
    return Math.floor(Math.random() * (max - min)) + min;
}
//Низнаю чо она делает, но чота крутое
function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

//Функция для отправки сообщения после мута/варна/кика/бана (Не будет)
 
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
    member.send('**Приветствую тебя ' + member + ', я - бот этого сервера. Познакомься с сервером не торопясь. Желательно, прочитать все написанное в #info. А если понадобится помощь, то просто напиши ' + p + 'help**');
    const embed = new Discord.RichEmbed()
        .setTitle('Пополнение!')
        .setColor('af00ff')
        .setDescription('На сервер пришел ' + member + '\n\nТеперь нас **' + member.guild.memberCount + '**')
        .setFooter(bot_name + " | " + version + " | Все права защищены")
        .setTimestamp()
        bot.fetchUser('242975403512168449').then (user => user.send({embed}))
});

bot.on('guildMemberRemove', (member) => {
    member.send('Прощай, ' + member + '. Мы будем скучать');
    const embed = new Discord.RichEmbed()
        .setTitle('Он ушел')
        .setColor('af00ff')
        .setDescription(member + ' ушел :(.\n\nТеперь нас **' + member.guild.memberCount + '**')
        .setFooter(bot_name + " | " + version + " | Все права защищены")
        .setTimestamp()
        bot.fetchUser('242975403512168449').then (user => user.send({embed}))
});
 
//То что должно произойти после запуска бота
bot.on('ready', () => {
    //Запуск цикла перемены игр
    setTimeout(game1, 1000)
    console.log('Успешный запуск');
});

bot.on('message', message => {
    if(message.channel.type !== 'text') return;
    if(message.channel.id === '465232989987799050') return;
    if (message.author.bot) return;

    let arr = [];
    message.guild.fetchInvites().then(invites => {
    let user = message.mentions.members.first();
        invites.forEach(invite => {
            arr.push(invite.code);
        });
    let matches = message.content.match(/https:\/\/discord.gg\/([_a-zA-Z0-9]{5,32})/gi);
    if (matches)
        matches.forEach((match) => {
            if (!arr.includes(match.match(/https:\/\/discord.gg\/([_a-zA-Z0-9]{5,32})/gi)[3])) {
                const embed = new Discord.RichEmbed()
                .setTitle("Информация о предупреждениях")
                .setColor("af00ff")
                .setDescription('Вы были **предупреждены**' + '.\n\nПричина:** Пиар.**\n\nНе ведите себя плохо!')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
                message.author.send({embed});
                message.channel.send(message.author + ' был предупрежден. Причина: пиар.');
                message.delete();
        }

    })
    });
 
    if(message.content.indexOf(p) !== 0) return;
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const vote = message.content.slice(p.length).trim().split(/;+/g);
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

    if (['clear', 'delete', 'del', 'clr', 'сдк', 'вуд', 'сдуфк', 'вудуеу'].includes(command)) {
        async function clear() {
            if (message.member.roles.some(r=> [moder, owner].includes(r.id))) {
                if (isNaN(args[0]))
                    return message.reply('Ошибка. Причина: **Аргумент должен являться числом**');
                else if(args[0] < 2)
                    return message.reply('Ошибка. Причина: **Аргумент не может являться нулем или единицей**');
                else if (args[0] >= 100) args[0] = 99
                args[0] = args[0]++   
                const fetched = await message.channel.fetchMessages({limit: args[0] + 1});
                message.channel.bulkDelete(fetched);
                let messagesForm = declOfNum(args[0], ['сообщение', 'сообщения', 'сообщений']);
                message.channel.send("Было успешно удалено **" + args[0] + "** " + messagesForm)
                message.delete();
            } else {
                message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду clear, вы должны иметь роль Модератор**')
                return;
            }
        }
        clear();
    }

    if (['warn', 'варн', 'цфкт'].includes(command) && message.member.roles.some(r=>[moder, owner].includes(r.id))) {
        let user = message.mentions.members.first(); 

        if (!user) {
            message.channel.send(message.author + ', Ошибка. Причина: **Вы забыли упомянуть пользователя или вы хотите предупредить того, кто не является пользователем**');
            return
        }
        if (user.id == message.author.id) {
            message.channel.send('Зачем ты пытаешься сделать предупреждение самому себе?');
            return;
        }

        if (message.member.roles.some(r=> [moder, owner].includes(r.id))) {

        let reason = args.join(" ").replace(user, '')

        if (!reason) reason = ' Не указана'

        const embed = new Discord.RichEmbed()
                .setTitle("Информация о предупреждениях")
                .setColor("af00ff")
                .setDescription('Вы были **предупреждены** пользователем ' + message.author + '.\n\nПричина:**' + reason + '.**\n\nНе ведите себя плохо!')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
                user.send({embed});
                message.channel.send('Пользователь ' + user + ' был предупрежден успешно');
        } else {
            message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду warn, вы должны иметь роль Модератор**');
        }
    }

            if (['unmute', 'гтьгеу'].includes(command)) {

                if (message.member.roles.some(r=> [moder, owner].includes(r.id))) {

                let user = message.mentions.members.first();
                if (!user) {
                    message.channel.send(message.author + ', Ошибка. Причина: **Вы забыли упомянуть пользователя или хотите размутить того, кто не является пользователем**');
                    return
                } else {
                    let reason = args.join(" ").replace(user, '');
                        user.removeRole(muted);
                        message.channel.send(user + ' был размучен');
                        if (!reason) reason = ' Не указана'
                        const embed = new Discord.RichEmbed()
                            .setTitle("Информация о муте")
                            .setColor("af00ff")
                            .setDescription('Вы были **размучены** пользователем ' + message.author + '.\n\nПричина:**' + reason + '.**')
                            .setFooter(bot_name + " | " + version + " | Все права защищены")
                            .setTimestamp();
                        user.send({embed});
                }
            } else {
                message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду unmute, вы должны иметь роль Модератор**');
            }
            }
   
if (['ьгеу', 'mute', 'мут'].includes(command) && message.member.roles.some(r=>[moder, owner].includes(r.id))) {
    let user = message.mentions.members.first(); 

    if (message.member.roles.some(r=> [moder, owner].includes(r.id))) {
    
    if (!user)
        return message.channel.send(message.author + ', Ошибка. Причина: **Вы забыли упомянуть пользователя или вы хотите замутить того, кто не является пользователем**');

    /*if (user.id == message.author.id) {
        message.channel.send('Зачем ты пытаешься замутить самого себя?');
        return;
    }*/
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

    let reason = args.join(" ").replace(user, '');
    reason = reason.replace(args[1], '');
    reason = reason.replace(' ', '');

    if (!reason) { 
        reason = ' Не указана'
    }
    const embed = new Discord.RichEmbed()
                .setTitle("Информация о муте")
                .setColor("af00ff")
                .setDescription('Вы были **замучены** пользователем ' + message.author + '\n\nВремя: **'+ args[1] + '.**\nПричина:**' + reason + '.**\n\nНе ведите себя плохо!')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
                user.send({embed});

 
    if (args[1] && getSeconds(args[1]) !== 0 )

    setBigTimeout(() => {
        if (message.member.roles.some(r=> [muted].includes(r.id))) {
        const embedAutoUnmute = new Discord.RichEmbed()
        .setTitle("Информация о муте")
        .setColor("af00ff")
        .setDescription('Вы были автоматически **размучены**.\n\nПричина: **Автоматический размут.**')
        .setFooter(bot_name + " | " + version + " | Все права защищены")
        .setTimestamp();
        user.send({embed: embedAutoUnmute});
        user.removeRole(muted);
        message.channel.send(user + ' был размучен');
        } else {
            return
        }
        }, getSeconds(args[1])*1000);
        } else {
            message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду mute, вы должны иметь роль Модератор**');
        }
    }

    if (['kick', 'кик', 'лшсл'].includes(command)) {
        if (message.member.roles.some(r=> [moder, owner].includes(r.id))) {
        let user = message.mentions.members.first(); 
        if (!user) {
            message.reply('Ошибка. Причина: **Вы забыли упомянуть пользователя или вы хотите кикнуть того, кто не является пользователем**');
            return
        }
        let reason = args.join(" ").replace(user, '');
        if (user === message.author) {
            message.reply('Ошибка. Причина: **КИКАТЬ САМОГО СЕБЯ ЭТО ТУПО!**');
            return
        }
        if(user.hasPermission("ADMINISTRATOR")) return message.reply('Ошибка. Причина: **Вы не можете кикнуть этого пользователя, т. к. у него есть право `Администратор`**');
        
        if (!reason || reason === ' ') reason = ' Не указана'
            const embed = new Discord.RichEmbed()
                .setTitle('Информация о кике')
                .setColor("af00ff")
                .setDescription('Вы были **кикнуты** пользователем ' + message.author + '.\n\nПричина:**' + reason + '.**\n\nНе ведите себя плохо!')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            user.send({embed})
            message.guild.member(user).kick(reason);
            message.channel.send(user + ' Был кикнут успешно. Жалко пацана');
        } else {
            message.reply('Ошибка. Причина: **Вы не можете использовать команду kick, вы должны иметь роль Модератор');
            return
        }
    }

    if (['ban', 'бан', 'ифт'].includes(command)) {
        if (message.member.roles.some(r=> [moder, owner].includes(r.id))) {
        let user = message.mentions.members.first(); 
        if (!user) {
            message.reply('Ошибка. Причина: **Вы забыли упомянуть пользователя или вы хотите забанить того, кто не является пользователем**');
            return
        }
        if (user === message.author) {
            message.reply('Ошибка. Причина: **БАНИТЬ САМОГО СЕБЯ ЭТО ТУПО!**');
            return
        }
        if(user.hasPermission("ADMINISTRATOR")) return message.reply('Ошибка. Причина: **Вы не можете забанить этого пользователя, т. к. у него есть право `Администратор`**');

        let reason = args.join(" ").replace(user, '');
        if (!reason || reason === ' ') reason = ' Не указана'
        reason = reason.replace(args[1], '');
        reason = reason.replace(' ', '');
            const embed = new Discord.RichEmbed()
                .setTitle('Информация о бане')
                .setColor("af00ff")
                .setDescription('Вы были **забанены** пользователем ' + message.author + '.\n\nВремя: **' + args[1] + '**.\n\nПричина:**' + reason + '.**\n\nНе надо было вести себя плохо!')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            user.send({embed})
            message.guild.member(user).ban(reason);
            message.channel.send(user + 'Был успешно забанен. Жалко пацана');

        } else {
            message.reply('Ошибка. Причина: **Вы не можете использовать команду ban, вы должны иметь роль Модератор');
            return
        }
    }
   
    if(['help'].includes(command)) {
        const embed = new Discord.RichEmbed()
                .setTitle("Помощь")
                .setColor("af00ff")
                .setDescription('Чем я могу вам помочь?\n\n***1 - Узнать команды\n2 - Информация о сервере\n3 - Узнать о возможностях ролей, и как из получать\n4 - Узнать правила сервера\n5 - Информация о кейсах***\n\nНапишите цифру внизу')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            message.channel.send({embed}).then(() => {
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
            collector.on('collect', msg => {
            collector.stop()
            if (msg.content === '1') {
                const embed = new Discord.RichEmbed()
                .setTitle("Помощь")
                .setColor("af00ff")
                .setDescription('Общедоступные команды:\n' + p + 'avatar `пользователь` - Показ аватарки пользоввателя \n' + p + 'rsp `камень | ножницы |бумага` - Миниигра "Камень, ножницы, бумага" \n' + p + 'random `число` `число` - генерация случайного числа от 0 до любого другого числа \n' + p + 'poll `вопрос` `;` `варианты через \';\'` - голосование \n' + p + 'caseinfo - информация о кейсах\n' + p + 'update - узнать о последних обновлениях\n' + p + 'rules - узнать правила сервера\n\nКоманды доступные Модераторам или Epic-ам:\n' + p + 'mute | unmute `пользователь` `время` `причина` - мут или размут пользователя\n' + p + 'kick `пользователь` `причина` - выгнать пользователя\n' + p + 'ban `пользователь` `причина` - забанить пользователя\n' + p + 'warn `пользователь` `причина` - предупредить пользоваетеля\n'+ p + 'clear | delete `число` - удалить сообщения\n' + p + 'say `текст` - бот скажет вашу реплику\n' + p + 'send `пользователь` `сообщение` - отправить сообщение пользователю в лс\n' + p + 'sms `пользователь` `сообщение` - отправить сообщение пользователю в лс, но с указанным автором сообщения')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            message.channel.send({embed});
            }
            if (msg.content === '2') {
                const embed = new Discord.RichEmbed()
                .setTitle("Информация")
                .setColor("af00ff")
                .setDescription('Наш сервер связан с IT технологиями, об этом говорит его название. Тут ты можешь поделиться своим творчеством, прорекламировать свои проекты (Не сервера, это в #пиар-чат) с разрешением администрации, поиграть в io игры на наших сходках, узнать о discord.js и многое, многое другое. О ролях на сервере, и о том как их получить ты можешь узнать у наших участников. Чтобы узнать правила, ты можешь заглянуть в #welcome или написать команду ' + p + 'rules.')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            message.channel.send({embed});
            }
            if (msg.content === '3') {
                const embed = new Discord.RichEmbed()
                .setTitle("Информация о ролях")
                .setColor("af00ff")
                .setDescription('**Покупные роли:**\n\nО ролях **Plus**, **Color**, **Elite**, **Наблюдатель**, **Epic** вы можете прочитать в нашем магазине написав коману !shop\n\n**Роли за активность:**\n\n**IT Новичок** - Дает возможность прикреплять файлы к сообщению (Нужен 3 Lvl)\n**IT Любитель** - Дает возможность встраивать ссылки (Нужен 5 Lvl)\n**Разбирающийся в IT сфере** - Открывет доступ к реакциям и позволяет пользоваться внешними эмодзи (Нужен 8 Lvl)\n**Хороший IT-шник** - Позволяет отправлять /tts сообщения и открывает доступ к @everуonе (Нужен 15 Lvl)\n**IT Специалист** - Позволяет смотреть журнал аудита (Нужен 25 Lvl)\n\n**Другие роли:**\n\n**YouTuber** - Вы будете показаны отдельно отучастников онлайн (Нужно иметь YouTube канал с +100 подписщиками)\n**Модератор** - Позволяет делать всё (Нужно подать заявку, подождать пока заявку примут, и выиграть на голосовании)\n**Заместитель Owner** - Вы выше модераторов (Эта роль выдается одному из модератров когда Owner слишком занят чтобы следить за сервером)\n\nТакже, есть еще много других ролей, но вы их либо никак не получите, либо они слишком не важны для этого списка')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            message.channel.send({embed});
            }
            if (msg.content === '4') {
                const embedRules1 = new Discord.RichEmbed()
                .setTitle("Правила сервера IT")
                .setColor("af00ff")
                .setDescription("\n" + rules)
                .setTimestamp();
            message.channel.send({embed: embedRules1});
            const embedRules2 = new Discord.RichEmbed()
                .setColor("af00ff")
                .setDescription(rulesMore)
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            message.channel.send({embed: embedRules2});
            }
            if (msg.content === '5') {
                const embed = new Discord.RichEmbed()
                .setTitle("Информация о кейсах")
                .setColor("af00ff")
                .setDescription(p + 'open case - открыть обычный кейс \n' + p + 'open magiccase - открыть магичский кейс \n' + p + 'open legendarycase - открыть легендарный кейс\n' + p + 'open caselottery - открыть кейс-лотерею')
                .setFooter(bot_name + " | " + version + " | Все права защищены")
                .setTimestamp();
            message.channel.send({embed});
            }
            });
        });
    }
    
    if(['send'].includes(command)) {
        let user = message.mentions.members.first();
        if (message.member.roles.some(r=> [moder, owner, epic].includes(r.id))) {
            if (!user) {
                message.delete
                message.reply('Ошибка. Причина: **Не указан получатель сообщения**');
                return
            }
            const sendMessage = args.join(" ");
            let msg = user.send(sendMessage.replace(user, '')).catch(()=>{message.reply('Ошибка. Причина: **Не указано сообщение**');
            })
            message.delete().catch(O_o=>{});
        } else {
            message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду send, вы должны иметь роли Модератор или Epic**');
        }
    }

    if(['sms'].includes(command)) {
        let user = message.mentions.members.first();
        if (message.member.roles.some(r=> [moder, owner, epic].includes(r.id))) {
            if (!user) {
                message.delete
                message.reply('Ошибка. Причина: **Не указан получатель сообщения**');
                return
            }
            const sendMessage = args.join(" ");
            let msg = user.send('**Вам пришло сообщение от ' + message.author + '. Он сказал:**' + sendMessage.replace(user, '')).catch(()=>{message.reply('Ошибка. Причина: **Не указано сообщение**');
            })
            message.delete().catch(O_o=>{});
        } else {
            message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду send, вы должны иметь роли Модератор или Epic**');
        }
    }

    if(['piar'].includes(command) && message.member.roles.some(r=>[owner].includes(r.id))) {
        bot.fetchUser(['428036906723573760', '242975403512168449']).then (user => user.send('Автопиар тест'));
        message.channel.send('Пропиарено успешно :white_check_mark:');
    }

    if(['rules'].includes(command)) {
        const embedRules1 = new Discord.RichEmbed()
            .setTitle("Правила сервера IT")
            .setColor("af00ff")
            .setDescription("\n" + rules)
            .setTimestamp();
        message.channel.send({embed: embedRules1});
        const embedRules2 = new Discord.RichEmbed()
            .setColor("af00ff")
            .setDescription(rulesMore)
            .setFooter(bot_name + " | " + version + " | Все права защищены")
            .setTimestamp();
        message.channel.send({embed: embedRules2});
    }

    if(['update'].includes(command)) {
        const embed = new Discord.RichEmbed()
            .setTitle("Обновления")
            .setColor("af00ff")
            .setDescription(update)
            .setFooter(bot_name + " | " + version + " | Все права защищены | При нахождении бага кидайте скрин [Ï₸]\🔥𝓐𝓝𝓓𝓡𝓔𝓨\🔥#8389 в личное сообщение")
            .setTimestamp();
        message.channel.send({embed});
    }
 
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
        let msg = message.channel.send(sayMessage).catch(()=>{message.reply(message.author + ', Ошибка. **Причина: не указан текст сообщения**');
        });
    } else {
            message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду say, вы должны иметь роли Модератор или Epic**');
    }}

    /*let matches = message.content.match(/@everyon/gi);
    if (matches) {
        setBigTimeout(() => {
        message.author.send('Вы использовали @everyone. Следующий участник сможет использовать это только через 24 ч.');
        if (matches) {
            message.delete();
            message.author.send('Вы не можете использовать ')
        }
        }, 86400000)
    }*/
 
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
        
        if (!args[0]) message.reply('Ошибка. Причина: **Вы забыли указать первый аргумент'); return;

        if (!args[1]) args[1] = 1;

        let rand = randomInteger(args[0], args[1]);
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

                if (!args[0]) {
                    message.channel.send(message.author + ', Ошибка. Причина: **Вы забыли указать что вы выбираете, камень, ножницы или бумагу**');
                    return;
                }
                else if (['камень', 'rock', 'r', 'к'].includes(args[0].toLowerCase())) {
                    userChoice = 'камень';
                }
                else if (['бумагу', 'бумага', 'paper', 'p', 'б'].includes(args[0].toLowerCase())) {
                    userChoice = 'бумагу';
                }
                else if (['scissors', 'ножницы', 's', 'н'].includes(args[0].toLowerCase())) {
                    userChoice = 'ножницы';
                } else {
                    userChoice = 'Incorrect';
                }
                let computerChoice = Math.random();
                if (computerChoice < 0.34) {
                    computerChoice = "камень";
                } else if(computerChoice <= 0.67) {
                    computerChoice = "бумагу";
                } else {
                    computerChoice = "ножницы";
                }
                function rspCW(userChoice, computerChoice) {
                    if (userChoice === computerChoice) {
                        return "ничья!";
                    }
                    else if(userChoice === "камень") {
                        if(computerChoice === "ножницы") {
                            return "ты выиграл!";
                        }
                        else if (computerChoice === "бумагу") {
                            return "ты проиграл.";
                        }
                    }
                    else if(userChoice === "бумагу") {
                        if(computerChoice === "камень") {
                            return "ты выиграл!";
                        } else if (computerChoice === "ножницы") {
                            return "ты проиграл.";
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
                message.channel.send('Я выбрал ' + computerChoice + '. ' + message.author + ", " + rspCW(userChoice, computerChoice) + ' Ты выбрал\(а\) ' + userChoice + ' Я выбрал ' + computerChoice);
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
                message.channel.send('Ты выиграл Epic!');
                message.member.addRole(epic);
                message.member.removeRole(caseLotteryRole);
            } else if (present <= 1) {
                message.channel.send('Ты проиграл ' + yoba + ' Тебе ничего не выпало.');
                message.member.removeRole(caseLotteryRole);
        }
    }
    if (message.channel.id === '460037531447197696') {
        message.channel.fetchMessages({limit: 2}).then(msgs => {
            if (msgs.last().author.id === message.author.id) {
                message.author.send('Ошибка. Причина: **Для игры нужно 2 участника**').then((msg) => {
                    message.delete();});
                    return;
            }
            let word = msgs.last().edits.pop().content.match(/([А-Яа-яё\-]+).?(.*?)?/im)[1];
            if (!word) {
                message.author.send('Слово где? :D').then((msg) => {
                    message.delete();});
                    return;
                }
            let charAt = 1;
            while (['ъ', 'ь', 'ы', '-', '', ' '].includes(word.charAt(word.length - charAt).toLowerCase())) {
                charAt++;
            }
            if (charAt >= word.length) {
                message.author.send(`Ошибка. Причина: Вы написали некорректное слово`).then((msg) => {
                    message.delete();});
                    return;
                }
            if (word.charAt(word.length - charAt).toLowerCase() !== message.content.match(/([А-Яа-яa-zA-Zё\-]+).?(.*?)?/im)[1].charAt(0).toLowerCase()) {
                message.author.send(`Ошибка. Причина: **Ваше слово должно начинаться с \`${word.charAt(word.length - charAt).toLowerCase()}\`**`).then((msg) => {
                    message.delete();
                });
            }

        });
        return;
    }
});

bot.login(process.env.BOT_TOKEN)/*.catch(err => {console.log(err)})*/;