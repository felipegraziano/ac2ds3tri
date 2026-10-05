botao = document.getElementById("botao");
form = document.getElementById("form");
resultado = document.getElementById("resultado");
select = document.getElementById("pizzaEscolhida");
quantidade = document.getElementById("quantidade");

// Mostra o cardápio
botao.addEventListener("click", function() {
    document.getElementById("cardapio").scrollIntoView();
});

// Escolhe a pizza de calabresa
document.getElementById("calabresa").addEventListener("click", function() {
    select.value = "Calabresa";
    document.querySelector("#calabresa").innerHTML = "Escolhida";
    document.querySelector("#calabresa").classList.add("aparecer");
});

// Escolhe a pizza de frango
document.getElementById("frango").addEventListener("click", function() {
    select.value = "Frango com Catupiry";
    document.querySelector("#frango").innerHTML = "Escolhida";
    document.querySelector("#frango").classList.add("aparecer");
});

// Escolhe a pizza Margherita
document.getElementById("margherita").addEventListener("click", function() {
    select.value = "Margherita";
    document.querySelector("#margherita").innerHTML = "Escolhida";
    document.querySelector("#margherita").classList.add("aparecer");
});

// Altera o estilo do select
select.addEventListener("change", function() {
    select.classList.add("aparecer");
});

// Verifica a quantidade
quantidade.addEventListener("change", function() {
    if (quantidade.value < 1) {
        quantidade.value = 1;
    }
});

// Envia o formulário
form.addEventListener("submit", function(event) {
    event.preventDefault();

    nome = document.getElementById("nome").value;

    resultado.innerHTML = "<p>Pedido feito! Obrigado, " + nome + ".</p>";

    resultado.classList.add("aparecer");

    novo = document.createElement("p");
    novo.innerHTML = "Pizza: " + select.value + " | Quantidade: " + quantidade.value;

    resultado.appendChild(novo);

    remover = document.createElement("button");
    remover.innerHTML = "Remover pedido";

    resultado.appendChild(remover);

    remover.addEventListener("click", function() {
        resultado.innerHTML = "";
        resultado.classList.remove("aparecer");
    });
});
