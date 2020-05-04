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
  stringFunction += `\n#goTrybe”.`;
  return stringFunction;
}

nameEs6 = (phrase, word) => phrase = phrase.replace('x', word);

addSkillsEs6 = (phraseToAdd) => {
  let out = `${phraseToAdd} \nMinhas cinco principais habilidades são:`;
  skills.sort().forEach((x) => {out = `${out} \n* ${x}`});
  out += `\n#goTrybe”.`;
  return out
}



console.log(addSkills(name('Tryber x aqui! Tudo bem?','Lucas')));
console.log(addSkillsEs6(nameEs6('Tryber x aqui! Tudo bem?','Lucas')));

