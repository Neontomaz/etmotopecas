//import { inicializarCarrinho } from "./src/menuCarrinho";


const modelos = [
{
    id: 1,
    modelo: "Capas de Chuva M/F",
    foto:"imgs/promo/capa-chuva.jpg",
    preco: 25
},
{
    id: 2,
    modelo: "Amortecedores",
    foto:"imgs/promo/amortecedores.jpg",
    preco: 30
},
{
    id: 3,
    modelo: "Jogo de Guidão Completo",
    foto:"imgs/promo/guidao.jpg",
    preco: 35
},
{
    id: 4,
    modelo: "Painens completos consulte o modelo",
    foto:"imgs/promo/moto-paineis.jpg",
    preco: 25
},
{
    id: 5,
    modelo: "Painel Completo 125 FAN",
    foto:"imgs/promo/painel-125.jpg",
    preco: 30
},
{
    id: 6,
    modelo: "Painel Compleot POP",
    foto:"imgs/promo/painel-pop.jpg",
    preco: 35
},
{
    id: 7,
    modelo: "Rodão 160cc Honda",
    foto:"imgs/promo/rodoes.jpg",
    preco: 25
},
{
    id: 8,
    modelo: "Spray Color - Diversas Cores",
    foto:"imgs/promo/spray-color.jpg",
    preco: 30
},
{
    id: 9,
    modelo: "Rodão liga leve Biz -2012",
    foto:"imgs/promo/rodao-biz-2012.jpg",
    preco: 35
},
{
    id: 10,
    modelo: "Capacete TORK - Rosa",
    foto:"imgs/promo/capacete-rosa.jpg",
    preco: 35
}
]




for (const modelo of modelos){
    
    const cardModelo = `   <div id="card-modelo-1"  class=" flex flex-col border-solid border-2 border-orange-700 h-[250px] w-[380px] my-6 mx-4">
        <h3 class="text-center text-xl hover:bg-green-600" >${modelo.modelo}</h3>
        <img src="./assets/${modelo.foto}" alt="" class="  w-[350px] h-[200px] mx-2" />
        <p>R$${modelo.preco}</p>
        <button class='bg-slate-950 text-slate-200'>
        <i class="fa-solid fa-cart-plus"></i></button>
        </div>

`;
document.getElementById("galeria-itens").innerHTML += cardModelo
}
inicializarCarrinho();