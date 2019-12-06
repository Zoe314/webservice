const http = require('http');
const url = require('url');
// const hostname = '127.0.0.1';
const port = 3000;
// var vin = "ls5ase2w6fj129510";  //假设的值
var vin = "ls5ase2w6fj129510";  //假设的值
// 通过 createServer 创建 web服务器
const server = http.createServer((req, res) => {
  //req 请求体：获取请求相关的信息（请求来自哪里、是get还是post）
  //res 响应体：告诉服务器给请求响应什么内容
  // console.log('req' + req, 'res' + res + 'server.js-------14行')
  // 设置响应的请求头状态码是200
  res.statusCode = 200;
  // 设置返回的文本类型：纯文本text/plain
  res.setHeader('Content-Type', 'application/json');  //序列化后的 JSON 字符串
  // 最后给客户端返回 hello world
  // res.end('Hello World!\n'+res+'server.js-----20');
});
server.on("request", function (req, res) {
  // url.parse 方法可以将一个 URL 路径解析为一个方便操作的对象  从url取值
  // 将第二个可选参数指定为 true， 表示将结果中的 query 解析为一个对象
  // var arg = url.parse(req.url).query;
  // //把参数转换成键值对，再从中拿值
  // var vin = qs.parse(arg)['vin'];
  // //打印出来是值
  // console.log(vin)
  var parseObj = url.parse(req.url, true);
  var pathname = parseObj.pathname; //相当于无参数的url路径
  console.log(pathname);
  // 路由
  switch (pathname) {
    // case '/getVin':
      // res.write(JSON.stringify({
      //   'code': 200,
      //   'msg': '/person'
      // }));
      // res.writeHead(200, {
        // "content-type": "application/json"
      // });
      // res.write("hello nodejs" + vin);  
      // res.end(vin);
      // break;


    // case '/appsvr/doPerso':
    case '/person':
      let data = {
        "apdu": [
          {
            "apduCommand":"00a404000ad2760001185347410002",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288000b005a088888006188880061",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001200590f565656564848544900000000000000",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288000c005d09010211531400000000",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288000c005d09010213510400000000",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b9098001888101108201008113104cc1ab63b59709d156c8dee586a43179",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b909800188810110820101811310e9521d3c5f6c4fc9b21c5fc429075868",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f0ee0b9098001888101108201028113103602a59522ec43f1ceb5b4319d9b6098",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b9098001888101108201038113109d3ffdc095b3ecd92c2eb8bff983fd19",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b9098001888101108201048113108542964d46d804b5414ac1edbd85655e",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b909800188810110820105811310f0b276bfe37daad263892a04d95d2d82",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b909800188810110820106811310d35e60b2d568540f47eca9f86dfa66ab",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b9098001888101108201078113108efe45370b2024b973ccf4386207838f",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b90980018881011082010881131093eb1562de521619773cd16dc5280188",
            "expectations": [9000,6982]
          },{
            "apduCommand":"80e288001f00b90980018881011082010981131095ed93cb20aaa8f61946457396d2d9ec",
            "expectations": [9000,6982]
          },{
            "apduCommand":"802c0000",
            "expectations": [9000,6982]
          }       
        ], "awaitTime": 100,                  //等待时长（毫秒ms）
        "message": "success",              //消息描述，出错时有用
        "sessionId": "1234782212",         // 本次交互的会话ID，此信息需要在apduResult请求中提供
        "statusCode": "00000000",          //状态码，00000000成功、00000001成功还需后续请求、其余失败
        "success": true                    //是否成功
        // {
        //   "apdus": [
        //     {
        //       "apduCommand": "85050123",      //完整的APDU命令
        //       "expectations": [-28672,27192]    //期望的状态值，十六进制9000，6A38需要转换成十进制双字节-28672,27192
        //     }
        //   ],
        // “awaitTime ”: 100                  //等待时长（毫秒ms）
        // "message": "success",              //消息描述，出错时有用
        // "sessionId": "1234782212",         // 本次交互的会话ID，此信息需要在apduResult请求中提供
        // "statusCode": "00000000",          //状态码，00000000成功、00000001成功还需后续请求、其余失败
        // "success": true                    //是否成功
      }

      // res.write(JSON.stringify({
      //   "content-type": "application/json"
      // }));
      res.end(JSON.stringify(data));
      // console.log(data.apdu, data.msg)

      break;

    case '/reqVkey':
      let reqdata = {
        "apdu": [
          "00a404000ad2760001185347410002",
          "5a088888006188880061852089f8d52674d3e3f22a3a7232364091388f5faf68b9b73e188e953a87a76efe9c9000",
          "008283002f8410a88d8e67567552989a8b9fdaab389e788508c3588828be806e275f3710a00ae0f44a211736ee9dafae0e5d9ab9",
          "9de4dca7702e5d164633ea8f3c666a299000",
          "84e28800d88be0f56a259250ed7abd53a315d956653a10c29a02da660c221ae55fcc087fdbe42156257fc8608e78abcd8e2806391f9bed9045c07d0603d3abcd13e9cda9010e6e304ee2de0383f8cce43559d9c9ff2e1048548e764acf5033b4dbb1c15a08ae020ccf91797dec3293d8d823134ced1b5833d11c30bcf560140d77cb14745d4d7d02056688a68072e0dc8a5a025f7c37059e7e390fc91c47e7934a993b76e331cdc355aeaeac273681847ccf0157f23e119b7a480a55784b3063bf47ad297b7f1b5a529eb2d2f6e37e91b000dbbff93a568b06af99947e",
          "9000"
        ], 'code': 200, "msg": "成功"
      }
      res.write(JSON.stringify(reqdata));
      res.end()
      console.log(reqdata)
      break;
    case '/exit':
      // res.write(JSON.stringify({
      //   'code': 200,
      //   'msg': ' /exit'
      // }));
      res.end('Bye!');
      //   console.log('Bye!');
      server.close();
      break;
    case '/isUsed':
        res.end('It is already USed');
      break;
    case '/vkey/reqVkey':
      res.end('/vkey/reqVkeydeqingqiu')
      break;
    default:
      res.write('default');
      break;
  }
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.on('close', () => {
  console.log('server close')
})

server.on('connection', () => {
  console.log('server connection')
})

server.on('error', (error) => {
  console.log('server error,messmage is' + error)
})
// 通过 listen 监听端口 的请求
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})
