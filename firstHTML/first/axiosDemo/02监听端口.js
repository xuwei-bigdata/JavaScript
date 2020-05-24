const http = require('http');

http.createServer(function (request, response){ 
    // 发送HTTP头部
    // HTTP 状态码：200 ： OK
    // 内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'})
    // 发送响应数据：'HELLO WORLD'
    response.end('hello server');

}).listen(8555); // 监听端口8888

console.log('server running at http://127.0.0.1:8555/')

