let arrayATestar = [20, 3, 6, 7, 10, 1];
let resultado = true;
let valorMax = 0;
function testArray (inputArray) {
    let indicMax = inputArray.length;
    for (i=0; i<indicMax; i++){
         if (valorMax < inputArray[i]) {
            valorMax = inputArray[i]
            resultado = i;
        }
    }

return resultado;
}
 console.log(testArray(arrayATestar));
