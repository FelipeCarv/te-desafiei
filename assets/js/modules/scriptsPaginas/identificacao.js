export default function scriptsIdentificacao (){
    // 'colocar scripts das respectivas paginas dentro de -scriptsPaginas-  e criar o arquivo exemplo: home.js - contato.js  --- e importar no main e executar em sua respectiva pagina '

    
    const btn = document.getElementById('button-next');

    function toggleMenu(){
        const teste = document.getElementById('pagamento');
        const dados = document.getElementById('info-dados');

        teste.classList.toggle('active');
        dados.classList.toggle('destroir');
        

    }

    btn.addEventListener('click', toggleMenu);


//================ MODAL ================
    const btnAlterar = document.getElementById('alterar');
    const btnFechar = document.getElementById('fechar')

    btnAlterar.addEventListener('click', ()=>{
        const modal = document.getElementById('modal-planos');
        modal.classList.add('mostrar');
    });

    btnFechar.addEventListener('click', ()=>{
        const modal = document.getElementById('modal-planos');
        modal.classList.remove('mostrar');
    });
}
