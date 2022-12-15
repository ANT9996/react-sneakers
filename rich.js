const RPC = require('discord-rpc');
// const axios = require('axios');
const rpc = new RPC.Client({
    transport: 'ipc',
})

let detailsR = 'Долбежка in process...'
let startTime = Date.now()

rpc.on('ready', () => {
    rpc.setActivity({
        details: detailsR,
        largeImageKey:'react',
        startTimestamp: startTime,
        // endTimestamp: 1234,
        joinSecret: 'https://countrymeters.info/ru/World',
    })

    console.log(rpc.user.username);
    console.log('---------------------------------');

})

rpc.login({
    clientId: '1047565933364904027'
})