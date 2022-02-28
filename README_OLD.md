# CNF.js - 共识算法不是前提
###### 上手即用的区块链共识协议开发库✌️
###### 一个烟酒生做的小玩具✈
###### 👇👇👇👇👇
###### （广大方班综合实验作业📚）
## 安装
### node.js
```bash
git clone https://github.com/stevewooo/cnf
cd cnf
npm i
```
## 部署
### 快速开始
```bash
node example/mulNodes/startup.js -config example/mulNodes/config1.json # 启动节点1
node example/mulNodes/startup.js -config example/mulNodes/config2.json # 启动节点2
```
## 文档
### 配置文件
参考 example/mulNodes/config1.json中的配置。
##### 重要字段：
1. 🔑localPrivateKey char(32) : 每个节点的唯一标示的生成密钥，请保证全局唯一配置
2. 😁discoverUdpPort int: 节点发现服务的UDP端口，同一个容器中不可重复
3. 🔗connectionTcpServerPort int : 节点连接时用的TCP端口，建议与udp端口保持一致
4. 🌲seed array : 节点种子，启动节点的时候会主动尝试连接seed列表中的节点，然后再依赖节点发现服务，连接更多节点
### 框架主类
```javascript
let cnf = new CNF();
```
返回一个cnf库实例，
#### 参数
无
#### 返回
返回一个库的实例化对象，里面包含各种接口
___

### 框架主类构建函数
#### cnf.build();
完成主类接口的各种初始化，包括全局变量初始化，socket初始化等等
#### 参数
无
#### 返回
Promise-object，一个promise构造函数，需要await或then来控制顺序。
#### 示范
```javascript
await cnf.build();
```

___

### 网络消息回调函数注册

#### CNF.netData.msg.registerMsgEvent()

注册消息回调函数，主要响应p2p网络上的数据包给业务方使用。这里也是业务方进行共识协议开发的核心函数。

#### 参数
1. `netCallback` async 函数，p2p网络有数据包回来的时候就会调用这个函数，把数据放进data中。

#### 返回
Promise-object ，一个promise响应函数，需要await或then来控制顺序。

#### 示范
```javascript
await CNF.netData.msg.registerMsgEvent({
    netCallback : async function(data){
        console.log(data.msg);
    }
})
```
___

### 节点启动
#### CNF.netData.node.startup();

启动节点的发现服务，连接服务，数据转发与透传业务方的服务。
#### 参数
无
#### 返回
Promise-object ，一个promise响应函数，需要await或then来控制顺序。

#### 示范
```javascript
await CNF.netData.node.startup();
```
___

### 消息广播

#### CNF.netData.msg.brocast();

广播消息给p2p全网节点
#### 参数
1. `message` String，需要给全网广播的JSON数据包，会在这个包会透传到网络消息回调函数的data.msg中。
#### 返回
Promise-object ，一个promise响应函数，需要await或then来控制顺序。

#### 示范
```javascript
await CNF.netData.msg.brocast(JSON.stringify({
    hello : 'world'
}))
```

___

### 消息发送

#### CNF.netData.msg.send();

把数据推到指定的socket上并发送出去，其中要求socket在本节点已经连接的节点池中。
#### 参数
1. `socket`  socket handle，节点池中的socket
2. `message` String，需要发送的业务消息
#### 返回
Promise-object ，一个promise响应函数，需要await或then来控制顺序。

#### 示范
```javascript
await cnf.net.msg.send(socket, 'Hello world.');
```

## 贡献 & 致谢
1. 广州大学方班🏫
2. 死鱼姐姐👦