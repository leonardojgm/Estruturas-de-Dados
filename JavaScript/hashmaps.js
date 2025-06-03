class Jogo {
    constructor() {
        this.jogadores = {};
    }

    adicionar_jogador(nome, pontuacao) {
        this.jogadores[nome] = pontuacao;

        console.log(`Jogador: ${nome} - Pontuação: ${pontuacao} adicionado.`);
    }

    atualizar_jogador(nome, pontuacao) {
        this.jogadores[nome] = pontuacao;

        console.log(`Jogador: ${nome} - Pontuação: ${pontuacao} atualizado.`);
    }

    atualizar_pontuacao_jogador(nome) {
        this.jogadores[nome]++;

        console.log(`Jogador: ${nome} - Pontuação: ${this.jogadores[nome]} atualizado.`);
    }

    remover_jogador(nome) {
        if (!this.jogadores[nome]) {
            console.log(`Jogador: ${nome} não encontrado.`);

            return;
        }

        delete this.jogadores[nome];

        console.log(`Jogador: ${nome} removido.`);
    }

    mostrar_jogadores_por_pontuacao() {
        if (Object.keys(this.jogadores).length == 0) {
            console.log(`Nenhum jogador cadastrado.`);

            return;
        }

        console.log(`Pontuação:`);

        var jogadoresOrdenados = Object.entries(this.jogadores).sort((a, b) => b[1] - a[1]);

        jogadoresOrdenados.forEach(jogador => console.log(`Jogador: ${jogador[0]} - Pontuação: ${jogador[1]}`));
    }

    determinar_vencedor() {
        if (Object.keys(this.jogadores).length == 0) {
            console.log(`Nenhum jogador cadastrado.`);

            return;
        }

        var pontuacaoMaxima = 0;

        for (let jogador in this.jogadores) {
            if (this.jogadores[jogador] > pontuacaoMaxima) {
                pontuacaoMaxima = this.jogadores[jogador];
            }
        }

        console.log(`Vencedor: ${Object.keys(this.jogadores).find(jogador => this.jogadores[jogador] == pontuacaoMaxima)}`);
    }
}

function main() {
    var jogo = new Jogo();

    //mostrar jogadores
    jogo.mostrar_jogadores_por_pontuacao();

    //determinar vencedor
    jogo.determinar_vencedor();

    //adicionar jogadores
    jogo.adicionar_jogador("Jogador 1", 10);
    jogo.adicionar_jogador("Jogador 2", 6);
    jogo.adicionar_jogador("Jogador 3", 64);
    jogo.adicionar_jogador("Jogador 4", 76);
    jogo.adicionar_jogador("Jogador 5", 7);
    jogo.atualizar_jogador("Jogador 1", 15);

    //remover jogador
    jogo.remover_jogador("Jogador 5");

    //remover jogador
    jogo.remover_jogador("Jogador 6");

    //atualizar pontuação
    jogo.atualizar_pontuacao_jogador("Jogador 2");
    jogo.atualizar_pontuacao_jogador("Jogador 2");

    //mostrar jogadores
    jogo.mostrar_jogadores_por_pontuacao();

    //determinar vencedor
    jogo.determinar_vencedor();
}

main();