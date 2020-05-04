function longestWord (frase) {
  let array = frase.split(' ');
  let longest = '';
  for (let i = 0; i < array.length; i++){
    if (array[i].length > longest.length) longest = array[i];
  }
  return longest;
}
console.log (longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

longestWordEs6 = (frase) => {
  const array = frase.split(' ');
  let longest = '';
  for (let i = 0; i < array.length; i++){
    if (array[i].length > longest.length) longest = array[i];
  }
  return longest;
}


console.log (longestWordEs6("Antônio foi no banheiro e não sabemos o que aconteceu"));