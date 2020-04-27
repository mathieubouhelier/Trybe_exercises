Agora a prática
Primeiramente faça os exercícios de 1 a 6 deste link

Para os exercícios a seguir, copie o arquivo HTML abaixo e utilize-o como base.

Copiar
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Exercícios 7.3</title>
  <style>
    * {
      box-sizing: border-box;
    }

    section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 90%;
      height: 100px;
      border: 1px solid red;
      margin-bottom: 10px;
      padding: 5px;
    }
    .flex-direction__column { flex-direction: column; }
    .justify-content__space-between { justify-content: space-between; }
    .justify-content__center { justify-content: center; }
    .align-items__flex-start { align-items: flex-start; }
    .automatic-box-height { height: auto; }
    .ball { border-radius: 100%; }
    .green { background-color: green; }
    .blue { background-color: blue; }
    .red { background-color: red; }
    .yellow { background-color: yellow; }
    .black { background-color: black; }
    .medium {
      width: 50px;
      height: 50px;
    }
  </style>
</head>
<body>
  <ol>
    <li>
      <section>
        <div id="exercise-1" class="ball green medium"></div>
      </section>
    </li>
    <li>
      <section>
        <div id="exercise-2" class="ball green medium"></div>
      </section>
    </li>
    <li>
      <section>
        <div id="exercise-3" class="ball green medium"></div>
      </section>
    </li>
    <li>
      <section>
        <div id="exercise-4" class="ball green medium"></div>
      </section>
    </li>
    <li>
      <section id="section-5">
        <div id="exercise-5" class="ball green medium"></div>
      </section>
    </li>
    <li>
      <section class="justify-content__space-between">
        <div id="exercise-6-square" class="blue medium"></div>
        <div id="exercise-6" class="ball green medium"></div>
      </section>
    </li>
    <li>
      <section class="justify-content__center">
        <div id="exercise-7" class="blue medium"></div>
      </section>
    </li>
    <li>
      <section class="justify-content__center">
        <div id="exercise-8" class="red medium"></div>
      </section>
    </li>
    <li>
      <section class="justify-content__center">
        <div id="exercise-9" class="red medium"></div>
      </section>
    </li>
    <li>
      <section class="justify-content__center">
        <div id="exercise-10" class="red medium"></div>
      </section>
    </li>
      <li>
        <section class="flex-direction__column align-items__flex-start automatic-box-height">
          <div id="exercise-11_1" class="red medium"></div>
          <div id="exercise-11_2" class="blue medium"></div>
          <div id="exercise-11_3" class="green medium"></div>
          <div id="exercise-11_4" class="yellow medium"></div>
          <div id="exercise-11_5" class="black medium"></div>
        </section>
      </li>
      <li>
        <section class="justify-content__center">
          <div id="exercise-12" class="black medium"></div>
        </section>
      </li>
  </ol>
</body>
</html>
O arquivo acima que você copiou possui 12 retângulos com bordas vermelhas que correspondem aos 10 exercícios abaixo, ou seja, cada exercício deve ser feito em seu espaço designado.

Após 1 segundo do carregamento da página, faça a bola verde ir da borda esquerda para a borda direita ao longo de 3 segundos.

Após 2 segundos do carregamento da página, faça a bola verde ir da borda esquerda para a borda direita ao longo de 2 segundos. Ao final da animação, a bola deve permanecer na borda direita. Utilize o keyframe criado para o exercício número 1 para esse exercício também, ou seja, ambos os exercícios compartilharão o keyframe.

Após 1 segundo do carregamento da página, faça a bola verde ir da borda esquerda para a borda direita e voltar ao longo de 1 segundo por trecho. Utilize o keyframe criado para o exercício número 1 para esse exercício também, ou seja, ambos os exercícios compartilharão o keyframe.

Faça a bola verde ir da borda esquerda para a borda direita enquanto o mouse estiver em cima dela. A duração do evento deve ser de 5 segundos.

Faça a bola verde ir da borda esquerda para a borda direita enquanto o mouse estiver dentro do elemento <section> do exercício. A duração do evento deve ser de 5 segundos.

Faça a bola verde ir da direita para a esquerda enquanto o mouse estiver dentro do elemento <div id="exercise-6-square">. A duração do evento deve ser de 5 segundos.

Faça o quadrado azul aumentar a largura até o tamanho do box do exercício e voltar ao tamanho original infinitas vezes com o tempo de 10 segundos de duração.

Altere a cor do quadrado vermelho para amarelo em um tempo de 4 segundos de duração.

Altere a cor do quadrado vermelho para amarelo, azul e verde em um tempo de 4 segundos de duração por infinitas vezes. Faça a alteração das cores na ordem inversa também.

Combine as animações número 7 e número 9 no quadrado vermelho.

Neste exercício, você possui 5 quadrados (vermelho, azul, verde, amarelo e preto). Todos eles devem se mover da borda esquerda para a direita ao longo de 3 segundos. Esta animação deve iniciar depois de 2 segundos do carregamento da página e deve durar infinitamente. Você deve alterar a velocidade dos quadrados conforme a seguinte regra:

O quadrado vermelho deve ter uma velocidade linear (constante);
O quadrado azul deve iniciar o movimento de forma lenta, depois acelerar e finalizar de forma lenta;
O quadrado verde deve iniciar o movimento de forma lenta;
O quadrado amarelo deve finalizar o movimento de forma lenta;
O quadrado preto deve iniciar e finalizar o movimento de forma lenta;
Ao ser clicado (e o click ser mantido pressionado) faça o quadrado preto desaparecer ao longo de 1 segundo. Depois de desaparecer completamente, ele não deve mais reaparecer.

Bônus
Altere as formas geométricas presentes na página por imagens como por exemplo, carros, nuvens, sol ou algo que você goste.