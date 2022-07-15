"use strict";
let nome = "João";
console.log(nome);
// nome = 28; tipo diferente
// numbers
let idade = 27;
console.log(idade);
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos declarar sem inicializar(any)
// let minhaIdade
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade 27'
// console.log(typeof minhaIdade);
// Array
let hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
let endereco = ["av principal", 99, "teste"];
console.log(endereco);
endereco = ["Rua importante", 1234, "bloco c"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Vermelho);
// tipo Any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2022 };
console.log(carro);
