const prompt = require('prompt-sync')();

let usuarios = [];

const menu = () => {
    console.log(`
                            Menu
    
            1 - Cadastro de usuário
            2 - Listagem de usuários
            3 - Atualização de usuário
            4 - Remoção de usuário
            5 - Sair
        `);
}

const cadastroUsuario = () => {
    let nome = prompt("Digite seu nome completo:").trim();
    let email = prompt("Digite seu email:").trim();
    let telefone = prompt("Digite seu telefone de contato:").trim();

    // Verificar se o email já está cadastrado
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            console.log("O email inserido já foi cadastrado, por favor digite um email válido.");
            return;
        }
    }
    
    // Adicionar o novo usuário ao array
    usuarios.push({ nome, email, telefone });
    console.log("Usuário cadastrado com sucesso!");
}

const listagemUsuarios = () => {
    if (usuarios.length < 1){
        console.log("Não há usuários cadastrados no sistema.");
    } else {
    console.log("Lista de Usuários Cadastrados:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Email: ${usuario.email}, Telefone: ${usuario.telefone}`);
    
    });
}
}

const atualizacaoUsuario = () => {
    let email = prompt("Por favor, informe o email do usuário a ser atualizado:").trim();
    
    let usuario = usuarios.find(usuario => usuario.email === email);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }

    usuario.nome = prompt(`Digite o novo nome completo (atual: ${usuario.nome}):`).trim() || usuario.nome;
    usuario.telefone = prompt(`Digite o novo telefone de contato (atual: ${usuario.telefone}):`).trim() || usuario.telefone;
    
    console.log("Usuário atualizado com sucesso!");
}

const remocaoUsuario = () => {
    let email = prompt("Por favor, informe o email do usuário a ser removido:").trim();

    // Encontrar o índice do usuário no array
    let index = usuarios.findIndex(usuario => usuario.email === email);
    
    if (index === -1) {
        console.log("Usuário não encontrado.");
        return;
    }
    
    // Remover o usuário do array
    usuarios.splice(index, 1);
    
    // Confirmar a remoção
    console.log("Usuário removido com sucesso!");
}

const sair = () => {
    console.log("Encerrando...");
    process.exit();
}

const main = () => {
    let opcao;
    do {
        menu();
        opcao = prompt("Seja bem-vinda(o) ao idmoraizx, por favor selecione a opção desejada: ").trim();

        switch (opcao) {
            case '1':
                cadastroUsuario();
                break;
            case '2':
                listagemUsuarios();
                break;
            case '3':
                atualizacaoUsuario();
                break;
            case '4':
                remocaoUsuario();
                break;
            case '5':
                sair();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '5');
}

main();
