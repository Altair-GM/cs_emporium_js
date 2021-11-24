
let navBar = document.querySelector("#navbar")
let limit = navBar.offsetTop
let title = document.createElement("h2")
title.textContent = "emporium."
window.addEventListener('scroll',function(){
    
    
    
    
    if (window.pageYOffset >= limit) {
        
        navBar.appendChild(title)
        navBar.classList.toggle('floatBar',window.scrollY > 0)
        // navBar.dstyle.position = "fixed"
        // navBar.style.transitionDuration= "1s";
        

    } else {
        title.remove()
        // navBar.style.overFlow = "hidden"

        // navBar.style.position = "initial"
        navBar.classList.toggle('floatBar',window.scrollY < 0) = "none"

    }

})