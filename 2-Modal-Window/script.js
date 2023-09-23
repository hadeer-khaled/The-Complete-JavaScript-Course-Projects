'use strict';
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
let showModalBtns = document.querySelectorAll(".show-modal")
let closeModalBtn = document.querySelector(".close-modal")

function showModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

// Show Modals
for (let i = 0; i < showModalBtns.length; i++) { showModalBtns[i].addEventListener("click", showModal) }


// Close Modals using X button.
closeModalBtn.addEventListener("click", closeModal)

// Close Modals by pressing on overlay.
overlay.addEventListener("click", closeModal)

// Close Modals using Esc button.
document.addEventListener("keydown", function (e) {
    if (e.key == "Escape" && !modal.classList.contains("hidden")) { closeModal() }
})
