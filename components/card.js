const template = document.createElement("template");
template.innerHTML = `
  <style>

    .card {
      background: orange;
      padding: 10px 15px;
      width: 300px;
    }
    
    .container {
      border: 1px solid red;
    }

    .card-description {
      border: none;
      width: 296px;
      height: auto;
    }
    .card-description:not(:focus) {
      height: 40px;
      border: none;
      background: coral;
      appearance: textfield;
      -webkit-appearance: textfield;
    }
    
  </style>
  <div class="card">
    <div class="container">
      <span id="card-title"><slot name="title" /></span>
    <div class="container">
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
