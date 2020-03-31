function repetition (numeros){
let quandidade=[0];
    for (i=0; i<(numeros.length); i++){
 
       quandidade[i]=0; 
        for (j=0; j<(numeros.length); j++){

            if (numeros[i] === numeros[j]) {

                quandidade[i]++;            }
        }
    }

let indicMax = quandidade.length;
let resultado;
let valorMax=0;
//console.log(quandidade);
for (i=0; i<indicMax; i++){
        if (valorMax < quandidade[i]) {
        valorMax = quandidade[i]
        resultado = i;
    }
}

 return numeros[resultado];

}
console.log(repetition([2, 3, 2, 5, 8, 2, 3,1,1,1,1,1]));