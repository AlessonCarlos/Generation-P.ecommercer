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
            "***************************************************");
        console.log("                                                     ");
        console.log("                   PC EXPRESS                         ");
        console.log("           Loja de Peças de Computador               ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair do Sistema                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset
        );

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
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCADASTRAR NOVO PRODUTO:\n");

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
                    default:
                        console.log(colors.fg.red, "\nCategoria inválida!");
                        KeyPress();
                        break;
                }

                let preco = readlinesync.questionFloat("\nPreço (R$): ");
                let quantidade = readlinesync.questionInt("Quantidade em estoque: ");
                let marca = readlinesync.question("Marca: ");

                // cria o produto
                const novoProduto = new Produtos(
                        0,
                        nome,
                        categoria,
                        preco,
                        quantidade,
                        marca,
                        descricao   // ← vem do seu menu
                    );


                produtosController.cadastrar(novoProduto);

                KeyPress();
                break;


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


            // ➤ ATUALIZAR
            case 4:
                console.log(colors.fg.whitestrong, "\n\nATUALIZAR PRODUTO:\n");

                let idAtualizar = readlinesync.questionInt("Digite o ID: ");

                // verifica se existe
                let existente = produtosController["listarInterno"](idAtualizar);
                if (existente == null) {
                    console.log(colors.fg.red, "\nProduto não encontrado!");
                    KeyPress();
                    break;
                }

                console.log("\nDigite o novo nome (ou ENTER para manter): ");
                let novoNome = readlinesync.question("");

                console.log("Digite o novo preço (ou 0 para manter): ");
                let novoPreco = readlinesync.questionFloat("");

                console.log("Digite a nova quantidade (ou -1 para manter): ");
                let novaQuantidade = readlinesync.questionInt("");

                console.log("Digite a nova marca (ou ENTER para manter): ");
                let novaMarca = readlinesync.question("");

                // cria produto atualizado
                
                const produtoAtualizado = new Produtos(
                existente.id,
                novoNome !== "" ? novoNome : existente.nome,
                existente.categoria,
                novoPreco > 0 ? novoPreco : existente.preco,
                novaQuantidade >= 0 ? novaQuantidade : existente.quantidade,
                novaMarca !== "" ? novaMarca : existente.marca,
                existente.especificacoes   // ← mantém a antiga (ou você pode pedir nova)
            );


                produtosController.atualizar(produtoAtualizado);

                KeyPress();
                break;


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
