/* ----------------------------- conexion window ---------------------------- */
let btnCo = document.querySelector('#btnCo')
console.log(btnCo);

let connect = document.querySelector('#connexion')
let connect2 = document.querySelector('#centrage')
console.log(connect);

let btnClose = document.querySelector('#btnClose')
console.log(btnClose);

btnCo.addEventListener('click',()=>{
    
    /* --------------------- revoir la transition.JS avec Ahyan -------------------- */
    
    // connect.style.transition = "5s";
    // connect2.style.transition = "5s";
    
    connect.style.display = "block"
    connect2.style.display = "block"

})

btnClose.addEventListener("click", () => {
    connect.style.display ="none";
    connect2.style.display = "none"
    
})
