/**
 * Author : Create by SteveWooo at 2020/6/18
 * Updated: 2020/5/10
 * Email  : SteveWoo23@gmail.com
 * Github : https://github.com/stevewooo
 */
const fs = require('fs');
let Sign = require(`${__dirname}/../../src/models/utils/sign`);

let keys = Sign.genKeys();

let file = {
    "net" : {
        "localPrivateKey" : keys.privateKey,
        "localhost" : "127.0.0.1",
        "discoverUdpPort" : 30000,
        "connectionTcpServerPort" : 30000,
        "seed" : []
    }
}
console.log(`publicKey: ${keys.publicKey}`);

fs.writeFileSync(`${__dirname}/config.json`, JSON.stringify(file));