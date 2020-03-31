let index = 0;
let soma = 0;
let tab_individual = [];
let array_test = [100, 20 , 1, 1, 1];
for (i=0; i<(array_test.length); i++){
    console.log("i: ", i);
    if (i == (array_test.length)){
//Manque ce cas ultime index
        break;
    }
    if (array_test[i]<array_test[i+1]){
        index++;
        console.log("soma first :", soma);
        soma = soma + array_test[i+1]-array_test[i];
        tab_individual[index] = soma;
        console.log("index: ", index);
        console.log("soma :", soma);
        soma = 0;
    }
    if (array_test[i]>array_test[i+1]){
        console.log("index: ", index);
        console.log("soma :", soma);
        index++;
        tab_individual[index] = array_test[i];
        
    }
    if(array_test[i] === array_test[i+1]){
        console.log("index: ", index);
        console.log("soma :", soma);
        soma = soma + array_test[i];
    }
}
console.log(tab_individual);