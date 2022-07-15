"use strict";
function saudarComOla(pessoa) {
    console.log("Ola, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá meu nome é: " + this.nome + " " + sobrenome);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "jonas", idade: 12, altura: 1.75 });
pessoa.saudar("Skywalker");
// usando classe
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá meu nome é: " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    //   return Math.pow(base, expoente);
    return Array(expoente)
        .fill(base)
        .reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
