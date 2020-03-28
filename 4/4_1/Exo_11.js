let groossalary = 3000;
let inssTax = 0;
let irTax = 0;
let baseSalary = 0;
let salaryNet = 0;

if (groossalary <=1556.94){
    inssTax = groossalary*0.08;
}
if (groossalary >1556.94 && groossalary<= 2594.92  ){
    inssTax = groossalary*0.09;
}
if (groossalary >2594.92 && groossalary<= 5189.82  ){
    inssTax = groossalary*0.11;
}
if (groossalary >5189.82 ){
    inssTax = 570.88
}
baseSalary = groossalary - inssTax;
console.log(baseSalary);
console.log(inssTax);

if (baseSalary >1903.98 && groossalary<= 2826.65  ){
    irTax = baseSalary*0.075 - 142.80;
}
if (baseSalary >2826.65 && groossalary<= 3751.05 ){
    irTax = baseSalary*0.15 - 354.80;
}
if (baseSalary >3751.05 && groossalary<= 4664.68 ){
    irTax = baseSalary*0.225 - 636.13;
}
if (baseSalary >4664.68 ){
    irTax = baseSalary*0.275 - 869.36;
}

salaryNet = baseSalary - irTax;
console.log(salaryNet);
