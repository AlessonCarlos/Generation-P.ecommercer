import {Ecommerce} from "../model/Ecommerce";

export interface EcommerceRepository {

    //Criação do crud do ecommercer
    buscarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Ecommerce): void;
    atualizar(produto: Ecommerce): void;
    deletar(id: number): void;
}