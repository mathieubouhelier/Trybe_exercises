let arrayATestar = [2, 4, 6, 7, 10, 0, -3];
let resultado = true;

function testArray (inputArray) {
    let indicMax = inputArray.length;
    let valorMax = inputArray[0];
    for (i=0; i<indicMax; i++){
         if (valorMax > inputArray[i]) {
            valorMax = inputArray[i]
            resultado = i;
        }
    }

return resultado;
}
 console.log(testArray(arrayATestar));
