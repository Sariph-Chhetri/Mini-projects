var listContainer = document.querySelector(".listcontainer");
var inputBox = document.querySelector(".inputbox");

inputBox.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addtask();
  }
});
function addtask() {
  if (inputBox.value === "") {
    alert("Your task is empty");
  }
  li = document.createElement("li");
  li.textContent = inputBox.value;
  listContainer.appendChild(li);
  var span = document.createElement("span");
  li.appendChild(span);
  span.innerHTML = "&#10006";
  setData();

  inputBox.value = "";
}
listContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setData();
  }
});

function setData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getData();
