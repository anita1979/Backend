const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Mysql connection
var connection =mysql.createConnection({
    host :'Localhost',
    user :'root',
    password : '',
    database: 'ficha7'
});

connection.connect();

console.log("Mysql connection at %s",connection.config.host,connection.config.database);


app.get('/listUsers', function(request, response){
    connection.query('SELECT * FROM ficha7.pessoa1', function(err,rows,fields){
        if (err) throw err;
        response.send(rows);
    });
});

app.post('/addPerson', function(request, response){
    
    var person = request.body;
    var query = 'INSERT INTO ficha7.pessoa1(id,FirstName,LastName,Gender,Age,Profession) VALUES ?' 
    var values =[[person.id, person.firstname, person.lastname, person.gender, person.age, person.profession]];
    
    connection.query(query,[values],function(err,result,fields){
        if (err) throw err;
        response.send("Numero of records inserted: "+ result.affectedRows); 
    });
    
});





app.listen(3000, function(){
    console.log('Example app listening on port 3000!');    
});