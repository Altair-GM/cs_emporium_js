let dark = document.getElementById("dark")
console.log(dark);
let light = document.getElementById("light")
let h1 = document.getElementById("h1")
const darkNav = document.querySelector("nav")
console.log(darkNav);
// console.log(h1);

dark.addEventListener("click", ()=>{
    darkNav.classList.add("dark")
   
        
        document.body.style.backgroundColor = "black";
        h1.style.color = "white"
        menu.style.color = "white"
    
    
})

light.addEventListener("click",()=>{
    
})