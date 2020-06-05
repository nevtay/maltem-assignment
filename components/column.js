const columnTemplate = document.createElement("template");

const deleteColumn = (e) => {
  const columnToRemove = e.target.closest(".column");
  columnToRemove.remove();
};

const editColumnTitle = (e) => {
  const columnTitle = e.target.closest(".column").querySelector("#column-title");
  if (e.target.id === "editColumnBtn" || e.target.id === "column-title") {
    columnTitle.setAttribute("contenteditable", "true");
    columnTitle.focus();
    columnTitle.style.background = "#f9f9f9";
    columnTitle.style.padding = "0 10px";
  } else {
    columnTitle.setAttribute("contenteditable", "false");
    columnTitle.blur();
    columnTitle.style.background = "none";
    columnTitle.style.padding = "0";
  };
};

columnTemplate.innerHTML = `
  <style>

  .column {
    padding: 30px 15px;
    height: auto;
    width: 300px;
    height: 100px;
    background: #f9f9f9;
    margin: 10px 10px;
  }

  .column-utilities {
    padding: 10px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: #e3e3e3;
  }

  #addCardBtn, #editColumnBtn, #deleteColumnBtn {
    font-size: 10px;
  }


  </style>
  <div class="column">
    <div class="column-utilities">
      <div>
        <span id="column-title"><slot name="column-title" /></span>
      </div>
      <div>
      <button id="addCardBtn">Add Card</button>
      <button id="editColumnBtn">Edit Column Name</button>
        <button id="deleteColumnBtn">Delete Column</button>
      </div>
    </div>
    <div class="card-display-area"></div>
  </div>
`;

class Column extends HTMLElement {
  constructor () {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(columnTemplate.content.cloneNode(true));

    this.shadowRoot.querySelector("#column-title").innerText = this.getAttribute("column-title");

    this.shadowRoot.querySelector("#deleteColumnBtn").addEventListener("click", deleteColumn);
    this.shadowRoot.querySelector(".column").addEventListener("click", editColumnTitle);
  }

  connectedCallback () {}

  disconnectedCallback () {}
}

window.customElements.define("column-container", Column);
