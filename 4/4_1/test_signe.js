let valorATestar = "fkd" ;
let resultado;

if (valorATestar > 0) {
    resultado = "E positive";
}
else if (valorATestar < 0) {
    resultado = "E negative";
}
else { 
    if (valorATestar == 0) {
        resultado = "E egale a zero";
    }
    else{
        resultado = "egale a nada"
    }
}

console.log(resultado);