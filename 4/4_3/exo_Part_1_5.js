//Excercice 5
console.log("Exercicio 5");
var info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
  };
  
  var info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
  };

console.log("resultado dos valores de info usando For In:");
console.log("");

  for (indice in info) {
      if(info[indice] === info2[indice]){
          console.log("Ambos recorrentes");
      }
      else{
    console.log(info[indice],"e",info2[indice]);
    }
}