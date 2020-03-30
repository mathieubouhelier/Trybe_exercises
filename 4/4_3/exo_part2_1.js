let nomeATestar = "radar";
let resultado = true;
let wordSeparated; 

function palíndromo (nome) {
wordSeparated = nome.split('');  
let long = nome.length;
let indicMax = Math.ceil(long/2);   
for (i=0; i<indicMax; i++){
    if (wordSeparated[i] !== wordSeparated [long-i-1]){
        resultado = false;
    }
}
    return resultado;    
}
console.log(palíndromo(nomeATestar));