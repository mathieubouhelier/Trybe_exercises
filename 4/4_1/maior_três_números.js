let a = 15;
let b = 5;
let c = 10;
let resultado;

if (a > b ){
    if (a > c){
        resultado = "a";
    }
    else {
        resultado = "c";
    }
}
else{
    if (b > c){
        resultado = "b";
    }
    else {
        resultado = "c";
    }
}

console.log(resultado);