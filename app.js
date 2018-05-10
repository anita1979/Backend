const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var fs = require('fs');
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//função
function readFile(fileName){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}
/*
app.get('/',function(req, res){
    
    const body = 'Muito obrigada';
  
    res.writeHead(200,{
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'   
    });
    res.end(body);
});
*/
app.get('/', function(req, res) {
    var data = new Date();
    var html = fs.readFileSync("./index.html",'utf-8');
    var htmlAlt = html.replace("{template}", data);
    const body = htmlAlt;
    res.writeHead(200, {
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'html'
    });
    res.end(body);
});




app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
    fs.writeFileSync("log.txt", "");
});