function pokemon(nome, tipo, fraqueza, vantagem){
    this.nome = nome;
    this.tipo = tipo;
    this.fraqueza = fraqueza;
    this.vantagem = vantagem;

   
}

const gengar = new pokemon('Gengar', 'Fantasma / Veneno', 'Psíquico / Fantasma / Sombrio', 'Lutador / Psíquico / Fantasma')
const bulbasauro = new pokemon('Bulbasauro', 'Grama / Veneno', 'Fogo / Gelo / Psiquico / Voador', 'Agua / Pedra / Terra / Grama / Fada')


function partyPoke(dados, nome,ataque1, ataque2, ataque3, ataque4, tipo){
    this.ataque1 = ataque1;
    this.ataque2 = ataque2;
    this.ataque3 = ataque3;
    this.ataque4 = ataque4;
    this.dados = dados;

    pokemon.call(this, nome, tipo);

    this.primeiroAtaque = function(){
        console.log(this.nome + " atacou com " + ataque1);
    }
}


const gengarJoao = new partyPoke(gengar,"Gengar", "Bite", "Curse", "Shadow Ball", "Tackle", "Fantasma / Veneno");
const bulbasauroJoao = new partyPoke(bulbasauro,"Bulbasauro", "Razor-Leaf", "Vine Whip", "Giga Absorb", "Solar Beam", "Grama / Veneno");

console.log(gengarJoao);
console.log(bulbasauroJoao);


gengarJoao.primeiroAtaque();
bulbasauroJoao.primeiroAtaque();