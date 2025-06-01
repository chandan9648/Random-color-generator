let btn = document.querySelector("button") 
let box = document.querySelector("#box")  
btn.addEventListener('click', function(){ 
    let R = Math.floor(Math.random()*256)   
    let G = Math.floor(Math.random()*256)  
    let B = Math.floor(Math.random()*256)   
    
    box.style.backgroundColor = `rgb(${R},${G},${B})`  
})
