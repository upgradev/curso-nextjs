interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Ola, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log("Olá meu nome é: " + this.nome + " " + sobrenome);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "jonas", idade: 12, altura: 1.75 });
pessoa.saudar("Skywalker");

// usando classe
class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string): void {
    console.log("Olá meu nome é: " + this.nome + " " + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

// interface função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;
potencia = function (base: number, expoente: number): number {
  //   return Math.pow(base, expoente);
  return Array(expoente)
    .fill(base)
    .reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
