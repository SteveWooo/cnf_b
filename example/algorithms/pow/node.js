/**
 * Author : Create by SteveWooo at 2020/4/4
 * Updated: 2020/7/30
 * Email  : SteveWoo23@gmail.com
 * Github : https://github.com/stevewooo
 */

const Cnf = require(`${__dirname}/../../../Cnf.js`);

/**
 * 入口处实例化CNF，保留全局变量global.CNF 
 */
async function main(){
    let cnf = new Cnf({
        config: require(`${__dirname}/config${process.argv[2]}.json`)
    });
    await cnf.build();
    /**
     * 注册网络消息事件回调，netCallback函数为业务主要函数的入口
     */
    await CNF.net.msg.registerMsgEvent({
        netCallback : async function(data){
            console.log(`receive data : `);
            console.log(data.msg);
            // 开始你的表演
        }
    })

    /**
     * 启动组网
     */
    await CNF.net.node.startup();

    /**
     * 广播业务数据
     */
    // setInterval(async function(){
    //     await CNF.net.msg.brocast(JSON.stringify({
    //         "I'm" : 'Client'
    //     }))
    // }, 4000)

    setTimeout(async function(){
        await CNF.net.msg.brocast(JSON.stringify({
            "I'm" : 'Client: ' + process.argv[2]
        }))
    }, 8000)
}
main()