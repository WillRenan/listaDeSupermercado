 var items = [];
const btnToAdd = document.querySelector('input[type = submit]');//botão adicionar
const btnClear = document.querySelector('button[name=limpar]');//botão limpar
var nameProduct = document.querySelector('input[name=name_product]');//nome produto
var priceProduct = document.querySelector('input[name=price_product]');//valor produto
var totalSum = document.querySelector('.soma-produtos h1');//total produto
var productList = document.querySelector('.lista-produtos'); //lista produto
var sum = 0;//variável de soma

btnToAdd.addEventListener('click',()=>{
  

  items.push({ //adicionando itens no array items
    name: nameProduct.value,
    value: priceProduct.value
  });
  productList.innerHTML = " "; //adicionando item vazio pra não add mais do que o desejado
  items.map( (val)=>{
    sum += parseFloat(val.value);//somado os valores dos produtos
    productList.innerHTML+=`
    <div class="lista-produtos-single">
      <h3>${ val.name}</h3>
        <h3 class="price-produto"> <span> R$${val.value}</span></h3>    
      </div>
    </div>
    `;
  })
  sum = sum.toFixed(2);//toFixed deixa com duas casas decimais depois da vírgula
  totalSum.innerHTML =`Total :R$ ${sum}`;//atualizando o total da lista
  
  
  nameProduct.value = ""; //reset formulários
  priceProduct.value = "";//reset formulários
});

btnClear.addEventListener('click', ()=>{
  items = []; //reset array
  productList.innerHTML = " ";//rest lista
  totalSum.innerHTML = `Total :R$ 0`; // reset total

})



