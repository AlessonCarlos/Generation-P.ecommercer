export abstract class Ecommerce {

    // Atributos
    private _id: number;
    private _nome: string;
    private _categoria: string;
    private _preco: number;
    private _quantidade: number;
    private _marca: string;

    // Construtor
    constructor( id: number, nome: string, categoria: string, preco: number, quantidade: number, marca: string) {
        this._id = id;
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco
        this._quantidade = quantidade;
        this._marca = marca;
    }

    // Getters e Setters
    // GETTERS
    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get categoria(): string {
        return this._categoria;
    }

    public get preco(): number {
        return this._preco;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get marca(): string {
        return this._marca;
    }

    // SETTERS
    public set id(id: number) {
        this._id = id;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public set marca(marca: string) {
        this._marca = marca;
    }

    // MÉTODO ÚNICO NECESSÁRIO: visualizar (para mostrar informações)
    public visualizar(): void {
        console.log("\n════════════════════════════════════════════════════");
        console.log("                DETALHES DO PRODUTO");
        console.log("════════════════════════════════════════════════════");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Categoria: ${this._categoria}`);
        console.log(`Marca: ${this._marca}`);
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
        console.log(`Quantidade: ${this._quantidade} unidades`);
        console.log("════════════════════════════════════════════════════");
    }

}

    

