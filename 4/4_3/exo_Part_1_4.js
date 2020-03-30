var info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
console.log("Bem-vinda,", info.personagem);  
info.recorrente = "sim";
console.log("Print o objeto 'info'");
console.log(info);
//Excercice 3
console.log("resultado do For In:");
for (indice in info) {
    console.log(indice);
}
//Excercice 4
console.log("resultado dos valores de info usando For In:");
console.log("");
for (indice in info) {
    console.log(info[indice]);
}