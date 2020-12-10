/* INTRODUÇÃO A JAVASCRIPT - módulo 1
var nome = "Aline Gorisch";
var idade = 29;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
    alert(nome + " tem " + idade + " anos");
    alert(idade + idade2);
    console.log(nome);
    console.log(idade + idade2);
    console.log(n1 * n2);
    console.log(frase.toLowerCase());
    alert(frase.replace("Japão", "Brasil")); 
*/

/* ARRAY - módulo 1 
var lista = ["maça", "pêra", "laranja"];
    console.log(lista[1]);
    alert(lista[1]);
lista.pop("uva");
lista.push("uva");
    console.log(lista);
    console.log(lista[0]);
    console.log(lista.reverse());
    console.log(lista.length);
    console.log(lista.toString());
    console.log(lista.toString());
    console.log(lista.join(" - ")); 
*/

/* DICIONÁRIO
var fruta = {nome:"maça", cor:"vermelha"}
    console.log(fruta.nome);
    console.log(fruta.cor);
    console.log(fruta.cor);
    alert(fruta.nome);
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
    console.log(frutas);
    console.log(fruta);
    console.log(fruta.cor);
    alert(frutas[1].nome);
*/

/* CONDICIONAIS
var idade3 = prompt("Qual é sua idade?");
//var idade3 = 18
if (idade3 >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*LAÇOS DE REPETIÇÕES
var count  = 0;
while (count <= 5) {
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
}
var count;
for(count=1; count <=5; count++){
   alert(count); 
};
*/

/* DATA
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getDate());
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
*/

/* Desenvolva páginas web com JavaScript - módulo 2
function soma(n1, n2) { 
    return n1 + n2;
}

function validaIdade(idade4) {
    var validar;
    if (idade4 >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade4 = prompt("Qual é a sua idade?");
console.log(validaIdade(idade4));

alert(soma(5, 10));*/

// Módulo 2
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")

}

function redirecionar(){
    //window.open("https://web.digitalinnovation.one/browse");
    window.location.href = "https://web.digitalinnovation.one/browse";
    
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página carregada");
}

function FuncaoChange(elemento) {
    console.log(elemento.value);
    
}











