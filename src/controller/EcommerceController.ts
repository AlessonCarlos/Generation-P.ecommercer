import { Ecommerce } from "../model/Ecommerce";
import { EcommerceRepository } from "../repository/EcommerceRepository"
import { colors } from "../util/Colors";
export class EcommerceController implements EcommerceRepository{
   
    private listaProdutos: Array<Ecommerce> = [];
    id: number = 0;

    //Gerar id do produto
    private gerarId(): number {
        return ++this.id;
    }

    // MÉTODO INTERNO para buscar um produto na lista e verificar se ele existe
    private listarInterno(id: number): Ecommerce | null {
        for (let i = 0; i < this.listaProdutos.length; i++) {
            const item = this.listaProdutos[i]!; 

            if (item.id === id) {
                return item;
            }
        }
        return null;
    }

    // listar todos
    listarTodos(): void {
        
        if (this.listaProdutos.length === 0) {
            console.log("\nNenhum produto encontrado!");
            return;
        }

        for (const produto of this.listaProdutos) {
            produto.visualizar(); 
        }
    }

    // buscar por id
    buscarPorId(id: number): void {
        const produto = this.listarInterno(id);

        if (!produto) {
            console.log("\nProduto não encontrado!");
            return;
        }

        produto.visualizar();
    }

    //Cadastrar Produto
    cadastrar(produto: Ecommerce): void {
        produto.id = this.gerarId(); 
       this.listaProdutos.push(produto);
       console.log(colors.fg.green, "\nProduto cadastrado com sucesso!", colors.reset)
    }
    //Atualizar Produto
    atualizar(produto: Ecommerce): void {
        
        let buscarPorId = this.listarInterno(produto.id);

        if (buscarPorId != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscarPorId)] = produto

            console.log(colors.fg.green, "\nO produto foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO produto não existe!", colors.reset)
    }
    // Deletar o produto
    deletar(id: number): void {
        let buscarPorId = this.listarInterno(id);

        if(buscarPorId != null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarPorId), 1);


            console.log(colors.fg.green, "\nO produto foi apagado com sucesso!", colors.reset);

        } else 
            console.log(colors.fg.red, "\nO produto não foi ecnontrada!", colors.reset);
    }
 

   
    
    

   

   


}