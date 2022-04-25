
import Dom from './modules/constructors.js'; //selecionar elementos
import scriptsHome from './modules/scriptsPaginas/home.js'


// PAGES 
const pageHome = new Dom().el("#page__home")

if (pageHome) { // ★ HOME  
    new Dom().bodyClass("body__home");
    scriptsHome();
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});