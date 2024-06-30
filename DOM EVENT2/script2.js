const button=document.querySelector("button")
//console.log(button)
const currentColor=document.querySelector(".currentColor")
console.log(currentColor)
function randomGenerator(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const color=`rgba(${red},${green},${blue})`
    return color
}

button.addEventListener("click",function(){
    const randomColor=randomGenerator()
    console.log(randomColor)
    document.body.style.backgroundColor=randomColor
    currentColor.textContent=randomColor
})