
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
//1. Menor de idade.
//2. Maior de idade.
//3. Idosa (idade >= 65).
//Utilize a idade 70 para os testes.

//Exercício 4: Laços de Repetição
//Crie um script que imprima os números de 1 a 100 usando:
//1. Um laço for .
//Exercício 5: Funções
//Crie um script que tenha uma função que receba um número e retorne:
//1. O dobro do número.
//2. O triplo do número.
//3. O quadrado do número.

//Utilize o número 5 para os testes.
//Exercício 6: Arrays
//Crie um script que receba um array de números e faça as seguintes operações:
//1. Adicione um número ao final do array.
//2. Remova o primeiro número do array.
//3. Encontre o maior número do array.
//4. Encontre o menor número do array.
//Utilize o array [10, 20, 30, 40, 50] para os testes.

//Exercício 7: Métodos de Arrays
//Crie um script que receba um array de strings e faça as seguintes operações:
//1. Converta todas as strings para maiúsculas.
//2. Filtre as strings que começam com a letra 'A'.
//3. Crie um novo array com o comprimento de cada string.
//Utilize o array ["Maçã", "Banana", "Abacaxi", "Laranja"] para os testes.

//Exercício 8: Objetos
//Crie um script que receba um objeto representando uma pessoa e faça as seguintes
//operações:
//1. Adicione uma nova propriedade ao objeto.
//2. Remova uma propriedade do objeto.
//3. Liste todas as propriedades do objeto.
//Utilize o objeto { nome: "Carlos", idade: 28, cidade: "São Paulo" } para os testes.

//Exercício 9: Desestruturação de Objetos
//Crie um script que receba um objeto representando um livro e faça as seguintes
//operações:
//1. Desestruture o título e o autor do objeto.
//2. Crie uma função que receba o objeto e retorne uma string com o título e o
//autor.
//Utilize o objeto { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 }
//para os testes.

//Exercício 10: Módulos
//Crie dois scripts, um para exportar funções e outro para importá-las e utilizá-las:
//1. No primeiro script, exporte uma função que calcule a área de um círculo.
//2. No segundo script, importe a função e calcule a área de um círculo com raio 5.