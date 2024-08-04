// atribuindo todos os elementos da classe .menu-item a um array  
const menuItem = document.querySelectorAll('.menu-item');

// definindo a ação ao clicar no item    
function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo');
}

// adicionando escutador de eventos
menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)



const btnExp = document.querySelector('#btn-exp')
const sideBar = document.querySelector('.menu')

btnExp.addEventListener('click', () => {
    sideBar.classList.toggle('menu-expandir');
})
