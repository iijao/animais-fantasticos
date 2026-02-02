import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.activeClass = 'active';
    if (events === undefined)  this.events = ['touchstart', 'click'];
    else this.events = events
  }

  activeDropdownMenu(event) {
    const element = event.currentTarget
    event.preventDefault();
    element.classList.add(this.activeClass );
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass );
    });
  }

  addDropdownMenusEvent(){
     this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
      menu.addEventListener(userEvent, this.activeDropdownMenu);
    });
  });
  }

  init(){
    if (this.addDropdownMenusEvent.length){
      this.addDropdownMenusEvent()
    }
    return this
  }




}
