
//Exercício 1: Manipulação de Strings
//Crie um script que receba uma string e faça as seguintes operações:
//1. Converta a string para maiúsculas.
let texto1 = "MeuNome é (Jhon)";
let textoMaiusculo1 = texto1.toUpperCase();
console.log(textoMaiusculo1)
//2. Converta a string para minúsculas.
let texto2 = "MeuNome é (Jhon)";
let textoMaiusculo2 = texto2.toLocaleLowerCase();
console.log(textoMaiusculo2)
//3. Inverta a string.
let textoinvertido1 = ("OlaMundo")
let textoinvertido2 = textoinvertido1.split('').reverse().join('');
console.log(textoinvertido2)
//4. Substitua todas as ocorrências de uma letra específica por outra.
let texto3 = "Escola, Papel, Cartel, Hotel";
let letraAntiga = "e";
let letraNova = "a";

let textoModificado = texto3.replace(new RegExp(letraAntiga, 'g'), letraNova);
console.log(textoModificado);

//Exercício 2: Operadores Aritméticos e de Comparação
//Crie um script que receba dois números e faça as seguintes operações:
// Função para realizar as operações solicitadas
function realizarOperacoes() {
    let numero1 = 15;
    let numero2 = 5;
//1. Some os dois números.
    let soma = numero1 + numero2;
    console.log("Soma: " + soma);
//2. Subtraia o segundo número do primeiro.
    let subtracao = numero1 - numero2;
    console.log("Subtração: " + subtracao);
//3. Multiplique os dois números.
    let multiplicacao = numero1 * numero2;
    console.log("Multiplicação: " + multiplicacao);
//4. Divida o primeiro número pelo segundo.
    let divisao = numero1 / numero2;
    console.log("Divisão: " + divisao);
//5. Verifique se o primeiro número é maior que o segundo.
    let maiorQue = numero1 > numero2;
    console.log("O primeiro número é maior que o segundo? " + maiorQue);
  }
  realizarOperacoes();  

//Exercício 3: Estruturas de Controle
//Crie um script que receba uma idade e verifique se a pessoa é:
let idade = 70;

if (idade < 18) {
    //1. Menor de idade.
    console.log("Menor de idade");
} else if (idade >= 18 && idade < 65) {
    //2. Maior de idade.
    console.log("Maior de idade");
    //3. Idosa (idade >= 65).
} else if (idade >= 65) {
    console.log("Idosa");
}

//Exercício 4: Laços de Repetição
//Crie um script que imprima os números de 1 a 100 usando:
//1. Um laço for .
for (let num = 1; num <= 100; num++) {
    console.log(num);
}

//Exercício 5: Funções
//Crie um script que tenha uma função que receba um número e retorne:
function calcular(num) {
    //1. O dobro do número.
    let dobro = num * 2;
    //2. O triplo do número.
    let triplo = num * 3;
    //3. O quadrado do número.
    let quadrado = num * num;
    
    console.log("Dobro:", dobro);
    console.log("Triplo:", triplo);
    console.log("Quadrado:", quadrado);
}
calcular(5);

//Exercício 6: Arrays
//Crie um script que receba um array de números e faça as seguintes operações:
let nums = [10, 20, 30, 40, 50];

//1. Adicione um número ao final do array.
nums.push(60);
console.log("Array novo:", nums);

//2. Remova o primeiro número do array.
nums = [10, 20, 30, 40, 50];
nums.shift();
console.log("Sem o primeiro:", nums);

//3. Encontre o maior número do array.
nums = [10, 20, 30, 40, 50];
let maior = nums[0];
for (let i = 0; i < 5; i++) {
    if (nums[i] > maior) maior = nums[i];
}
console.log("Maior:", maior);

//4. Encontre o menor número do array.
nums = [10, 20, 30, 40, 50];
let menor = nums[0];
for (let i = 0; i < 5; i++) {
    if (nums[i] < menor) menor = nums[i];
}
console.log("Menor:", menor);

//Exercício 7: Métodos de Arrays
//Crie um script que receba um array de strings e faça as seguintes operações:
let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

//1. Converta todas as strings para maiúsculas.
let maiusculas = frutas.map(x => x.toUpperCase());
console.log("Maiúsculas:", maiusculas);

//2. Filtre as strings que começam com a letra 'A'.
let comA = frutas.filter(x => x[0] == "A");
console.log("Com A:", comA);

//3. Crie um novo array com o comprimento de cada string.
let tamanhos = frutas.map(x => x.length);
console.log("Tamanhos:", tamanhos);

//Exercício 8: Objetos
//Crie um script que receba um objeto representando uma pessoa e faça as seguintes
//operações:
let pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };

//1. Adicione uma nova propriedade ao objeto.
pessoa.job = "Vendedor";
console.log("Com novo dado:", pessoa);

//2. Remova uma propriedade do objeto.
delete pessoa.idade;
console.log("Sem idade:", pessoa);

//3. Liste todas as propriedades do objeto.
pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };
let props = Object.keys(pessoa);
console.log("Propriedades:", props);

//Exercício 9: Desestruturação de Objetos
//Crie um script que receba um objeto representando um livro e faça as seguintes
//operações:
let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };

//1. Desestruture o título e o autor do objeto.
let { titulo, autor } = livro;
console.log("Título:", titulo);
console.log("Autor:", autor);

//2. Crie uma função que receba o objeto e retorne uma string com o título e o
//autor.
function livroTexto(obj) {
    let { titulo, autor } = obj;
    return titulo + " - " + autor;
}
console.log(livroTexto(livro));

//Exercício 10: Módulos
//Crie dois scripts, um para exportar funções e outro para importá-las e utilizá-las:
//1. No primeiro script, exporte uma função que calcule a área de um círculo.
let areaCirculo = function(raio) {
    let area = 3.14 * raio * raio;
    return area;
};

//2. No segundo script, importe a função e calcule a área de um círculo com raio 5.
let raio = 5;
let resultado = areaCirculo(raio);
console.log("Área com raio 5:", resultado);