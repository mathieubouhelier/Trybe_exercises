// var arr =[];
// var n = 5;
// for (var i=0; i<n; i++){
//     for (var j = 0; j<n; j++){
//         arr.push('*');
//     }    
//     console.log(arr.join(' '));
//     arr =[];
// }
// //exercicio 2
// var arr =[];
// var n = 5;
// for (var i=0; i<=n; i++){
//     for (var j = 0; j<i; j++){
//         arr.push('*');
//     }    
//     console.log(arr.join(' '));
//     arr =[];
// }

// //exercicio 3
// console.log("exercicio 3")
// var arr =[];
// var n = 9;
// for (var i=0; i<=n; i++){
//     for (var j=0; j<(n-i); j++){
//         arr.push('*');
//     }    
//     console.log(arr.join(' '));
//     arr =[];
// }
// //exercicio 4
// console.log("exercicio 4")
// var arr =[];
// var n = 4;
// for (var i=1; i<=n; i++){
//     if (i%2 == 0){
//         //console.log();
//     }
//     else{
//         for (var j=0; j<((n-i)/2); j++){
//             arr.push("\xa0");
//         }    
//                 for (var j=0; j<i; j++){
//             arr.push('*');
//         }    
        
//         console.log(arr.join(' '));
//         arr =[];
//     }
// }
//excercico 5
// console.log("exercicio 5")
// var arr =[];
// var n = 7;
// for (var i=0; i<((n-1)/2); i++){
//     arr.push("\xa0");
// }    
// arr.push('*');
// console.log(arr.join(' '));

// for (var i=3; i<n; i+=2){
//     arr =[];
//     for (var j=1; j<=(n-i)/2; j+=1){    
//         arr.push("\xa0");
//         }
//         arr.push('*');
//         for (var j=1; j<=i-2; j+=1){
//             arr.push("\xa0");
//         }
//         arr.push('*');
//     console.log(arr.join(' '));
//     }
// arr =[];
// for(i=0; i<n; i+=1){
    
//     arr.push('*');
// }
// console.log(arr.join(' '));
//excercico 6
console.log("exercicio 6")
var primo = true;
var num = 5;
console.log(num);
for (i=2; i<num; i+=1){
    
    if (num%i===0) {
        primo = false
    }
}
console.log(primo);
