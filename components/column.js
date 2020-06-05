const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>
  <div class="column">
  <span class="column-title"><slot name="column-title" /></span>
  </div>
`;

class Column extends HTMLElement {
  constructor () {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("#column-title").innerText = this.getAttribute("title");
  }

  connectedCallback () {}

  disconnectedCallback () {}
}

window.customElements.define("column-container", Column);
