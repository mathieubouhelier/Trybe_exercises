
function numtoroman (num_romain){
let index = "";
let soma = 0;
let tab_individual = [];

//let num_romain = "LXXVIII";
let array_romain = [];
let array_test = [];
let test_valor;

let object_roman = {I:1, V:5, X:10, L:50, C:100, D:500,M:1000};
array_romain = num_romain.split("");

for (i=0; i<(array_romain.length); i++){
    index = array_romain[i];
    array_test[i]= object_roman[index];
   
}
for (i=0; i<(array_test.length); i++){
    if (i == (array_test.length-1)){
        soma = soma + array_test[i];
        break
        }
        if (array_test[i]<array_test[i+1]){
            soma = soma + array_test[i] * -1;

        }
        if (array_test[i]>=array_test[i+1]){
            soma = soma + array_test[i];

        }
    }
    console.log(soma);
    return soma;
}
numtoroman('MMCXVII');


