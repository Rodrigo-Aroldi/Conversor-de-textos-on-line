
var t = document.getElementById("caixaTexto"); //var = t = textarea
var r = document.getElementById("resultado");  //var = r = resultado = textarea

//Transforma em maiúsculo
function minuscula (){
    r.innerText = t.value.toLowerCase()
}

//Transforma em minúscula
function maiuscula(){
    r.innerText = t.value.toUpperCase()
}

//Atualiza para limpar os itens
function limpar(){
    window.location.reload();
}

//Transforma a primeira letra em maiúscula
function priMaiuscula(){
    var textoOriginal = t.value;
    var textoAlterado = textoOriginal[0].toUpperCase() + textoOriginal.slice(1).toLowerCase();
    t.value = textoAlterado;
    r.innerText = textoAlterado;
}








