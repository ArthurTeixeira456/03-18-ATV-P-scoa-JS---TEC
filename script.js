const botoesComprar = document.querySelectorAll(".box button");
const btnCarrinho = document.getElementById("btnCarrinho");

let produtos = [
    {
        img: "img/Sushovo.jpg",
        nome: "Shusovo de Páscoa",
        preço: 318.90,
    },
    {
        img: "img/Coxovo.jpg",
        nome: "Coxovo de Páscoa",
        preço: 229.99,
    },
    {
        img: "img/Pudovo.jpg",
        nome: "Pudovo de Páscoa",
        preço: 202.99,
    },
    {
        img: "img/Sonho de Valsa.jpg",
        nome: "Sonho de Vara",
        preço: 199.99,
    },
    {
        img: "img/Leite de Moça.jpg",
        nome: "Ovo Leite de Moço",
        preço: 209.99,
    },
    {
        img: "img/Ovo Kids.png",
        nome: "Ovo Kids Chocolate",
        preço: 227.99,
    },
    {
        img: "img/Garoto Amargo.jpg",
        nome: "Ovo Garoto Jeba Torta",
        preço: 328.99,
    },
    {
        img: "img/Labubu Ovo.webp",
        nome: "Ovo Labubu",
        preço: 666.67,
    },
];

let carrinho = [];

function Cria(onload) {
    for(let i = 0; i < produtos.length; i++) {
        let main = document.getElementById("main");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let span = document.createElement("span");
        let btn = document.createElement("btn");
        let ncarac = i + "";

    }
}

btnCarrinho.addEventListener("click", () => {
    //cria o aside
    let div = document.createElement("div");
    let body = document.querySelector("#body");
    let btnRemove = document.createElement("button");
    let preco = document.createElement("span");
    let soma = 0;

    body.appendChild(div);
    div.appendChild(btnRemove);
    
    div.classList.add("carrinhoAside")
})



