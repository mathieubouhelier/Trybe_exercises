//Exercício 9

let num1 = 3;
let num2 = 5;
let num3 = 7;

let isOdd = false;

if(num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
    isOdd = true;
}

console.log(isOdd);

//Exercício 10

let costOfProduct = 10;
let saleValue = 13;

if(costOfProduct > 0 && saleValue > 0) {
    let totalProfit = ((saleValue - costOfProduct) * 1000) * 0.8
    console.log(totalProfit);
} else {
    console.log("Erro");
}

//Exercício 11
let aliquotaINSS;
let aliquotaIR;

let grossSalary = 2000.00;

if(grossSalary <= 1556.94) {
    aliquotaINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    aliquotaINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    aliquotaINSS = grossSalary * 0.11;
} else {
    aliquotaINSS = 570.88;
}

let baseSalary = grossSalary - aliquotaINSS;

if (baseSalary <= 1903.98) {
    aliquotaIR = 0;
} else if (baseSalary <= 2826.65) {
    aliquotaIR = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05) {
    aliquotaIR = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68) {
    aliquotaIR = baseSalary * 0.225 - 636.13;
} else {
    aliquotaIR = baseSalary * 0.275 - 869.36;
}

console.log("Salário:" + (baseSalary - aliquotaIR));

