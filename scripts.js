const addColBtn = document.querySelector("#add-column-button");
const mainDisplayArea = document.querySelector("main");

const addNewCard = () => {
  const newCard = document.createElement("card-contents");
  const newCardTitle = newCard.shadowRoot.querySelector("#card-title");
  const cardTitle = prompt("Enter card name");
  if (!cardTitle.trim()) {
    alert("Invalid title - card not created");
  } else {
    newCardTitle.textContent = cardTitle;
    mainDisplayArea.appendChild(newCard);
  }
};

addColBtn.addEventListener("click", addNewCard);
