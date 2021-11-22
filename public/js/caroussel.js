/* -------------------------------- caroussel ------------------------------- */

const visual = document.querySelector("#visual")
// console.log(visual);
const btn = document.querySelectorAll(".btn")
// console.log(btn);

btn.forEach((uni, i) => {
    /* ------------------------ fonction du bouton slide ------------------------ */
    btn[i].addEventListener('click',()=>{

        let posicion = i
        /* ----------------------- calcule de postiio d'image ----------------------- */
        let calc = posicion * -16.66

        visual.style.transform = `translateX(${calc}%)`

        /* ----------------------------- click lumineux ----------------------------- */

        btn.forEach((uni, i)=>{
            btn[i].classList.remove('light')
        })
        btn[i].classList.add('light')

    })
    

})

