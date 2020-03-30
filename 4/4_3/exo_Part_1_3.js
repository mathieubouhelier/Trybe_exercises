var info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
console.log("Bem-vinda,", info.personagem);  
info.recorrente = "sim";
console.log("Print o objeto 'info'");
console.log(info);
console.log("resultado do For In:");
for (indice in info) {
    console.log(indice);
}