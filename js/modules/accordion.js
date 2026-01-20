export default class Accordion {
  constructor(){
    this.accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    this.activeClass = 'ativo'
  }


  toggleAccordion(item) {
    this.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  //adiciona os eventos ao accordion
  addAccordionEvent(){
      this.accordionList.forEach((item) => {
        item.addEventListener('click', this.toggleAccordion(item));
    });
  }
  //iniciar funçao
  init(){
    if(this.accordionList.length){
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent();

    }
  }

}
