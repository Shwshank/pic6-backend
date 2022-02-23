const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req)
    res.setHeader('Content-Type', 'text/html')
    res.write(' <h1> hello pic6 fans </h1>')
    res.end()
})

server.listen(3000, '127.0.0.1', ()=>{
    console.log('Server up n running @3000');
})