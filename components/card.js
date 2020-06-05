const template = document.createElement("template");
template.innerHTML = `
  <style>

    .card {
      background: orange;
      padding: 10px 15px;
      width: inherit;
      margin: 10px 0;
    }
    
    .card-container {
      width: 100%;
    }

    .card-column-parent {
      font-size: 12px;
    }

    .card-description {
      height: 100px;
      margin-top: 10px;
      border: none;
      outline: 0px;
      width: 260px;
      transition: all 0.1s;
      resize: none;
    }
    
    .card-description:not(:focus) {
      height: auto;
      border: none;
      outline: 0px;
      background: #d2d2d2;
      appearance: textfield;
      -webkit-appearance: textfield;
    }
    
  </style>
  <div class="card">
    <div class="card-container">
      <span id="card-title"><slot name="title" /></span>
      <span class="card-column-parent">Column: <em><span id="card-column-parent-text"></span></em></span>
      <div>
        <button id="deleteBtn">Delete</button>
        <button id="editBtn">Edit</button>
      </div>
    </div>
    <div>
      <textarea type="text" class="card-description"}></textarea>
    </div>
  </div>
`;

class Card extends HTMLElement {
  constructor () {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("#card-title").innerText = this.getAttribute("title");
  }

  connectedCallback () {
    this.shadowRoot
      .querySelector("#deleteBtn")
      .addEventListener("click", (e) => {
        const cardElement = e.target.closest(".card");
        cardElement.remove();
      });
    this.shadowRoot
      .querySelector("#editBtn")
      .addEventListener("click", () => console.log("edited"));
  }

  disconnectedCallback () {
    this.shadowRoot.querySelector(".card").removeEventListener();
  }
}

window.customElements.define("card-contents", Card);
