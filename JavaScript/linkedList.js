class ListaDePacientes {
    constructor() {
        this.cabeca = null;
    }

    adicionar_item(paciente) {
        if (this.verificar_existencia_item(paciente.numeroIdentificacao)) {
            console.log("Paciente já cadastrado na lista de pacientes.");

            return;
        };

        if (!this.verificar_estadoSaudeAtual(paciente.estadoSaudeAtual)) {
            console.log("Estado Saúde Atual inválido.");

            return;
        };

        if (this.cabeca == null) {
            this.cabeca = paciente;
        } else {
            var aux = this.cabeca;

            while (aux.proximoNo != null) {
                aux = aux.proximoNo;
            }

            aux.proximoNo = paciente;
        }
        
        console.log(`Adicionado Nome: ${paciente.nome} - Numero de Identificação: ${paciente.numeroIdentificacao} - Estado de Saúde Atual: ${paciente.estadoSaudeAtual}`);
    }

    remover_item(numeroIdentificacao) {
        if (!this.verificar_existencia_item(numeroIdentificacao)) {
            console.log("Paciente não encontrado na lista de pacientes.");

            return;
        };

        let atual = this.cabeca;
        let anterior = null;

        while (atual != null) {
            if (atual.numeroIdentificacao === numeroIdentificacao) {
                if (anterior == null) {
                    this.cabeca = atual.proximoNo;
                } else {
                    anterior.proximoNo = atual.proximoNo;
                }

                console.log(`Removido Paciente: ${numeroIdentificacao}`);
                
                return;
            }

            anterior = atual;
            atual = atual.proximoNo;
        }
    }

    listar_itens() {
        console.log("Lista de Pacientes:");

        var aux = this.cabeca;

        while (aux != null) {
            console.log(`Nome: ${aux.nome} - Numero de Identificação: ${aux.numeroIdentificacao} - Estado de Saúde Atual: ${aux.estadoSaudeAtual}`);
            
            aux = aux.proximoNo;
        }
    }

    verificar_existencia_item(numeroIdentificacao) {
        var aux = this.cabeca;

        while (aux != null) {
            if (aux.numeroIdentificacao == numeroIdentificacao) {
                return true;
            }

            aux = aux.proximoNo;
        }

        return false;
    }

    verificar_estadoSaudeAtual(estadoSaudeAtual) {
        return estadoSaudeAtual == "estável" || estadoSaudeAtual == "em tratamento intensivo" || estadoSaudeAtual == "em estado crítico";
    }
}

class Paciente {
    constructor(nome, numeroIdentificacao, estadoSaudeAtual) {
        this.nome = nome;
        this.numeroIdentificacao = numeroIdentificacao;
        this.estadoSaudeAtual = estadoSaudeAtual;
        this.proximoNo = null;
    }
}

function main() {
    var lista = new ListaDePacientes();

    //Adicionar itens
    var paciente1 = new Paciente("João", 1, "estável");
    lista.adicionar_item(paciente1);

    var paciente2 = new Paciente("Maria", 2, "em tratamento intensivo");
    lista.adicionar_item(paciente2);

    var paciente3 = new Paciente("Joana", 3, "em estado crítico");
    lista.adicionar_item(paciente3);

    //Listagem de item
    lista.listar_itens();

    //Remoção de item
    lista.remover_item(3);
    lista.listar_itens();

    lista.remover_item(1);
    lista.listar_itens();

    lista.remover_item(2);
    lista.listar_itens();

    //validação "Paciente não encontrado na lista de pacientes."
    lista.remover_item(4);

    //validação "Paciente já cadastrado na lista de pacientes."
    var paciente1 = new Paciente("João", 1, "estável");
    lista.adicionar_item(paciente1);
    lista.adicionar_item(paciente1);

    //validação "Estado Saúde Atual inválido."    
    var paciente4 = new Paciente("Maria", 2, "louco");
    lista.adicionar_item(paciente4);
}

main();