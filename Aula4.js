
/*
var obj={
    name:"Anita",
    age:20,
    gender:"P"
    
};
var myJson = JSON.stringify(obj);

*/
/*
var str ='{"name":"Anita","age":20,"genger":"P"}';
var obj = JSON.parse(str);
*/

/*
function Person(firstName,lastName,age){
    this.firstName= firstName;
    this.lastName = lastName;
    
}

Person.prototype.greet = function(){
    console.log("Hello" + " "+ this.firstName + " " + this.lastName + " " + this.age);
Person.prototype.age = undefined;
}


var Anita = new Person("Anita","Pereira");
Anita.age=39;
Anita.greet();

var Carlota = new Person("Carlota","Rodrigues");
Carlota.age=18;
Carlota.greet();


console.log(Anita.__proto__);
console.log(Carlota.__proto__);
console.log(Anita.__proto__ == Carlota.__proto__);
*/

/*
var array = [];

array.push(function() {console.log("Hello World 1")},
            function(){console.log("Hello World 2")},
            function() {console.log("Hello World 3")}
);

for(var i=0; i < array.length; i++){
    array[i]();

}

array.forEach(function(item) {
    item();
});

*/

function Emitter(){
    this.events = {};
}
Emitter.prototype.on = function(type,listener){
    if(this.events[type] == undefined){
        this.events[type] = [];
    }
        this.events[type].push(listener);
    
}
/*
Emitter.prototype.emit = function(type){
    if(this.events[type] != undefined){
    }
        this.events[type].forEach(listener){
            listener();
           
        });

}*/
module.exports = Emitter;

var Emitter = require ("./emitter");
//var Emitter = require("events");
var eventConstants = require('./constants');
var emtr = new Emitter();

console.log(eventConstants.events.GREET);

emtr.on(eventConstants.FILESAVED, function(){
    console.log("Somwhere, someone said hello");
});
emtr.on(eventConstants.GREET, function(){
        console.log("A greeting occured");

});
emtr.emit(enentConstants.greet);
emtr.emit(enentConstants.FILESAVED);


