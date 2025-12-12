import {Conta} from "../model/Ecommerce";

export interface contaRepository {

    //Criação do crud da conta
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    //Metodos da conta Bancária
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number)
:void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}