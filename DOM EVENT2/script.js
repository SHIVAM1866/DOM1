const buttonAll=document.querySelectorAll(".myButton button")
console.log(buttonAll)
buttonAll.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor="yellow"
    e.target.style.color="red"
    })
    
})