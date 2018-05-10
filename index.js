const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

function readFile(fileName){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get('/listPerson', function(request, response){
    var f = readFile('./persons.json');
    response.send(f);
});

app.post('/addPerson', function(request, response){
    // ler ficheiro
    var f = readFile('./persons.json');
    // Converter dados JSON para um objeto
    var jsonData = JSON.parse(f);
    // Obter o número de entradas no objeto
    var size = Object.keys(jsonData).length;
    // Incrementar o id em 1
    size++;    

    // vamos buscar o objeto ao body
    var person = request.body;
    person.Id = size;

    // adicionar a nova pessoa ao objeto
    jsonData["person"+ size] = person;
    // enviamos a resposta com o objeto como argumento
    response.send(jsonData);
});

app.delete ('/deletePerson', function (request, response) {
    var f = readFile('./persons.json'); 
    var jsonData = JSON.parse(f);
    var id = request.body.id;
 
    delete jsonData["person" + id];
    response.send(jsonData);
 });
 
 app.post ('/getPerson', function (request, response) {
     var f = readFile('./persons.json'); 
     var jsonData = JSON.parse(f);
     var id = request.body.id;    
     var person =  jsonData["person" + id];
     response.send(person);
  });
 
 app.get('/getPerson/:id', function (request, response) {
     var f = readFile('./persons.json'); 
     var jsonData = JSON.parse(f);
     var id = request.params.id;
     var person =  jsonData["person" + id];
     response.send(person);
 });


app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
    fs.writeFileSync("log.txt", "");
});