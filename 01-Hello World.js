var http = require('http');
var server = http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write("hahhahahhaha");
	res.end();
});
server.listen(3000,'127.0.0.1',(req,res)=>{
	console.log("我已运行在3000端口");
})
