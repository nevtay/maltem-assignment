const addColBtn = document.querySelector("#add-column-button");
const mainDisplayArea = document.querySelector("main");
const columnTitles = [];

const addNewColumn = () => {
  const newColumn = document.createElement("column-container");
  const newColumnTitle = newColumn.shadowRoot.querySelector("#column-title");
  const setColumnTitle = prompt("Name your column");
  if (columnTitles.includes(setColumnTitle)) {
    alert("No duplicate titles allowed");
  } else if (!setColumnTitle || !setColumnTitle.trim()) {
    alert("Column title cannot be blank");
  } else {
    newColumnTitle.textContent = setColumnTitle;
    mainDisplayArea.appendChild(newColumn);
  }
};

const getAllColumns = () => {
  const allColumns = document.querySelectorAll("column-container");
  if (!allColumns) {
    return null;
  } else {
    for (let i = 0; i < allColumns.length; i++) {
      columnTitles.push(allColumns[i].shadowRoot.querySelector("#column-title").innerText);
    }
  }
};

addColBtn.addEventListener("click", addNewColumn);
window.addEventListener("load", getAllColumns);
