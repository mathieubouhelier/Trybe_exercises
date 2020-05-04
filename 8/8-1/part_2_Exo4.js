let skills = ['JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'];

function name(phrase, word) {
  let array = phrase.split(" ");
  let phraseOut = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'x') array[i] = word;
    phraseOut = phraseOut + ' ' + array[i];
  }
    return phraseOut;
}

function addSkills (stringFunction) {
  skills.sort();
  stringFunction = stringFunction + '\n Minhas cinco principais habilidades são:';
  for (i = 0; i < skills.length; i++) {
    stringFunction = stringFunction + '\n * ' + skills[i];
  }
  return stringFunction;
}

nameEs6 = (phrase, word) => phrase = phrase.replace('x', word);

// addSkillsEs6 = (phraseToAdd) => {
//   return  `${phraseToAdd}
// Minhas cinco principais habilidades são:
// ${skills.sort()}
// #goTrybe”.`
// }
 
addSkillsEs6 = (phraseToAdd) => {
  console.log(`${phraseToAdd}
Minhas cinco principais habilidades são:`)
  skills.sort().forEach((x) => {
    console.log(`* ${x}`)
  })
  console.log('#goTrybe')
return out
}

//   return  `${phraseToAdd}
// Minhas cinco principais habilidades são:
// ${skills.sort().forEach((x) => {
//   console.log(`${x}`,x)
// })
// }
// #goTrybe”.`


// console.log(addSkills(name('Tryber x aqui! Tudo bem?','Lucas')));
console.log(addSkillsEs6(nameEs6('Tryber x aqui! Tudo bem?','Lucas')));