const alunos= [
    {nome: 'Paula', nota: 6},
    {nome: 'Marcos', nota: 7},
    {nome: 'Carlos', nota: 5},
    {nome: 'Gustavo', nota: 10},
    {nome: 'Sarah', nota: 8},           
]

// Adicionando novos alunos: 
const adicionarAlunos = (nome, nota) => {alunos.push({nome, nota});};

adicionarAlunos('Jenifer', 4);
adicionarAlunos('Bruna', 8);

// Alunos Aprovados:
const filtrarAlunos = (alunos) => alunos.filter(aluno => aluno.nota >=6);

const aprovados = filtrarAlunos(alunos);

console.log(aprovados);
