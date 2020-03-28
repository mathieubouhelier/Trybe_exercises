let precoDeCompra = 10;
let precoDeVenda = 13;
let qdaVenda = 1000;
let lucro= null;
if (precoDeCompra<0 || precoDeVenda<0){
    console.log("Dados de entrada <0");
}
else{
lucro = ((precoDeVenda*0.8)-precoDeCompra)*qdaVenda;
console.log("O lucro é:");
console.log(lucro);
}