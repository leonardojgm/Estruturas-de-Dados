class FilaDePedidos {
    constructor() {
        this.pedidos = [];
    }

    adicionar_pedido(pedido) {
        this.pedidos.push(pedido);

        console.log(`Pedido Nome Prato: ${pedido.nomePrato} - Mesa: ${pedido.mesa} entrou na fila.`);
    }

    remover_pedido() {
        if (this.pedidos.length == 0) {
            console.log(`Nenhum pedido na fila para remover.`);

            return;
        }
        
        console.log(`Pedido Nome Prato: ${this.pedidos[0].nomePrato} - Mesa: ${this.pedidos[0].mesa} entregue.`);

        this.pedidos.shift();
    }

    mostrar_pedidos() {
        if (this.pedidos.length == 0) {
            console.log(`Nenhum pedido na fila para mostrar.`);

            return;
        }

        console.log("Fila de Pedidos:");

        this.pedidos.forEach(pedido => {
            console.log(`Nome Prato: ${pedido.nomePrato} - Mesa: ${pedido.mesa}`);
        });
    }
}

class Pedido {
    constructor(nomePrato, mesa) {
        this.nomePrato = nomePrato;
        this.mesa = mesa;
    }
}

function main() {
    var fila = new FilaDePedidos();

    //Remoção de item
    fila.remover_pedido();
    fila.mostrar_pedidos();

    //Adicionar itens
    var pedido1 = new Pedido("X-Burguer", 1);
    fila.adicionar_pedido(pedido1);

    var pedido2 = new Pedido("X-Salada", 2);
    fila.adicionar_pedido(pedido2);

    var pedido3 = new Pedido("X-Bacon", 3);
    fila.adicionar_pedido(pedido3);

    //Listagem de item
    fila.mostrar_pedidos();

    //Remoção de item
    fila.remover_pedido();
    fila.mostrar_pedidos();

    //Adicionar itens
    fila.adicionar_pedido(pedido2);
    fila.adicionar_pedido(pedido1);
    fila.remover_pedido();
    fila.mostrar_pedidos();
}

main();