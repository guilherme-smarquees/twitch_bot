const tmi = require('tmi.js');
const responses = require('./responses');

require('dotenv').config();

const client = new tmi.Client({
  options: { debug: false },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: process.env.BOT_NAME,
    password: process.env.BOT_TOKEN,
  },
  channels: ['lowlevelguy'],
});

client.connect();

client.on('message', async (channel, user, message, self) => {
  if (self) return;

  const message_split = message.split(' ');

  for await (let word of message_split) {
    if (responses[word]) {
      responses[word](client, channel, user);
    }
  }
});

client.on('subscription', async (channel, user) => {
  return client
    .say(channel, `${user.username} se juntou as artes profanas dos NERDS !`)
    .catch((err) => console.log(err));
});

console.log('Running BOT ...');
