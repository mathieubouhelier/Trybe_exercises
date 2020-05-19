///Exo 1
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//Exo 1
function addParameter (objetoasermodificado, chave, value) {
  objetoasermodificado[chave] = value;
}
addParameter (lesson2, "turno", "noite");
console.log("Exo 1", lesson2);
//Exo 2
function listKeys (objectTarget) {
  return Object.keys(objectTarget);
}
console.log("Exo 2: listKeys(lesson3)", listKeys(lesson3));

// listKeys(lesson3);

//Exo 3
objectlegnth = (objectTarget) => {
  return Object.keys(objectTarget).length;
}

console.log("Exo 3: objectlegnth(lesson3)", objectlegnth(lesson3));
//Exo 4
function listValues (objectTarget) {
  return Object.values(objectTarget);
}
console.log("Exo 4: listValues(lesson3)", listValues(lesson3));
//Exo 5
const allLessons = {
  lesson1:Object.assign({}, lesson1), 
  lesson2: Object.assign({}, lesson2), 
  lesson3: Object.assign({}, lesson3)
  }
// const allLessons = Object.assign({},{lesson1,lesson2,lesson3}); Você tem o mesmo resultado que:const allLessons = {lesson1, lesson2, lesson3}
console.log("Exo 5: allLessons", allLessons);
//Exo6
totalEstudante = (objectTarget) => {
let total = 0;
for (index in objectTarget) {
  total += objectTarget[index].numeroEstudantes;
}
return total;
}
console.log("Exo6 : número total de estudantes em todas as aulas.", totalEstudante (allLessons));

//Exo7 
getValueByNumber = (lesson, n) => Object.values(lesson)[n];

console.log("Exo 7: ", getValueByNumber(lesson1, 0));

//Exo 8
verifyPair = (lesson, a, b) => {
  return lesson[a] == b;
}
console.log("Exo 8: lesson3, 'turno', 'noite' ", verifyPair(lesson3, 'turno', 'noite'));
console.log("Exo 8: lesson3, 'materia', 'Maria Clara'",verifyPair(lesson3, 'materia', 'Maria Clara'));
//Bonus 1
totalEstudante = (objectTarget) => {
  let total = 0;
  for (index in objectTarget) {
      if (objectTarget[index].materia === 'Matemática'){
      total += objectTarget[index].numeroEstudantes;
  }
  }
  return total;
  }
  console.log("Bonus 1: número total de estudantes em todas as aulas de Matemática", totalEstudante (allLessons));

//Bonus 2
createReport = (objectTarget, prof) => {
  let report = { 'professor': prof};
  let total = 0;
  let mat = [];
  for (index in objectTarget) {
      if (objectTarget[index].professor === prof){
      total += objectTarget[index].numeroEstudantes;
      mat.push(objectTarget[index].materia);
  }
  }
  report.materia = mat;
  report.estudantes = total;
  return report;
  }
console.log(createReport(allLessons, 'Maria Clara'))