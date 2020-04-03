Parte I
Exercises: Events
Mad Libs
Start with this webpage, which has several input elements and a button:
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title></title>
 </head>
 <body>
 
 <h1>Mad Libs</h1>
 
 <ul>
  <li>Noun: <input type="text" id="noun">
  <li>Adjective: <input type="text" id="adjective">
  <li>Someone's Name: <input type="text" id="person">
 </ul>
 
 <button id="lib-button">Lib it!</button>
  
 <div id="story"></div>
  
 </body>
</html>
Add a script tag to the bottom of the page for your code.
Add an event listener to the button so that it calls a makeMadLib function when clicked.
In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
See Solution
function libIt() {
  var storyDiv = document.getElementById("story");
  var person = document.getElementById("person").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  storyDiv.innerHTML = person + " married a " + adjective + " " + noun + "... So weird!";
}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);
Calculator
Start with this webpage, which has inputs and buttons for things to calculate: 
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Calculator</title>
</head>
<body>

  <label>Square this number:
    <input type="number" id="square-input" size="2">
  </label>
  <button id="square-button">Calculate</button>
  <br><br>
  
  <label>Half this number:
    <input type="number" id="half-input" size="2">
  </label>
  <button id="half-button">Calculate</button>
  <br><br>
  
  <label>
    Fraction:
    <input type="number" id="percent1-input" size="2">
  </label>
  <label>
    Whole:
    <input type="number" id="percent2-input" size="2">
  </label>
  <button id="percent-button">Calculate</button>
  <br><br>
  
  <label>Calculate area of circle with radius:
    <input type="number" id="area-input" size="2">
  </label>
  <button id="area-button">Calculate</button> 
  <br><br>
  <div id="solution"></div>

  
</body>
</html>
Add a script tag, and add the functions from the calculator exercise (view the solution if you haven't done it yet).
For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
Bonus: respond to key presses so that the user doesn't have to click the button.
See Solution
function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

function halfOf(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}

function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

function areaOfCircle(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}
    
var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});
    
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function() {
  var num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfOf(num);
});

var percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function() {
  var num1 = document.getElementById("percent1-input").value;
  var num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1, num2);
});
    

var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function() {
  var num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(num);
});





No link abaixo, você vai encontrar a descrição de dois exercícios. Crie um arquivo .html para cada um e resolva-os separadamente, seguindo o modelo descrito na seção anterior.

Use a sua criatividade para incrementar ainda mais a solução. 🤓

Exercícios 1 e 2: Mão na massa!
Parte II
Para os próximos exercícios, você deve seguir as instruções da página, exceto a parte que fala do Dreamweaver 😖. Lembre-se de que estamos usando o VSCode como editor de texto.

Abra o link, clique com o botão direito e selecione a opção “Ver código fonte”/“View source”;

Uma nova aba vai se abrir com o código HTML da página. Selecione todo o conteúdo da página e copie e cole no seu arquivo HTML correspondente ao exercício;

Siga as orientações da página para realizar os exercícios “Task 1” e “Task 2”;

Bônus: Faça a tarefa descrita na parte “Extensions”;

Você pode usar sua criatividade para conseguir as imagens do mesmo tamanho, ou utilizar as que estão descritas no link ao final da página: ⚠ e ❌. Basta clicar com o botão direito sobre elas e selecionar “Salvar imagem como…”.
Lembre-se de seguir as orientações de commit na seção anterior.

Obs: Se estiver tendo problemas com o enunciado, tente traduzir a página!

Exercícios 3 e 4: Sua vez!
Parte III
Neste exercício, você vai aprender a usar mais funções e eventos para criar um efeito de animação na página. 🐈

Resolva o exercício até pelo menos o Bonus #2.

Lembre-se de sempre pesquisar suas dúvidas. Abaixo estão alguns links que podem ser úteis pra você:

Atributo innerWidth do objeto window ;

Função setInterval do objeto window .

Faça o commit do seu código após conseguir implementar cada exercício!

Exercício 5: Vamos nessa!
Parte IV
Neste exercício, você vai praticar a leitura e a interpretação de código HTML, CSS e JavaScript. 🙂

No link abaixo, está um trecho de código do CodePen, no qual já existe:

A estrutura do código em HTML;

A estilização da página com o CSS;

Funções JavaScript para adicionar comportamentos à pagina.

Seu trabalho é adicionar o evento correto a cada um dos três elementos button da página e um evento ao elemento input, de forma que a função mais apropriada definida no JavaScript seja acionada quando quem usa interagir com cada elemento, clicando ou digitando, por exemplo.

Já existem quatro funções JavaScript definidas:
goDark();
complainMessage();
finishTheStory();
typeAndScream().
Dicas:

Não é necessário mas se quiser pode alterar o CSS da página;

Coloque seu fone de ouvido enquanto estiver resolvendo este exercício (percebeu a tag audio no HTML?)!

Evento do JavaScript que ocorre ao digitar algo em um input
Você pode ficar à vontade para fazer o exercício diretamente no CodePen, mas recomendamos que copie o código no seu arquivo correspondente ao exercício. Assim, você vai conseguir enviá-lo ao seu repositório no GitHub. 😉

Exercício 6: Conectando as pontas.