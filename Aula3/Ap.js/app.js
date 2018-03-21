/*var greetMe=function(){
    console.log("Hello");
}
var greetWord=function(){
    console.log("Anita");
}
function log(fn){
    console.log("Inovação");
    fn();
}
greetMe();
greetWord();
log(greetMe);
log(greetWord);
var myLogModule = require('./log.js');//permite entrar na outra pagina
myLogModule.log1.update('Node.js started');

myLogModule.log.error('Node.js started');
*/

var started = function(){
    console.log("Download started");
}
var update=function(){
    console.log();
}
var completed= function(){
    console.log("Download Completed");
}

function performDownload(started, update, completed){
    started();
    update();
    for(update=0; update<=50; update++){
        console.log(update+ "% of Download");
    }
    completed();
}

performDownload(started, update, completed);
 
var arrayUtils = require('./ArrayUtils.js');//permite entrar na outra pagina
var a=[1, 3, 5, 7, 9];
var isEmpty= arrayUtils.isEmpty(a);
console.log("O array está vazio: " + isEmpty);
var max= arrayUtils.max(a);
console.log("O array maior: " + max);
var min= arrayUtils.min(a);
console.log("O array menor: " + min);
var media= arrayUtils.media(a);
console.log("A média é: " + media);