let nome: string = "João";
console.log(nome);
// nome = 28; tipo diferente

// numbers
let idade: number = 27;
console.log(idade);
idade = 27.5;
console.log(idade);

//boolean
let possuiHobbies: boolean = false;
console.log(possuiHobbies);

// tipos explicitos declarar sem inicializar(any)
// let minhaIdade
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade 27'
// console.log(typeof minhaIdade);

// Array
let hobbies: any[] = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ["av principal", 99, "teste"];
console.log(endereco);
endereco = ["Rua importante", 1234, "bloco c"];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 2,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Vermelho);

// tipo Any
let carro : any = "BMW"
console.log(carro);
carro = {marca: "BMW", ano: 2022}
console.log(carro);

