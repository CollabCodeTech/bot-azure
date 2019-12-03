import { config } from 'dotenv';
import {Client, RichEmbed} from 'discord.js';

config();
const { TOKEN_DISCORD } = process.env
const bot = new Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  console.log(`Exit ${ bot.user.tag }: ctrl + c`);
});

bot.on('message', (msg) => {
  const { content } = msg
  const cmds = {
    "!invite": 'https://discord.gg/kYBtYPj',
    "!azurePipelines": 'https://azure.microsoft.com/pt-br/services/devops/pipelines/',
    "!youtube": 'https://youtube.com/collabcode',
  };

  cmds[content] && msg.reply(cmds[content]);
});

bot.on('message', (message) => {
  if (message.content === 'embed') {
  const embed = new RichEmbed()
      .setTitle('A slick little embed')
      .setColor(0xFF0000)
      .setDescription('Hello, this is a slick embed!');

    message.channel.send(embed);
  }
})

bot.login(TOKEN_DISCORD)