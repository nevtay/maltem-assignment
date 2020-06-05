const columnTemplate = document.createElement("template");
const oldTitle = [];

const addCard = (e) => {
  const cardDisplayArea = e.target.closest(".column").querySelector(".card-display-area");
  const newCard = document.createElement("card-contents");
  cardDisplayArea.appendChild(newCard);
};

const preventOverflow = (e) => {
  const MAX_WIDTH_OF_TITLE = 270;
  if (e.target.getBoundingClientRect().width >= MAX_WIDTH_OF_TITLE) {
    e.preventDefault();
  };
  if (e.key === "Enter") {
    e.preventDefault();
  }
};

const preventPaste = (e) => {
  e.preventDefault();
};

const preventEmptyTitle = (e) => {
  if (!e.target.innerText) {
    e.target.innerText = oldTitle[0];
  }
  oldTitle.pop();
};

const editColumnTitle = (e) => {
  const columnTitle = e.target.closest(".column").querySelector("#column-title");
  if (oldTitle.length < 1) {
    oldTitle.push(columnTitle.innerText);
  }
  if (e.target.id === "editColumnBtn" || e.target.id === "column-title") {
    columnTitle.addEventListener("keypress", preventOverflow);
    columnTitle.addEventListener("blur", preventEmptyTitle);
    columnTitle.addEventListener("paste", preventPaste);
    columnTitle.setAttribute("contenteditable", "true");
    columnTitle.classList.add("column-title-focus");
    columnTitle.focus();
  } else if (columnTitle.innerText === "") {
    columnTitle.innerText = oldTitle.unshift();
  } else {
    columnTitle.innerText.trim();
    columnTitle.classList.remove("column-title-focus");
    columnTitle.setAttribute("contenteditable", "false");
    columnTitle.blur();
  }
};

const deleteColumn = (e) => {
  const columnToRemove = e.target.closest(".column");
  columnToRemove.remove();
};

columnTemplate.innerHTML = `
  <style>

  .column {
    padding: 30px 15px 10px 15px;
    height: auto;
    width: 300px;
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

  .column-utilities div {
    margin-bottom: 7.5px;
  }

  #column-title {
    min-height: 40px;
    overflow: scroll;
  }

  .column-title-focus {
    background-color: #f9f9f9;
    padding: 5px 10px;
  }

  #addCardBtn, #editColumnBtn, #deleteColumnBtn {
    font-size: 10px;
  }

  .card-display-area {
    padding: 20px 0 0 0;
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

    this.shadowRoot.querySelector("#addCardBtn").addEventListener("click", addCard);
    this.shadowRoot.querySelector(".column").addEventListener("click", editColumnTitle);
    this.shadowRoot.querySelector("#deleteColumnBtn").addEventListener("click", deleteColumn);
  }

  connectedCallback () {}

  disconnectedCallback () {}
}

window.customElements.define("column-container", Column);
