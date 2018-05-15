const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("NDQ0NTA5NTU1NDI3MjQ2MTAw.Ddc9aA.IePaqSLaAvtGjE844dKMIFWauLE");

let p = "}";
let creator_id = 242975403512168449
 
bot.on('message', message => {
 
    if (message.channel.type !== 'text') return;
    if (message.author.bot) return;
    if (message.content.indexOf(p) !== 0) return;
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(['help'].includes(command)) { // Это для команды help я знаю может быть будут ошибка
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("af00ff")
            .setDescription('Мои команды:\n }random \'число\' \'число\' - Генератор случайных чисел \n }avatar \'Пользователь\' - Показ аватарки пользоввателя \n }say \'Текст\' - Бот скажет вашу реплику \(Могут только избранные\)')
            .setFooter("Все права защищены")
            .setTimestamp();
        message.channel.send({embed});
    }
 
    if(["info"].includes(command)) {
        const embed = new Discord.RichEmbed()
            .setTitle("Информация")
            .setColor("af00ff")
            .setDescription('Привет, я собственный бот сервера \"IT\"\n `>-Зачем меня создали?-<`\n Я создан для автоматического открытия кейсов, для удаления спама, миниигр, и многого другого\n Чтобы узнать список моих команд на данный момент напиши команду it!help')
            .setFooter("Все права защищены")
            .setTimestamp();
        message.channel.send({embed});
    }
 
    if(['av', 'avatar', 'ав', 'аватар'].includes(command)) {
        let user = message.mentions.members.first();
        if (!user) user = message.member;
        let av = new Discord.RichEmbed()
            .setImage(user.user.avatarURL);
        message.channel.send({embed: av});
    }
 
    /*if (['random'].includes(command)) {
 
        if (!args[0]) args[0] = 999999;
 
        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
 
        let rand = randomInteger(0, args[0]);
        const embed = new Discord.RichEmbed()
            .setTitle("Информация")
            .setColor("af00ff")
            .setDescription('Вам выпало число ' + rand)
            .setFooter("Все права защищены")
            .setTimestamp();
        message.channel.send({embed});
    }*/
 
    if(['скажи', 'say', 's'].includes(command) && message.author.id === creator_id) {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        let msg = message.channel.send(sayMessage).catch(()=>{message.reply('А вот и нет -_-');});
    }
  
    var userChoice
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "камень";
    } else if(computerChoice <= 0.67) {
      computerChoice = "бумагу";
    } else {
      computerChoice = "ножницы";
    } message.channel.send("Я выбрал " + computerChoice);
    var choice1 = userChoice;
    var choice2 = computerChoice;

    var compare = function (choice1, choice2) {
        if (choice1 === choice2) {
            return "The result is a tie!";
        }
        else if(choice1 === "rock") {
            if(choice2 === "scissors") {
                return "rock wins";
            }
            else {
                return "paper wins";
            }
        }
        else if(choice1 === "paper") {
            if(choice2 === "rock") {
                return "paper wins";
            }
            else {
                return "scissors wins";
            }
        }
        else if(choice1 === "scissors") {
            if(choice2 === "paper") {
                return "scissors wins";
            }
            else {
                return "rock wins";
            }
        }
    }
  console.log(compare(choice1, choice2));


        

    }
 
);
 
bot.on('ready',() => {
    console.log('bot launched...');
    bot.user.setPresence({ game: { name: p+'info', type: 0 } }).catch();
});