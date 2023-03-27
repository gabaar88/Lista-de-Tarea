const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
var cantidad = document.getElementById("cantidad");
const form = document.querySelector("form");
var total = 0;



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value;

  total++;
  cantidad.innerHTML = total;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }

});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    total--;
    cantidad.innerHTML = total;

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";

    }
  });
  
  return deleteBtn;
}

function addCheckBtn() {
  const checkBtn = document.createElement("button");

  checkBtn.textContent = "check";
  checkBtn.className = "btn-check";
  
}
