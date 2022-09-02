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

//Mostrar mensagem na tela bom dia/tarde/noite de acordo com a hora 


// var dataAtual = new Date();
// var dia = dataAtual.getDate();
// var mes = (dataAtual.getMonth() + 1);
// var ano = dataAtual.getFullYear();
// var horas = dataAtual.getHours();
// var minutos = dataAtual.getMinutes();
// console.log("Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + "h" + ":" + minutos);

// let hora = 4; 

// if (hora >= 6 && hora < 12) {
//     console.log("Bom dia, agora são " + hora + " horas.");
// }
// else if (hora >= 12 && hora < 18) {
//     console.log("Boa tarde, agora são " + hora + " horas.");
// }
// else if (hora >= 18 || hora < 00){
//     console.log("Boa noite, agora são " + hora + " horas.");
// }
// else {
//     console.log("Boa madrugada, agora são " + hora + " horas.")
// }


//============================ SWITH CASE ====================================

// let permissao; //comum, gerencial, diretoria 
// permissao = 'comum';

// switch (permissao) {
//     case 'comum':
//         console.log('Permissão comum');
//         break;

//     case 'gerencial':
//         console.log('Permissão gerencial');
//         break;
        
//     case 'diretoria':
//         console.log('Permissão diretoria');
//         break;
        
//     default: 
//         console.log('Usuario desconhecido');

// }

//============================ LOOP FOR ====================================


//     for(let i=1; i <= 5; i++) {
//     console.log('Teste',i);
// }

//ex: só impar 
//     for(let i=1; i <= 5; i++) {
//         if (i % 2 !== 0){
//             console.log('Impar',i);
//         }
//         else {
//             console.log('Par',i);
//         }
// }


//============================ LOOP WHILE ====================================

// let i=1;

// while (i <= 5) {
//     if (i % 2 !== 0){
//         console.log('Impar', i);
//     }
//     i++;
// }



//============================ LOOP DO WHILE ====================================

// let i = 0;
//     do {
//         console.log("Digitando...", i);
//         i++;
//     }  
//     while (i < 10 || i == 10);


//============================ LOOP FOR IN ====================================

// const pessoa = {
//     nome: 'Helem',
//     idade: 27
// };
// //key-value
// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }

// const cores = ['Red', 'Green', 'Blue'];

// for (let indice in cores) {
//     console.log(indice, cores[indice]);
// }


//============================ LOOP FOR OF ====================================

// const cores = ['Red', 'Green', 'Blue'];

// for(let cor of cores) {
//     console.log(cor);
// }


//============================ ALGUNS EVENTOS - BOTÕES ====================================

function clicar(){
    document.getElementById("mensagem").innerHTML = "Clique aqui para ser redirecionado!";
    // alert(document.getElementById("mensagem"));
    // alert("Clique aqui para ser redirecionado!");
}

function redirecionar(){
    window.open("https://helemalmeida.netlify.app/");
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Uhuuuul!";
    elemento.innerHTML = "Uhuuuul!";
    // alert("Trocar texto");
}

function voltar(elemento){ 
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada com sucesso!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}