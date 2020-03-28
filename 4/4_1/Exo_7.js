let nota = 101;
if (nota < 0 || nota > 100){
    console.log("ERRO, a nota passada for menor que 0 ou maior que 100");
}
if (nota <50){
    console.log("A nota é F");
}
if (nota >= 50 && nota <60){
    console.log("A nota é E");
}
if (nota >= 60 && nota <70){
    console.log("A nota é D");
}
if (nota >= 70 && nota <80){
    console.log("A nota é C");
}
if (nota >= 80 && nota <90){
    console.log("A nota é B");
}
if (nota >= 90 && nota <=100){
    console.log("A nota é A");
}