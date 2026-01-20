export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
    
    // ESTA É A CHAVE: Garante que o 'this' em toggleAccordion 
    // seja SEMPRE a classe Accordion
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(item) {
    // Agora 'this.activeClass' vai funcionar sempre
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      // Agora podemos passar a função diretamente
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      // Agora o 'this' não será undefined aqui
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}