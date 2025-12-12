/*import { Ecommerce } from "../model/Ecommerce";
import{contaRepository} from "../repository/ContaRepository"
import { colors } from "../util/Colors";
export class ContaController implements contaRepository{
   
    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    // método para listrar todas as contas
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

   
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null){
            buscaConta.visualizar();
        }else
            console.log(colors.fg.red,"\A Conta numero: " + numero + " não foi encontrada!", colors.reset)
    }

    cadastrar(conta: Conta): void {
       this.listaContas.push(conta);
       console.log(colors.fg.green, "\nA conta número: " + conta.numero + " foi criada com sucesso!", colors.reset)
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA conta numero: " + conta.numero + " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA conta numero: " + conta.numero + " não foi encontrada!", colors.reset)
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA Conta numero: " + numero + " foi apagada com sucesso!", colors.reset);

        } else 
            console.log(colors.fg.red, "\nA conta numero: " + numero + " não foi ecnontrada!", colors.reset);
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)
        if (conta != null){
            if(conta.sacar(valor)==true)
                console.log(colors.fg.green,"\nO saque na conta numero: " + numero + " foi efetuado com sucesso", colors.reset);
        }else
            console.log(colors.fg.red,"\nA conta numero: " + numero + " nao fi encontrada!", colors.reset)
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta != null){
            conta.depositar(valor);
            console.log(colors.fg.green,"\nO Deposito na conta numero: " + numero + " foi efetuado com sucesso", colors.reset);
        } else
            console.log(colors.fg.red,"\nA conta numero: " + numero + " nao fi encontrada!", colors.reset)
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem !=null && contaDestino !=null){
            if(contaOrigem.sacar(valor)==true){
                contaDestino.depositar(valor);
                console.log(colors.fg.green,"\nA Trasferencia na conta numero: " + numeroOrigem +" para a Conta numero: " + numeroDestino + " foi efetuado com sucesso", colors.reset);

            }
        } else
            console.log(colors.fg.red,"\nA conta numero: " + numeroOrigem +" e/ou a Conta numero " + numeroDestino + " nao fi encontrada!", colors.reset)
    }

    //Método Auxiliar
    //Gerar Número de conta
    public gerarNumero(): number {
        return ++ this.numero
    }

    //Verificar se a cota existe
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas){
            return conta;
        }

        return null;
    }

   


}*/