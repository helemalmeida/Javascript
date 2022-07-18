//============================VARIAVEIS====================================

// let idade = 27;
// let nomeCompleto = "Helem Almeida";
// let altura = 1.51;
// console.log(idade, nomeCompleto, altura);

//============================CONSTANTES====================================

// let valorIngressoAdulto = 20;
// valorIngressoAdulto = 45;
// console.log(valorIngressoAdulto);

//usar o const em valores fixos, se precisar alterar valores usar o let

// const valorIngressoAdulto = 20;
// console.log(valorIngressoAdulto);

//============================TIPOS PRIMITIVOS====================================

// let nome = 'Helem'; //string literal
// let idade = 23.7; //number literal
// let estaAprovado = true; //boolean
// let sobrenome = undefined; //undefined
// let corSelecionado = null; //redefinir um valor 

//============================OBJETOS====================================

// let nome = 'Helem';
// let sobrenome = undefined; 
// let idade = 27; 
// let estaAprovado = true; 
// let altura = 1.51;
// let statusRelacionamento = 'Namorando';
// let genero = 'F';

// // let pessoa = { } ; //objeto vazio

// let pessoa = {
//     nome: 'Helem',
//     sobrenome: 'Almeida',
//     idade: 27,
//     estaAprovado: true,
//     altura: 1.51,
//     statusRelacionamento: 'Namorando',
//     genero: 'F'
// };

// console.log(pessoa);

//============================ARRAY====================================

// let familiaIdade = [18,22,25,26,44,63];
// console.log(familiaIdade[3]);

// let baby = [26, 'Thaís Brunelli','Itabira','Jornalista'];
// console.log(baby[1]);

//============================FUNCTION====================================

//nomear função - PADRÃO: verbo+substantivo 

// let corSite = "azul";

// function resetaCor () { //sem parametro
//     corSite=""; 
// };

// console.log(corSite);

// resetaCor();

// console.log(corSite);


// function resetaCor (cor,tonalidade) { //com parametro
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);

// resetaCor("rosa","claro");

// console.log(corSite);


// function resetaCor (cor,tonalidade) {
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);

// resetaCor("verde","claro");

// console.log(corSite);

//============================ TIPOS DE FUNÇÕES ====================================
//1 tipos

//realiza uma tarefa e não retorna nada

// function dizerNome () {
//     console.log('Helem');
// }
// dizerNome();

// //faz um calculo/operação e retorna 

// function multiplicarValor (valor) {
//     return valor * 2;
// }

// let resultado = multiplicarValor (7);
// console.log(resultado);

//============================ OPERADORES ====================================


 //=================aritmeticos=================//
// let salario = 3000;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(3 ** 3);

// let idade = 27;
// console.log (idade++);
// console.log(idade);
// console.log(++idade); //se quiser incrementar antes
// console.log(--idade);


 //=================atribuição=================//


// let valorVideogame = 4700;
// // valorVideogame = valorVideogame + valorVideogame;
// valorVideogame += valorVideogame;
// console.log(valorVideogame);

 //=================igualdade=================//

// //igualdade estrita
// console.log(1 === 1); //3= compara valor e TIPO 
// console.log('1' === 1);

// //igualdade solta
// console.log(1 == 1);
// console.log('1' == 1); //não vale a pena


 //=================ternario=================//

 //para não usar muitos if--
 //100 pts: premium, inferior comum

//  let pontos = 200;
//  let tipo = pontos > 100 ? 'premium' : 'comum';
//  console.log(tipo);

 //=================logicos=================//

 //e (&&)
//retorna true se os dois operandos forem true
// console.log(false && true);

// let maiorIdade = true;
// let possuiCarteiraTrabalho = true;
// let podeAplicar = maiorIdade && possuiCarteiraTrabalho;

// console.log(podeAplicar);

//ou (||)
//retorna true se um dos operandos for true

// let maiorIdade = true;
// let possuiCarteiraTrabalho = false;
// let podeAplicar = maiorIdade || possuiCarteiraTrabalho;

// console.log('Pode aplicar:', podeAplicar);

// //not (!)

// let candidatoRecusado = ! podeAplicar; 
// console.log('Candidato Recusado:', candidatoRecusado);


 //=================comparação não booleano=================//

//falsy são todos os valores undefined/null/0/false/''/NaN - not a number 

//truthy 

// let corPersonalizada = '';
// let corPadrao = 'Azul'; //para retornar o azul um dos primeiros valores precisa ser falsy
// let corPerfil = corPersonalizada || corPadrao;
// console.log(corPerfil);



//============================ IF ELSE ====================================

