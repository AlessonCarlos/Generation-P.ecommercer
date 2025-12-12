import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Ecommerce } from './src/model/Ecommerce';
import { Produtos } from './src/model/Produtos';
/*import { ContaController } from "./src/controller/ContaController";*/


export function main() {


   ///Instancia da classe contaController
   // let contas: ContaController = new ContaController();
    //Variáveis Auxiliares
    let opcao: number;
    let titular: string;
    


    // Objeto conta
    // Objeto da conta corrente
    /*const contacorrente: ContaCorrente = new ContaCorrente(2 , 123 , 1 , "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();
    // Objeto da conta poupança
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3 , 123 , 2 , "Victor", 1000, 10)
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();*/




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
    console.log('Opção selecionada: ', opcao);

    if (opcao == 6) {
        console.log(colors.fg.greenstrong,
            "\nPC EXPRESS - Sistema encerrado. Até logo!");
        console.log(colors.reset, "")
        process.exit(0);
    }

    // CONVERSÃO PARA SWITCH CASE
    switch (opcao) {
        case 1:
            console.log(colors.fg.whitestrong,
                "\n\nCADASTRAR NOVO PRODUTO:\n\n");
            
            console.log("Digite o nome do produto: ");
            let nomeProduto = readlinesync.question("");
            
            console.log("\nEscolha a categoria: ");
            console.log("1 - Processadores");
            console.log("2 - Placas de Vídeo");
            console.log("3 - Memórias RAM");
            console.log("4 - Armazenamento");
            console.log("5 - Placas-mãe");
            let categoria = readlinesync.questionInt("");
            
            console.log("\nDigite o preço do produto (R$): ");
            let preco = readlinesync.questionFloat("");
            
            console.log("Digite a quantidade em estoque: ");
            let quantidadeEstoque = readlinesync.questionInt("");
            
            console.log("Digite a marca do produto: ");
            let marca = readlinesync.question("");
            
            console.log("Digite uma descrição: ");
            let descricao = readlinesync.question("");
            
            
            
            console.log(colors.fg.green, "\n✅ Produto cadastrado com sucesso!");
            KeyPress();
            break;
            
            //listar produtos
        case 2:
            console.log(colors.fg.whitestrong, "\n\nLISTA DE TODOS OS PRODUTOS:\n\n");
            
            
            
            console.log("📋 Total de produtos: 0");
            KeyPress();
            break;

            //buscar por id
        case 3:
            console.log(colors.fg.whitestrong, "\n\nBUSCAR PRODUTO POR ID:\n\n");
            console.log("Digite o ID do produto: ");
            let idBusca = readlinesync.questionInt("");
            
            
            
            KeyPress();
            break;

            //update
        case 4:
            console.log(colors.fg.whitestrong, "\n\nATUALIZAR PRODUTO:\n\n");
            console.log("Digite o ID do produto que deseja atualizar: ");
            let idAtualizar = readlinesync.questionInt("");
            
           
            
            console.log("\nDigite o novo nome (ou Enter para manter): ");
            let novoNome = readlinesync.question("");
            
            console.log("Digite o novo preço (ou 0 para manter): ");
            let novoPreco = readlinesync.questionFloat("");
            
            console.log("Digite a nova quantidade (ou -1 para manter): ");
            let novaQuantidade = readlinesync.questionInt("");
            
            
            
            console.log(colors.fg.green, "\n✅ Produto atualizado com sucesso!");
            KeyPress();
            break;

            // Deletar Produto
        case 5:
            console.log(colors.fg.whitestrong, "\n\nDELETAR PRODUTO:\n\n");
            console.log("Digite o ID do produto que deseja deletar: ");
            let idDeletar = readlinesync.questionInt("");
            
            console.log("\nTem certeza que deseja excluir este produto? (S/N)");
            let confirmacao = readlinesync.question("").toUpperCase();
            
            if (confirmacao === 'S') {
                
                console.log(colors.fg.green, "\n✅ Produto deletado com sucesso!");
            } else {
                console.log(colors.fg.yellow, "\nOperação cancelada.");
            }
            
            KeyPress();
            break;
            
        default:
            console.log(colors.fg.red, "\nOpção inválida! Escolha uma opção de 1 a 6.");
            KeyPress();
            break;
    }
}
}



export function sobre(): void {
    console.log("*****************************************************");
    console.log("Projeto Desenvolvido por:Alesson Carlos do Nascimento Melo ");
    console.log("Generation Brasil - alessonm@genstudents.org");
    console.log("https://github.com/AlessonCarlos/Generation_ContaBancaria");
    console.log("*****************************************************");
}

function KeyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt();
}

main();