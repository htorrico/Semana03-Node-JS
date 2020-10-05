var http = require('http');
var server = http.createServer(function(req, res){

if (req.url=='/'){
res.writeHead(200,{'Content-Type':'text/html'});
res.write('<html><body><p>Pagina de Inicio.</p></body></html>');
res.end();
} else if (req.url=="/student"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><p>Pagina de Estudiante.</p></body></html>');
    res.end();
}else if (req.url=="/admin"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><body><p>Pagina administrativaa.</p></body></html>');
    res.end();
}
}).listen(8124);