
import Dom from './constructor.js'; //selecionar elementos


// PAGES 
const pageHome = new Dom().el("#page__home")

if (pageHome) { // ★ HOME  
    new Dom().bodyClass("body__home");
    scriptsHome();
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});