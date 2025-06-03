class Produto {
    constructor(id, nome, quantidade) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}

class No {
    constructor(produto) {
        this.produto = produto;
        this.esquerda = null;
        this.direita = null;
    }
}

class ArvoreProduto {
    constructor() {
        this.raiz = null;
    }

    inserir (produto) {
        if (this.raiz == null) {
            this.raiz = new No(produto);
            
            console.log(`Produto ${produto.id} - ${produto.nome} inserido na raiz, quantidade: ${produto.quantidade}`);
        } else {
            this._inserirRecursivo(produto, this.raiz);
        }
    }

    _inserirRecursivo (produto, no) {
        if (produto.id < no.produto.id) {
            if (no.esquerda == null) {
                no.esquerda = new No(produto);

                console.log(`Produto ${produto.id} - ${produto.nome} inserido na esquerda de ${no.produto.id} - ${no.produto.nome}, quantidade: ${produto.quantidade}`);
            } else {
                this._inserirRecursivo(produto, no.esquerda);
            }
        } else if (produto.id > no.produto.id) {
            if (no.direita == null) {
                no.direita = new No(produto);

                console.log(`Produto ${produto.id} - ${produto.nome} inserido na direta de ${no.produto.id} - ${no.produto.nome}, quantidade: ${produto.quantidade}`);
            } else {
                this._inserirRecursivo(produto, no.direita);
            }
        } else {
            no.produto = produto;

            console.log(`Produto ${produto.id} - ${produto.nome} atualizado, quantidade: ${produto.quantidade}${produto.esquerda != null ? `, a esquerda ${produto.esquerda.id} - ${produto.esquerda.nome}` : ''}${produto.direita != null ? `, a direita ${produto.direita.id} - ${produto.direita.nome}` : ''}`);
        }
    }

    buscar(id) {
        let produto = this._buscarRecursivo(id, this.raiz);

        if (produto == null) {
            console.log(`Produto ${id} não encontrado`);
        } else {
            console.log(`Produto ${produto.id} - ${produto.nome} encontrato, quantidade: ${produto.quantidade}${produto.esquerda != null ? `, a esquerda ${produto.esquerda.id} - ${produto.esquerda.nome}` : ''}${produto.direita != null ? `, a direita ${produto.direita.id} - ${produto.direita.nome}` : ''}`);
        }
    }

    _buscarRecursivo(id, no){
        if (no == null) {
            return null;
        } else if (id < no.produto.id) {
            return this._buscarRecursivo(id, no.esquerda);
        } else if (id > no.produto.id) {
            return this._buscarRecursivo(id, no.direita);
        } else {
            return no.produto;
        }
    }

    listar() {
        console.log("Listagem de produtos:");

        this._listarRecursivo(this.raiz);
    }

    _listarRecursivo(no) {
        if (no != null) {
            this._listarRecursivo(no.esquerda);
            
            console.log(`Produto ${no.produto.id} - ${no.produto.nome}, quantidade: ${no.produto.quantidade}${no.esquerda != null ? `, a esquerda ${no.esquerda.produto.id} - ${no.esquerda.produto.nome}` : ''}${no.direita != null ? `, a direita ${no.direita.produto.id} - ${no.direita.produto.nome}` : ''}`);
            
            this._listarRecursivo(no.direita);
        }
    }

    listarFormatado() {
        console.log("Estrutura da Árvore de Produtos:");

        this._listarFormatado(this.raiz, "", true);
    }

    _listarFormatado(no, prefixo, ehUltimo) {
        if (no != null) {
            console.log(
                prefixo + (ehUltimo ? "└── " : "├── ") +
                `(${no.produto.id}) ${no.produto.nome} - Qtd: ${no.produto.quantidade}`
            );

            const filhos = [];
            if (no.esquerda) filhos.push({ no: no.esquerda, ehUltimo: !no.direita });
            if (no.direita) filhos.push({ no: no.direita, ehUltimo: true });

            for (let i = 0; i < filhos.length; i++) {
                const filho = filhos[i];
                this._listarFormatado(
                    filho.no,
                    prefixo + (ehUltimo ? "    " : "│   "),
                    filho.ehUltimo
                );
            }
        }
    }
}

function main() {
    let arvore = new ArvoreProduto();

    const produtos = [
        new Produto(10, "Papel", 10),
        new Produto(5, "Caneta", 7),
        new Produto(15, "Lápis", 12),
        new Produto(3, "Caderno", 5),
        new Produto(7, "Apontador", 6),
        new Produto(13, "Régua", 4),
        new Produto(17, "Borracha", 3),
        new Produto(1, "Marca Texto", 2),
        new Produto(4, "Estojo", 8),
        new Produto(6, "Tesoura", 9),
    ];

    for (const p of produtos) {
        arvore.inserir(p);
    }

    arvore.listar();

    arvore.buscar(3);

    arvore.buscar(20);

    arvore.listarFormatado();
}

main();