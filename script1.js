

function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo = 'Programador',
        status = 1,
        codigo = '12345'
    };

    return novosDados;
}

console.log(cadastroPessoa({nome: 'Matheus' , sobrenome: 'Silva' , anoInicio: 2045 }));
