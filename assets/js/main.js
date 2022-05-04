
import Dom from './modules/constructors.js'; //selecionar elementos
import scriptsHome from './modules/scriptsPaginas/home.js'
import initCounterUp from './modules/counterUp.js';
import scriptsLogin from './modules/scriptsPaginas/login.js';

// PAGES 
const pageHome = new Dom().el("#page__home")

if (pageHome) { // ★ HOME  
    new Dom().bodyClass("body__home");
    scriptsHome();
    initCounterUp();
}

const pageLogin = new Dom().el("#page__login")

if (pageLogin) { // ★ LOGIN  
    new Dom().bodyClass("body__login");
    scriptsLogin();
}

const pageCadastro = new Dom().el("#page__cadastro")

if (pageCadastro) { // ★   CADASTRO
    new Dom().bodyClass("body__cadastro");
    scriptsCadastro();
}

 
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});



const btnMobile = document.getElementById('menu-hamburguer');

    function toggleMenu(){
        const nav = document.getElementById('nav');
        nav.classList.toggle('active')
    }

btnMobile.addEventListener('click', toggleMenu);
