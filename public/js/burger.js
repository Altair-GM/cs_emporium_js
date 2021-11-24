/* --------------------------------- burger --------------------------------- */
const burger = document.querySelector("#icon")
const menu = document.querySelector("#menu")
// console.log(menu);

/* -------------------------- activer menu laterale ------------------------- */
let compt = 0;
burger.addEventListener('click', (e) => {
    menu.classList.toggle('active')
    document.body.classList.toggle('opacity')
    document.body.classList.toggle('opacity') /* --------------------------- eclairage du bruger -------------------------- */
    // const light = e.target.getAttribute('i')
    if (compt % 2 == 0) {
        e.target.style.color = "white"
    } else {
        e.target.style.color = "black"

    }
    compt++
})
