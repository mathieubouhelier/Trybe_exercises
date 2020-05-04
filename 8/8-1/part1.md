***EXO 1/

function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

var should not exist in code.
The variable i declared in the if statement should equal "block scope".
checkScope() should return "function scope"


function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  
  console.log('Function scope i is: ', i);
  return i;
}


***EXO2
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

You should not replace const keyword.
s should be a constant variable (by using const).
You should not change the original array declaration.
s should be equal to [2, 5, 7].

const s = [5, 7, 2];
function editInPlace() {
  'use strict';

  // Only change code below this line
   s [0] = 2;
   s [1] = 5;
   s [2] = 7;

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
