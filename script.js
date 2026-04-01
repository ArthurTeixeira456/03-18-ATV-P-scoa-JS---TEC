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

const btnCarrinhoD = false;
btnCarrinho.addEventListener('click', () => {
    if ( btnCarrinhoD = false ){
        let btnCarrinhoD = true;
        const aside = document.createElement("aside");
        aside.innerHTML = `
            <h2>Carrinho</h2>
            <ul id="listaCarrinho"></ul>
            <h3 id="total">Total: R$ 0</h3>
        `;
    }else{
        let btnCarrinhoD = false;
    }

})




