// //exercicio 1   
console.log("exercicio 1")
let arr =[];
let n = 5;
for (let i=0; i<n; i++){
    for (let j = 0; j<n; j++){
        arr.push('*');
    }    
    console.log(arr.join(' '));
    arr =[];
}
// //exercicio 2
console.log("exercicio 2")
arr =[];
n = 5;
for (let i=0; i<=n; i++){
    for (let j = 0; j<i; j++){
        arr.push('*');
    }    
    console.log(arr.join(' '));
    arr =[];
}

//exercicio 3
console.log("exercicio 3")
arr =[];
n = 9;
for (let i=0; i<=n; i++){
    for (let j=0; j<(n-i); j++){
        arr.push(' ');
    }    
    for (let j = 0; j<i; j++){
        arr.push('*');
    }   
    arr.push('*')
    console.log(arr.join(' '));
    arr =[];
}
// //exercicio 4
console.log("exercicio 4")
arr =[];
n = 4;
for (let i=1; i<=n; i++){
    if (i%2 == 0){
        //console.log();
    }
    else{
        for (let j=0; j<((n-i)/2); j++){
            arr.push("\xa0");
        }    
                for (let j=0; j<i; j++){
            arr.push('*');
        }    
        
        console.log(arr.join(' '));
        arr =[];
    }
}
// //excercico 5
console.log("exercicio 5")
arr =[];
n = 7;
for (let i=0; i<((n-1)/2); i++){
    arr.push("\xa0");
}    
arr.push('*');
console.log(arr.join(' '));

for (let i=3; i<n; i+=2){
    arr =[];
    for (let j=1; j<=(n-i)/2; j+=1){    
        arr.push("\xa0");
        }
        arr.push('*');
        for (let j=1; j<=i-2; j+=1){
            arr.push("\xa0");
        }
        arr.push('*');
    console.log(arr.join(' '));
    }
arr =[];
for(i=0; i<n; i+=1){
    
    arr.push('*');
}
console.log(arr.join(' '));
// //excercico 6
console.log("exercicio 6")
let primo = true;
num = 5;
console.log(num);
for (i=2; i<num; i+=1){
    
    if (num%i===0) {
        primo = false
    }
}
console.log(primo);
