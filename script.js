botao = document.getElementById("botao");
form = document.getElementById("form");
resultado = document.getElementById("resultado");
select = document.getElementById("pizzaEscolhida");
quantidade = document.getElementById("quantidade");

botao.addEventListener("click", function() {
    document.getElementById("cardapio").scrollIntoView();
});

document.getElementById("calabresa").addEventListener("click", function() {
    select.value = "Calabresa";
});

document.getElementById("frango").addEventListener("click", function() {
    select.value = "Frango com Catupiry";
});

document.getElementById("margherita").addEventListener("click", function() {
    select.value = "Margherita";
});

select.addEventListener("change", function() {
    select.classList.add("aparecer");
});

quantidade.addEventListener("change", function() {
    if (quantidade.value < 1) {
        quantidade.value = 1;
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    nome = document.getElementById("nome").value;

    resultado.innerHTML = "Pedido feito! Obrigado, " + nome + ".";
    resultado.classList.add("aparecer");
});