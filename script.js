const listaProdutos = document.getElementById('main');

let conteudoProdutos = '';

let contador = 0;
produtos.forEach(produto => {
    conteudoProdutos = conteudoProdutos + `
        <div class="produtos">
            <img src="${produto.img}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco}</p>
            <button class="btAddCarrinho" value="${contador}">Comprar</button>
        </div>
    `;
    contador++;
});
listaProdutos.innerHTML = conteudoProdutos;

let btnAddCarrinho = document.querySelectorAll('.btAddCarrinho');



//faz carrinho aparecer
const btnCarrinho = document.getElementById('btnCarrinho');
const listaCarrinho = document.getElementById('listaCarrinho');
const fechaCarrinho = document.getElementById('fechaCarrinho');

btnCarrinho.addEventListener('click', () => {
    listaCarrinho.classList.remove('ocultaCarrinho');
    listaCarrinho.classList.add('mostraCarrinho');
    const precos = document.querySelectorAll('.preco');
        let somaTotal = 0;
        precos.forEach(preco => {
        somaTotal += parseFloat(preco.innerText.replace('R$', '').replace(',', '.'));
        });
        const precoTotal = document.createElement('p');
        precoTotal.classList.add('precoTotal');
        precoTotal.innerText = `Total: R$ ${somaTotal.toFixed(2)}`;
        listaCarrinho.appendChild(precoTotal);
});

//faz carrinho desaparecer
fechaCarrinho.addEventListener('click', () => {
    listaCarrinho.classList.remove('mostraCarrinho');
    listaCarrinho.classList.add('ocultaCarrinho');
    const precoTotal = document.querySelector('.precoTotal');
    if (precoTotal) {
        precoTotal.remove();
    }
});

//adiciona produtos ao carrinho
btnAddCarrinho.forEach(botao => {
        botao.addEventListener('click', () => {
        const produto = produtos[botao.value];
        const boxCarrinho = document.createElement('div');
        boxCarrinho.classList.add('boxCarrinho');
        boxCarrinho.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p class="preco">R$ ${produto.preco}</p>
        `;
        const preco = boxCarrinho.querySelector('.preco');
        preco.innerText = preco.innerText.replace(',', '.');
        listaCarrinho.appendChild(boxCarrinho);
    });
});
