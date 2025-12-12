import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Ecommerce } from './src/model/Ecommerce';
import { Produtos } from './src/model/Produtos';
import { EcommerceController } from './src/controller/EcommerceController';

export function main() {

    // Instância do controller
    let produtosController: EcommerceController = new EcommerceController();

    let opcao: number;

    while (true) {

                console.log(colors.bg.black, colors.fg.yellow,
        "*************************************************");
        console.log("*                                                   *");
        console.log("*                    PC EXPRESS                     *");
        console.log("*           Loja de Peças de Computador             *");
        console.log("*                                                   *");
        console.log("*****************************************************");
        console.log("*                                                   *");
        console.log("*             1 - Cadastrar Produto                 *");
        console.log("*             2 - Listar Todos os Produtos          *");
        console.log("*             3 - Buscar Produto por ID             *");
        console.log("*             4 - Atualizar Produto                 *");
        console.log("*             5 - Deletar Produto                   *");
        console.log("*             6 - Sair do Sistema                   *");
        console.log("*                                                   *");
        console.log("*****************************************************",
        colors.reset);


        console.log("Escolha uma opção: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.greenstrong,
                "\nPC EXPRESS - Sistema encerrado. Até logo!");
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {

            // ➤ CADASTRAR
            // CADASTRAR
            case 1: {
                console.log(colors.fg.whitestrong, "\n\nCADASTRAR NOVO PRODUTO:\n");

                let nome = readlinesync.question("Nome do produto: ");

                console.log("\nEscolha a categoria: ");
                console.log("1 - Processadores");
                console.log("2 - Placas de Vídeo");
                console.log("3 - Memórias RAM");
                console.log("4 - Armazenamento");
                console.log("5 - Placas-mãe");
                let categoriaOp = readlinesync.questionInt("");
                let categoria = "";
                switch (categoriaOp) {
                    case 1: categoria = "Processadores"; break;
                    case 2: categoria = "Placas de Vídeo"; break;
                    case 3: categoria = "Memórias RAM"; break;
                    case 4: categoria = "Armazenamento"; break;
                    case 5: categoria = "Placas-mãe"; break;
                    default: categoria = "Outros"; break;
                }

                let preco = readlinesync.questionFloat("\nPreço (R$): ");
                let quantidade = readlinesync.questionInt("Quantidade em estoque: ");
                let marca = readlinesync.question("Marca: ");
                let descricao = readlinesync.question("Descrição / especificações: ");

                const novoProduto = new Produtos(
                    0,           // id será gerado no controller
                    nome,
                    categoria,
                    preco,
                    quantidade,
                    marca,
                    descricao     // especificações (campo extra da subclasse)
                );

                produtosController.cadastrar(novoProduto);
                console.log(colors.fg.green, "\n✅ Produto cadastrado com sucesso!", colors.reset);
                KeyPress();
                break;
            }

            // ➤ LISTAR TODOS
            case 2:
                console.log(colors.fg.whitestrong, "\n\nLISTA DE TODOS OS PRODUTOS:\n");
                produtosController.listarTodos();
                KeyPress();
                break;


            // ➤ BUSCAR POR ID
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBUSCAR PRODUTO POR ID:\n");

                let idBusca = readlinesync.questionInt("Digite o ID: ");

                produtosController.buscarPorId(idBusca);

                KeyPress();
                break;


             // ATUALIZAR 
            case 4: {
                console.log(colors.fg.whitestrong, "\n\nATUALIZAR PRODUTO (SUBSTITUIR COMPLETO):\n");

                let idAtualizar = readlinesync.questionInt("Digite o ID do produto que deseja atualizar: ");

                // Pedir todos os campos novamente (replace completo)
                let novoNome = readlinesync.question("Novo nome: ");
                console.log("\nEscolha a categoria: ");
                console.log("1 - Processadores");
                console.log("2 - Placas de Vídeo");
                console.log("3 - Memórias RAM");
                console.log("4 - Armazenamento");
                console.log("5 - Placas-mãe");
                let categoriaOp2 = readlinesync.questionInt("");
                let novaCategoria = "";
                switch (categoriaOp2) {
                    case 1: novaCategoria = "Processadores"; break;
                    case 2: novaCategoria = "Placas de Vídeo"; break;
                    case 3: novaCategoria = "Memórias RAM"; break;
                    case 4: novaCategoria = "Armazenamento"; break;
                    case 5: novaCategoria = "Placas-mãe"; break;
                    default: novaCategoria = "Outros"; break;
                }

                let novoPreco = readlinesync.questionFloat("\nNovo preço (R$): ");
                let novaQuantidade = readlinesync.questionInt("Nova quantidade em estoque: ");
                let novaMarca = readlinesync.question("Nova marca: ");
                let novaDescricao = readlinesync.question("Nova descrição / especificações: ");

                // Criar instância da subclasse Produtos — NÃO instancie Ecommerce (é abstract)
                const produtoAtualizado = new Produtos(
                    idAtualizar,
                    novoNome,
                    novaCategoria,
                    novoPreco,
                    novaQuantidade,
                    novaMarca,
                    novaDescricao
                );

                produtosController.atualizar(produtoAtualizado);
                KeyPress();
                break;
            }



            // ➤ DELETAR
            case 5:
                console.log(colors.fg.whitestrong, "\n\nDELETAR PRODUTO:\n");

                let idDeletar = readlinesync.questionInt("Digite o ID: ");

                let confirm = readlinesync.question("Deseja realmente excluir? (S/N): ").toUpperCase();

                if (confirm === "S") {
                    produtosController.deletar(idDeletar);
                } else {
                    console.log("\nOperação cancelada.");
                }

                KeyPress();
                break;


            default:
                console.log(colors.fg.red, "\nOpção inválida!");
                KeyPress();
                break;
        }
    }
}

function KeyPress(): void {
    console.log(colors.reset);
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

main();
