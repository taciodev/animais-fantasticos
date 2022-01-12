function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]'),
    botaoFechar = document.querySelector('[data-modal="fechar"]'),
    containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir & botaoFechar & containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    
    function cliqueForaModal(event) {
      if (event.target === this)
        fecharModal();
    }
    
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
};








