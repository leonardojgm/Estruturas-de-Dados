class ListaDeCompras {
    constructor() {
        this.itens = [];
        this.quantidades = [];
    }

    adicionar_item(item, quantidade) {
        if (this.verificar_existencia_item(item)) {
            console.log("Item já cadastrado na lista de compras.");

            return;
        };

        if (!this.verificar_quantidade(quantidade)) {
            console.log("Quantidade inválida.");

            return;
        };

        this.itens.push(item);
        this.quantidades.push(quantidade);
        
        console.log(`Adicionado Item: ${item} - Quantidade: ${item}`);
    }

    remover_item(item) {
        if (!this.verificar_existencia_item(item)) {
            console.log("Item não encontrado na lista de compras.");

            return;
        };

        var index = this.itens.indexOf(item);

        if (index !== -1) {
            this.itens.splice(index, 1);
            this.quantidades.splice(index, 1);
        }

        console.log(`Removido Item: ${item}`);
    }

    listar_itens() {
        console.log("Lista de Compras:");

        for (var i = 0; i < this.itens.length; i++) {
            console.log(`Item: ${this.itens[i]} - Quantidade: ${this.quantidades[i]}`);
        }
    }

    verificar_existencia_item(item) {
        return this.itens.includes(item);
    }

    verificar_quantidade(quantidade) {
        return quantidade > 0;
    }
}

function main() {
    var lista = new ListaDeCompras();

    //Adicionar itens
    lista.adicionar_item("Arroz", 2);
    lista.adicionar_item("Feijão", 3);
    lista.adicionar_item("Macarrão", 1);

    //Listagem de item
    lista.listar_itens();

    //Remoção de item
    lista.remover_item("Feijão");
    lista.listar_itens();

    //validação "Item não encontrado na lista de compras."
    lista.remover_item("Feijão");

    //validação "Item já cadastrado na lista de compras."
    lista.adicionar_item("Arroz", 3);

    //validação "Quantidade inválida."
    lista.adicionar_item("Bacon", -1);
    lista.adicionar_item("Tomate", "a");
}

main();