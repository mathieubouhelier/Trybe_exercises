
function verificaFimPalavra (stringWord,strinEnding) {

    let stringEndingSeparated ; 
    let stringWordSeparated ;
    stringEndingSeparated = strinEnding.split(''); 
    stringWordSeparated = stringWord.split('');
    let longstringEnding;
    longstringEnding = strinEnding.length;
    let longstringWord;
    longstringWord = stringWord.length;
    let resultado;

    for (let i=1; i<=longstringEnding; i++){
        if (stringEndingSeparated [longstringEnding-i] == stringWordSeparated[longstringWord-i]){
          resultado = true;
        }
        else{
            resultado = false;
        }
    }
return resultado;
}
console.log(verificaFimPalavra("trybe", "be"));
