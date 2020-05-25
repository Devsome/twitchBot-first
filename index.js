const tmi = require('tmi.js');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'DavidNa',
        password: 'oauth:',
    },
    channels: ['DavidNa']
};

const client = new tmi.client(options);
client.connect();

client.on('connected', (address, port) => {
    client.action('DavidNa', 'Hello, DavidNa chatBot is now online!')
})

client.on('chat', (channel, user, message, self) => {
    if (message === '!game'){
        client.action('DavidNa', 'DavidNa is playing PUBG')
    }
})

client.on('chat', (channel, user, message, self) => {
    if (message === 'Hello'){
        client.action('DavidNa', 'Hello!')
    }
})

client.on('chat', (channel, user, message, self) => {
    if (message === '!social'){
        client.action('DavidNa', 'https://www.facebook.com/david.nahum.7/')
    }
})

client.on('chat', (channel, user, message, self) => {
    if (message === '!social'){
        client.action('DavidNa', 'https://www.facebook.com/david.nahum.7/')
    }
})



client.on('chat', (channel, user, message, self) => {
    if (message === '!dice'){
        const num = rollDice();
        clearInterval(interval);
        client.action('DavidNa', `You rolled a ${num}`);
    }
})

function rollDice(){
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

const interval = setInterval(() => {
    dice()
}, 440000);




function dice() {
client.action('DavidNa', `This is DavidNa's chatBot calling to Roll the dice for prizes! the first to roll '6' will win the game!`);
}

client.on('chat', (channel, user, message, self) => {
    if (user === 'DavidNa' && message === 'roll') {
        menu();
    }
})
