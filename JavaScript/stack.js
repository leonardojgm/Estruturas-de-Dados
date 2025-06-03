class PilhaDeLivros {
    constructor() {
        this.livros = [];
    }

    adicionar_livro(livro) {
        this.livros.push(livro);

        console.log(`Livro Título: ${livro.titulo} - Quantidade de Páginas: ${livro.numeroPaginas} entrou na pilha.`);
    }

    remover_livro() {
        if (this.livros.length == 0) {
            console.log(`Nenhum livro na pilha para remover.`);

            return;
        }
        
        var livro = this.livros[this.livros.length - 1];

        console.log(`Livro do topo Título: ${livro.titulo} - Quantidade de Páginas: ${livro.numeroPaginas} removido.`);

        this.livros.pop();
    }

    mostra_livro_topo() {
        if (this.livros.length == 0) {
            console.log(`Nenhum livro na pilha para mostrar.`);

            return;
        }

        var livro = this.livros[this.livros.length - 1];

        console.log(`Livro do topo Título: ${livro.titulo} - Quantidade de Páginas: ${livro.numeroPaginas}`);
    }

    mostrar_livros() {
        if (this.livros.length == 0) {
            console.log(`Nenhum livro na pilha para mostrar.`);

            return;
        }
        
        console.log("Pilha de Livros:");

        this.livros.forEach(livro => {
            console.log(`Título: ${livro.titulo} - Quantidade de Páginas: ${livro.numeroPaginas}`);
        });
    }
}

class Livro {
    constructor(titulo, numeroPaginas) {
        this.titulo = titulo;
        this.numeroPaginas = numeroPaginas;
    }
}

function main() {
    var pilha = new PilhaDeLivros();

    //Remoção de item
    pilha.remover_livro();
    pilha.mostrar_livros();

    //Adicionar itens
    var livro1 = new Livro("A Guerra dos Tronos", 704);
    pilha.adicionar_livro(livro1);

    var livro2 = new Livro("A Fúria dos Reis", 784);
    pilha.adicionar_livro(livro2);

    var livro3 = new Livro("A Tormenta de Espadas", 992);
    pilha.adicionar_livro(livro3);

    var livro4 = new Livro("O Festim dos Corvos", 784);
    pilha.adicionar_livro(livro4);

    var livro5 = new Livro("A Dança dos Dragões", 784);
    pilha.adicionar_livro(livro5);

    //Listagem de itens
    pilha.mostrar_livros();

    //Remoção de item
    pilha.remover_livro();
    pilha.mostrar_livros();

    //Adicionar itens
    pilha.adicionar_livro(livro5);
    pilha.mostrar_livros();

    //Exibe item no topo
    pilha.mostra_livro_topo();
}

main();