// Esta é minha resposta para o Desafio 2

// Aqui defino os trabalhos posiveis
enum Trabalho {
    Fotografa,
    Consultor,
    Medico,
    Advogado
}

// aqui eu crio o tipo de dados para humanos
type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

// seguem exemplos de humanos usando o tipo de dados criado anteriormente 

let pessoa1: Humano = {
    nome: 'Michelle',
    idade: 43,
    profissao: Trabalho.Fotografa
};

let pessoa2: Humano = {
    nome: 'Mario',
    idade: 72,
    profissao: Trabalho.Medico
};

let pessoa3: Humano = {
    nome: 'Javo',
    idade: 42,
    profissao: Trabalho.Consultor
};

let pessoa4: Humano = {
    nome: "Pipa",
    idade: 33,
    profissao: Trabalho.Advogado
}