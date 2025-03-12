class JogoDaVelha {
    constructor() {
        this.tabuleiro = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
        this.jogadorAtual = 'X';
    }

    mostrarTabuleiro() {
        console.clear();
        this.tabuleiro.forEach(linha => console.log(linha.join(' | ')));
        console.log('\n');
    }

    jogar(linha, coluna) {
        if (this.tabuleiro[linha][coluna] === ' ') {
            this.tabuleiro[linha][coluna] = this.jogadorAtual;
            if (this.verificarVencedor()) {
                this.mostrarTabuleiro();
                console.log(`Jogador ${this.jogadorAtual} venceu!`);
                return true;
            }
            this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
        } else {
            console.log('Posição já ocupada! Tente novamente.');
        }
        return false;
    }

    verificarVencedor() {
        const linhas = this
