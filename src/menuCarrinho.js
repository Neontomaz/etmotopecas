function abrirCarrinho(){
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");

}


function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
}

export function adcionarAoCarrinho() {
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho")
    const cartaoProdutoCarrinho =`
    <article class="flex bg-slate-100 border-radius rounded-lg ">
    <button id="fechar-carrinho" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900"></i></button> 
    <img src="./assets/imgs/masculino.jpg"
     alt="Carrinho: corte blindado"
      class="h-24 rounded-lg"
      />
   
    <div class="py-2">
        <p class="text-slate-900 text-sm">Corte Blindado</p>
        <p class="text-green-900 text-lg">$60</p>
    </div>
</article>
    `;

containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
}