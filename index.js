const http = require('http');
//우리가 지금 http모듈을 쓸거다라고 하는것
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{

console.log(req.headers); // 리퀘스트 헤더 인포메이션 표시
res.statusCode=200;
res.setHeader('Content-Type','text/html')
res.end('<html><body><h1>Hello, World!</h1></body></html>')
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http//${hostname}:${port}`)
})