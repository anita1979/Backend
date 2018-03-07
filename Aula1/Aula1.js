/*var a = 1;
var b = 2;
var c = a + b;
console.log(c);
*/

function notaFinal(notaP1, notaP2, notaPF) {
    var notaF = notaP1 * 0.3 + notaP2 * 0.3 + notaPF * 0.4;
    return notaF;
}

function nomeMesPorExtenso(numeroMes) {
    switch (numeroMes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;

        default:
        
            break;
    }
}

function calculadora(numero1,numero2){
    var numero1=10;
    var numero2=10;
}

function main() {

    var notaP1 = 15;
    var notaP2 = 12;
    var notaPF = 10;
    var notaF = notaFinal(notaP1, notaP2, notaPF);
    console.log("Nota Final: " + notaF);
    if (notaF < 9.5) {
        console.log("Reprovou: " + notaF);
    }
    else {
        console.log("Aprovou: " + notaF);
    }

    nomeMesPorExtenso(6);

}

// chamar a função
main();
