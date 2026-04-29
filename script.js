const listaProdutos = document.getElementById('main');

let conteudoProdutos = '';

let contador = 0;
produtos.forEach(produto => {
    conteudoProdutos = conteudoProdutos + `
        <div class="produtos">
            <img src="${produto.img}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p class="preco">R$ ${produto.preco}</p>
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

if (!window.colecaoCarrinho) {
    window.colecaoCarrinho = [];
}

function renderCarrinho() {
    listaCarrinho.querySelectorAll('.boxCarrinho, .precoTotal').forEach(el => el.remove());

    colecaoCarrinho.forEach((produtoIndex, itemPos) => {
        const produto = produtos[produtoIndex];
        const boxCarrinho = document.createElement('div');
        boxCarrinho.classList.add('boxCarrinho');
        boxCarrinho.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button class="removeItem" data-pos="${itemPos}">Remover</button>
        `;
        listaCarrinho.appendChild(boxCarrinho);
    });

    atualizarTotal();
}

function atualizarTotal() {
    const total = colecaoCarrinho.reduce((acc, idx) => {
        const p = produtos[idx];
        return acc + (p && typeof p.preco === 'number' ? p.preco : 0);
    }, 0);

    let precoTotalEl = listaCarrinho.querySelector('.precoTotal');
    if (!precoTotalEl) {
        precoTotalEl = document.createElement('p');
        precoTotalEl.classList.add('precoTotal');
        listaCarrinho.appendChild(precoTotalEl);
    }
    precoTotalEl.innerText = `Preço total: R$ ${total.toFixed(2)}`;
}

btnCarrinho.addEventListener('click', () => {
    listaCarrinho.classList.remove('ocultaCarrinho');
    listaCarrinho.classList.add('mostraCarrinho');
    renderCarrinho();
});

//faz carrinho desaparecer
fechaCarrinho.addEventListener('click', (e) => {
    e.preventDefault();
    listaCarrinho.classList.remove('mostraCarrinho');
    listaCarrinho.classList.add('ocultaCarrinho');
});

//adiciona produtos ao carrinho
btnAddCarrinho.forEach(btn => {
    btn.addEventListener('click', () => {
        const index = Number(btn.value);
        colecaoCarrinho.push(index);
        renderCarrinho();
    });
});

// remove item do carrinho
listaCarrinho.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeItem')) {
        const pos = Number(e.target.dataset.pos);
        if (!Number.isNaN(pos)) {
            colecaoCarrinho.splice(pos, 1);
            renderCarrinho();
        }
    }
});

// calcula preço total do carrinho
function calculaPrecoTotal() {
    return colecaoCarrinho.reduce((acc, idx) => {
        const p = produtos[idx];
        return acc + (p && typeof p.preco === 'number' ? p.preco : 0);
    }, 0);
}
