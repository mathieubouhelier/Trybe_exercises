window.onload = function () {
const cardavailable = ['tres-de-ouros', 
'sete-de-paus', 'sete-de-espadas', 'seis-de-copas', 
'quatro-de-paus', 'cinco-de-ouros', 'nove-de-espadas'];
const listAnimation  = ['rotation', 'scale', 'skew'];
// function to add a new card in the grid
const clickCard = document.querySelector('#reverseCard');
clickCard.addEventListener('click', function () {
  const randomCard = cardavailable[Math.floor(Math.random() * cardavailable.length)];
  const randomAnimation = listAnimation[Math.floor(Math.random() * listAnimation.length)];
  // console.log('randomBall', randomBall);
  const grid = document.querySelector('.grid');
  const img = document.createElement('img');
  grid.appendChild(img);
  img.src = `./cartas/${randomCard}.png`;
  img.style.height = "200px";
  img.style.marginRight = '15px';
  img.className = randomAnimation;
});
}//End window.onload