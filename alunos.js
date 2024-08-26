"use strict";

var alunos = [{
  nome: 'Paula',
  nota: 6
}, {
  nome: 'Marcos',
  nota: 7
}, {
  nome: 'Carlos',
  nota: 5
}, {
  nome: 'Gustavo',
  nota: 10
}, {
  nome: 'Sarah',
  nota: 8
}];

// Adicionando novos alunos: 
var adicionarAlunos = function adicionarAlunos(nome, nota) {
  alunos.push({
    nome: nome,
    nota: nota
  });
};
adicionarAlunos('Jenifer', 4);
adicionarAlunos('Bruna', 8);

// Alunos Aprovados:
var filtrarAlunos = function filtrarAlunos(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var aprovados = filtrarAlunos(alunos);
console.log(aprovados);