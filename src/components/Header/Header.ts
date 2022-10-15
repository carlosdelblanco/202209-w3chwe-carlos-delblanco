import Component from "../Component/Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement, classname = "") {
    super(parentElement, classname, "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `<h1 class="main-title">Pokemon</h1>`;
  }
}

export default Header;
