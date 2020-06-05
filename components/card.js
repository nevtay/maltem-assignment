const template = document.createElement("template");

const autoResize = (element) => {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
};

const downSize = (element) => {
  element.style.height = "50px";
};

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

    #card-title {
      min-width: 100;
      font-size: 14px;
      font-weight: 700;
      padding: 3.5px 2.5px 3.5px 2.5px;
      margin-right: 5px;
      border-radius: 10px;
    }

    .card-container-buttons {
      margin: 10px 0 0 0;
    }

    .card-column-parent {
      font-size: 12px;
    }

    .card-description {
      min-height: 50px;
      max-height: 200px;
      margin-top: 10px;
      border: none;
      outline: 0px;
      width: 260px;
      transition: all 0.1s;
      resize: none;
      overflow: hidden;
    }
    
    .card-description:not(:focus) {
      height: 50px;
      border: none;
      outline: 0px;
      background: #d2d2d2;
      appearance: textfield;
      -webkit-appearance: textfield;
    }

    textarea::-webkit-scrollbar {
      display: none;
    }
    
  </style>
  <div class="card">
    <div class="card-container">
      <span id="card-title"><slot name="title" /></span>
      <span class="card-column-parent">Column: <em><span id="card-column-parent-text"></span></em></span>
      <div class="card-container-buttons">
        <button id="deleteBtn">Delete</button>
        <button id="editBtn">Edit</button>
      </div>
    </div>
    <div class="card-container">
      <textarea type="text" class="card-description" oninput="autoResize(this)" onfocus="autoResize(this)" onblur="downSize(this)"></textarea>
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
