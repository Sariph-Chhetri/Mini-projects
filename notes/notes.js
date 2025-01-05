let button = document.querySelector(".btn");
let notesContainer = document.querySelector(".notesContainer");
let notes = document.querySelectorAll(".input");

button.addEventListener("click", function () {
    var inputBox = document.createElement("div");
    var img = document.createElement("img");
    img.src = "del.png";
    inputBox.className = "input";
    inputBox.setAttribute("contenteditable", true);
    notesContainer.appendChild(inputBox).appendChild(img);
    storedata();
})
notesContainer.addEventListener("click", function (e) {
    if (e.target.nodeName === "IMG") {
        e.target.parentElement.remove();
        storedata();
    }
    else if(e.target.nodeName === "DIV"){
        notes = document.querySelectorAll(".input");
       notes.forEach(nt =>{
        nt.onkeyup = function(){
        storedata();
        }
       })
    }
})
function storedata(){
    localStorage.setItem("data",notesContainer.innerHTML);
}
function getdata(){
    notesContainer.innerHTML = localStorage.getItem("data");
}
getdata();