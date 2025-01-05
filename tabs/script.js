const content = document.querySelector(".content");
const buttons = document.querySelectorAll(".btn");
const paragraphs = document.querySelectorAll(".paragraph");

content.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    let element = document.getElementById(id);
    if (id) {
        buttons.forEach((button) => {
            button.classList.remove("active");
        })
        paragraphs.forEach((paragraph) => {
            paragraph.classList.remove("active");
        })
    }
    e.target.classList.add("active");
    element.classList.add("active");
}
)