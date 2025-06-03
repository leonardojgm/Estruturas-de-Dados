class ListaDeProdutos {
    constructor() {
        this.cabeca = null;
        this.cauda = null;
    }

    adicionar_item(produto) {
        if (this.verificar_existencia_item(produto.codigoDeBarras)) {
            console.log("Produto já cadastrado na lista de produtos.");

            return;
        };

        if (!this.verificar_preco(produto.preco)) {
            console.log("Preço inválido.");

            return;
        };

        if (!this.verificar_quantidadeEstoque(produto.quantidadeEstoque)) {
            console.log("Quantidade Estoque inválida.");

            return;
        };


        if (this.cabeca == null) {
            this.cabeca = produto;
            this.cauda = produto;
        } else {
            this.cauda.proximoNo = produto;
            produto.anteriorNo = this.cauda;
            this.cauda = produto;
        }
        
        console.log(`Adicionado Nome: ${produto.nome} - Código de Barras: ${produto.codigoDeBarras} - Preço: ${produto.preco} - Quantidade em Estoque: ${produto.quantidadeEstoque}`);
    }

    remover_item(codigoDeBarras) {
        if (!this.verificar_existencia_item(codigoDeBarras)) {
            console.log("Produto não encontrado na lista de produtos.");

            return;
        };

        let atual = this.cabeca;

        while (atual != null) {
            if (atual.codigoDeBarras === codigoDeBarras) {
                if (atual.anteriorNo != null) {
                    atual.anteriorNo.proximoNo = atual.proximoNo;
                } else {
                    this.cabeca = atual.proximoNo;
                }

                if (atual.proximoNo != null) {
                    atual.proximoNo.anteriorNo = atual.anteriorNo;
                } else {
                    this.cauda = atual.anteriorNo;
                }

                console.log(`Removido Produto: ${codigoDeBarras}`);
                
                return;
            }
            
            atual = atual.proximoNo;
        }
    }

    listar_itens() {
        console.log("Lista de produtos:");

        var aux = this.cabeca;

        while (aux != null) {
            console.log(`Nome: ${aux.nome} - Código de Barras: ${aux.codigoDeBarras} - Preço: ${aux.preco} - Quantidade em Estoque: ${aux.quantidadeEstoque}`);

            aux = aux.proximoNo;
        }
    }

    verificar_existencia_item(codigoDeBarras) {
        var aux = this.cabeca;

        while (aux != null) {
            if (aux.codigoDeBarras == codigoDeBarras) {
                return true;
            }

            aux = aux.proximoNo;
        }

        return false;
    }

    verificar_preco(preco) {
        return preco > 0;
    }

    verificar_quantidadeEstoque(quantidadeEstoque) {
        return quantidadeEstoque >= 0;
    }
}

class Produto {
    constructor(nome, codigoDeBarras, preco, quantidadeEstoque) {
        this.nome = nome;
        this.codigoDeBarras = codigoDeBarras;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
        this.anteriorNo = null;
        this.proximoNo = null;
    }
}

function main() {
    var lista = new ListaDeProdutos();

    //Adicionar itens
    var produto1 = new Produto("Papel", 1, 2, 3);
    lista.adicionar_item(produto1);

    var produto2 = new Produto("Plastico", 4, 5, 6);
    lista.adicionar_item(produto2);

    var produto3 = new Produto("Ferro", 7, 8, 9);
    lista.adicionar_item(produto3);

    //Listagem de item
    lista.listar_itens();

    //Remoção de item
    lista.remover_item(4);
    lista.listar_itens();

    lista.remover_item(1);
    lista.listar_itens();

    lista.remover_item(7);
    lista.listar_itens();

    //validação "Produto não encontrado na lista de produtos."
    lista.remover_item(4);

    //validação "Produto já cadastrado na lista de produtos."
    var produto4 = new Produto("Papel", 1, 2, 3);
    lista.adicionar_item(produto4);
    lista.adicionar_item(produto4);

    //validação "Preço inválido."    
    var produto5 = new Produto("Plastico", 4, -5, 6);
    lista.adicionar_item(produto5);

    //validação "Quantidade Estoque inválida."    
    var produto6 = new Produto("Plastico", 4, 5, -6);
    lista.adicionar_item(produto6);
}

main();