let peçaDeXadrez = "Bispo";

let nomeDaPeca = peçaDeXadrez.toLowerCase();

console.log(nomeDaPeca);

switch (nomeDaPeca) {
    case 'peão' :
        console.log("O peão é a peça com movimento mais limitado no xadrez. Ele só pode deslocar-se para frente, uma casa de cada vez")
        break;
    case 'torre' :
        console.log("A torre tem o poder de percorrer todo o tabuleiro")
        break;    
    case 'bispo' :
        console.log("ele só se movimenta na diagonal.")
        break;  
    case 'cavalo' :
        console.log("Ele salta duas casas e se posiciona à esquerda ou direita da segunda casa.")
        break;  
    case 'rainha' :
        console.log("Ela pode movimentar-se na horizontal, vertical e diagonal, quantas casas estiverem disponíveis.")
        break;  
    case 'rei' :
        console.log("O rei pode mover-se tanto na vertical quanto na horizontal. No entanto, ao contrário da torre ou da rainha, só pode andar uma casa de cada vez. E")
        break;  
    default:
        console.log("Erro de digitação: Não é peça de xadrez");
}
