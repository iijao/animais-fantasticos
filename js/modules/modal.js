export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  //const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  //const botaoFechar = document.querySelector('[data-modal="fechar"]');
  //const containerModal = document.querySelector('[data-modal="container"]');

  //bind this ao modal para fazer referencia ao objeto da classe
  
  

  //abre ou fehca o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }
  //add evento de toggle ao modal
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicaar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }
  //add eventos aos elementos do modal
  addModalEvents(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init(){
    if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }

}
