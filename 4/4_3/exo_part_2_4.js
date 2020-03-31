let arrayATestar = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let resultado ;

function testArray (inputArray) {
    let indicMax = inputArray.length;
    let valorMax = 0;
    let long;
    for (i=0; i<indicMax; i++){
        long = inputArray[i];
        long = long.length;
         if (valorMax < long) {
            valorMax = long
            resultado = inputArray[i];
        }
    }

return resultado;
}
 console.log(testArray(arrayATestar));
