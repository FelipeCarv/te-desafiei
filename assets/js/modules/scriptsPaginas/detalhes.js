export default function scriptsDetalhes(){
    // 'colocar scripts das respectivas paginas dentro de -scriptsPaginas-  e criar o arquivo exemplo: home.js - contato.js  --- e importar no main e executar em sua respectiva pagina '

    // ============== MODAL PLANOS ==============

    const btnAlterar = document.getElementById('alterar');
    const btnFechar = document.getElementById('fechar')

    btnAlterar.addEventListener('click', (e)=>{
        e.preventDefault();
        const modal = document.getElementById('modal-planos');
        modal.classList.add('mostrar');
    });

    btnFechar.addEventListener('click', ()=>{
        const modal = document.getElementById('modal-planos');
        modal.classList.remove('mostrar');
    });


    // ============== MODAL CANCELAR ==============

    const btnCancelar = document.getElementById('cancelar');
    const btnVoltarCancelar = document.getElementById('voltar-cancelar');
    const btnCancelarModal = document.getElementById('btnCancelar');

    function fecharModal(e){
        e.preventDefault();
        const modal = document.getElementById('modal-cancelar');
        modal.classList.remove('mostrar');
    }

    btnCancelar.addEventListener('click', (e)=>{
        e.preventDefault();
        const modal = document.getElementById('modal-cancelar');
        modal.classList.add('mostrar');
    });

    btnVoltarCancelar.addEventListener('click', fecharModal);
    btnCancelarModal.addEventListener('click', fecharModal);



    // ======== MODAL PLANO CANCELADO ========
    const btnCancelado = document.getElementById('quero-cancelar');

    btnCancelado.addEventListener('click', (e)=>{
        
        const modal = document.getElementById('modal-cancelado');
        modal.classList.add('mostrar');
        
    });
    e.preventDefault();
}
