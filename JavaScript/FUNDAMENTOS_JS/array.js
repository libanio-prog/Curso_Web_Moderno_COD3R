//Em js o array é heterogenio ou seja você pode na mesma array colocar um numero seguido de uma string e ele não tem tamanho fixos. porém não é uma boa pratica

const valores = [7.7 , 8.9, 6.3, 9.2 ]// virgula é o separador dos elementos
console.log(valores[0], valores [3])
console.log(valores[4])// ele vai mostrar que o valor é indefinido 
valores[4]=10 // nesse caso estou adicionando um item ao array
valores [10]=54// neses outo caso vou adicionar um item a posição 10 e mais 6 itens vazios 
console.log (valores)
console.log (valores.length)// "length vai nos mostrar quantos elementos temos em um array

valores.push({id:3}, false, null, 'teste')// vai adicionar elementos no array
console.log(valores)

console.log (valores.pop()) //vai retirar o ultimno valor do Array
delete valores [0]// vai retirar o item do array que está sendo referenciado no colchete

console.log(typeof valores) //em JS o Array é um objeto

