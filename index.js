const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("NDQ0NTA5NTU1NDI3MjQ2MTAw.Ddc9aA.IePaqSLaAvtGjE844dKMIFWauLE");

bot.on('message',(message) => {

    bot.user.setPresence({ game: { name:'it!information', type: 0 } }).catch(); 

    if(message.content == "it!information") {
        message.channel.send("Привет, я собственный бот сервера \"IT\" \n `>-Зачем меня создали?-<` \n Я создан для автоматического открытия кейсов, для удаления спама, миниигр, и многого другого \n Чтобы узнать список моих команд на данный момент напиши команду it!helpme");
    };

    if(message.content == "it!helpme") {
        message.channel.send("Хм, ну пока что я ничего не умею :|");
    };
});

