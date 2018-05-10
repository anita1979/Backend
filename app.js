const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');
var fs = require('fs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

function readFile(fileName){
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get('/listvideos', function(request, response){
    var f = readFile('./videos.json');
    response.send(f);
});

app.post('/addvideo', function(request, response){
    // ler ficheiro
    var f = readFile('./videos.json');
    // Converter dados JSON para um objeto
    var jsonData = JSON.parse(f);
    // Obter o número de entradas no objeto
    var size = Object.keys(jsonData).length;
    // Incrementar o id em 1
    size++;    

    // vamos buscar o objeto ao body
    var video = request.body;
    video.Id = size;

    // adicionar um novo video ao objeto
    jsonData["video"+ size] = video;
    // enviamos a resposta com o objeto como argumento
    fs.writeFile('./videos.json',JSON.stringify(jsonData));
    response.send(jsonData);
});

app.delete ('/deletevideo', function (request, response) {
    var f = readFile('./videos.json'); 
    var jsonData = JSON.parse(f);
    var id = request.body.id;
    delete jsonData["video" + id];
    fs.writeFile('./videos.json', JSON.stringify(jsonData));

    response.send(jsonData);
 });

 app.get('/getvideo/:id', function (request, response) {
    var f = readFile('./videos.json'); 
    var jsonData = JSON.parse(f);
    var id = request.params.id;
    var video =  jsonData["video" + id];
  
        response.send(video);   
});
/*
cloudinary.id2.uploader.upload("dog.mp4", 
        { resource_type: "video", 
        public_id: "./videos/dog_closeup",
        eager: [
          { width: 300, height: 300,
              crop: "pad", audio_codec: "none" }, 
          { width: 160, height: 100,
              crop: "crop", gravity: "south",
              audio_codec: "none" } ],                                   
        eager_async: true,
        eager_notification_url: "https://www.youtube.com/watch?v=iWZmdoY1aTE"},
        function(error, result) {console.log(result)
});
*/
app.post('./video',function(request,response){
    var addComentario = JSON.stringify('./videos.json');
    addComentario = addComentario + comentario;
    addComentario = JSON.parse('./videos.json');
    return response.send(addComentario)
});
 
app.get('/getvistavideo',function(request,response) {
    var vista = readFile('/videos.json');
    var jsonData = JSON.parse(vista);
        var recebe = request.params.Views;
        var array = [];

    for (var asd in jsonData) {
        if (jsonData.hasOwnProperty(asd)){
            if(jsonData.asd == recebe){
                array.push(jsonData[asd]);
            }
        }
    }
    array.sort(function(a, b) {
        return a.Views - b.Views;
        
      });
    res.send(array)
});



app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
    fs.writeFileSync("log.txt", "");
});