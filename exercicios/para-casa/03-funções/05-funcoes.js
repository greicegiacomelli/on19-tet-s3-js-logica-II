/*
  Crie uma função que chama ela mesma (recursiva) para somar N números
  o primeiro argumento é a quantidade de números M
  Ex: node .\05-funcoes.js 5
  1 + 2 + 3 + 4 + 5 = 15 (printar 15 no terminal)
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];

const funcaoRecursiva = (numero1) => { // É obrigatório usar essa função com os parâmetros
  let result = 0
  for(let contador= 0;contador <= numero1;contador++){
    result += contador
    console.log(contador)
  }
  
  console.log(result)

}

funcaoRecursiva(myArgs1);
