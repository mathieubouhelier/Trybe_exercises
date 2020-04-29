window.onload = function () {
var cardavailable = ['cinco-de-ouros.png', 'nove-de-espadas.png'];
// function to add a new card in the grid
const clickCard = document.querySelector('#reverseCard');
clickCard.addEventListener('click', function () {
  const randomCard = cardavailable[Math.floor(Math.random() * cardavailable.length)];
 // console.log('randomBall', randomBall);
  const grid = document.querySelector('.grid');
  const img = document.createElement('img');
  grid.appendChild(img);
  img.src = `./cartas/${randomCard}`;
});
}//End window.onload