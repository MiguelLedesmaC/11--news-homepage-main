
let hamburguer = document.querySelector('#hamburguer');
let menu = document.querySelector('.nav-mobile')
let modalBackground = document.querySelector('.modal-background')
let isOpen = false;


hamburguer.addEventListener('click',()=> {
    if(!isOpen){
        menu.style.display = 'flex';
        modalBackground.style.visibility ='visible'
        hamburguer.lastChild.src ='./assets/images/icon-menu-close.svg';
        isOpen = true;
    }else {
        menu.style.display = 'none'
        modalBackground.style.visibility ='hidden';
        hamburguer.lastChild.src ='./assets/images/icon-menu.svg'
        isOpen = false;
    }
})
