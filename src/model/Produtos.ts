import { Ecommerce } from "./Ecommerce";

export class Produtos extends Ecommerce {
    private _especificacoes: string;

    constructor(
        id: number,
        nome: string,
        categoria: string,
        preco: number,
        quantidade: number,
        marca: string,
        especificacoes: string
    ) {
        super(id, nome, categoria, preco, quantidade, marca);
        this._especificacoes = especificacoes;
    }

    public get especificacoes(): string {
        return this._especificacoes;
    }

    public set especificacoes(value: string) {
        this._especificacoes = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Especificações: ${this._especificacoes}`);
        console.log("════════════════════════════════════════════════════");
    }
}
