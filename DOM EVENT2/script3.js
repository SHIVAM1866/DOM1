//const body=document.body
const mainButton=document.querySelector(".myButton")
// body.addEventListener("keypress",function(e){
//     console.log(e.key)
// })
console.log(mainButton)
mainButton.addEventListener("mouseover",function(e){
console.log("mouseover occur")
})

mainButton.addEventListener("mouseleave",function(e){
    console.log("mouseover leave")
    })