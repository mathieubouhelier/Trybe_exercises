function fact (n) {
  for (let i = n-1; i>0; i--){
  n = n * i;
  }
return n;
}

factEs6 = (n) =>{for(let i = n-1; i>0; i--){n = n * i}return n;}

console.log(fact (4));
console.log(factEs6(4));