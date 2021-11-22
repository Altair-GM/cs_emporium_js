

/* ----------------------------- scrolling navbar ---------------------------- */



// window.addEventListener("scroll",function(){
    
//     // navBar.classList.toggle("sticky",window.scrollY > 0)


// } )

window.addEventListener('scroll',function(){

    let navBar = document.querySelector("#navbar")
    let limit = navBar.offsetTop
    // let position = navBar.getBoundingClientRect().top
    // console.log(position);
    if (window.pageYOffset >= limit) {
        
        navBar.classList.toggle('floatBar')
        navBar.style.position = "fixed"
    } else {

        navBar.style.position = "initial"
        navBar.classList.toggle('floatBar') = "none"

    }

})