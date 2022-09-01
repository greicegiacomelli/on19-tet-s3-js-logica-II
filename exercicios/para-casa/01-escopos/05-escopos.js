/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 3; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

{
  let estudo = 3;
}

{
  let estudo = 6;
  estudo = 0;
}

{
  estudo = 3;
  {
    let estudo = "Olá!";
  }
}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global

  A resposta é igual a 3 pois a comparação necessaria com o valor de estudo 
  que dentro do escopo 21 ele foi reatribuido seu valor para 3.
*/
