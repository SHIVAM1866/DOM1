//|bubbling|capturing|delegation 
const grandparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")

//bubbing events
// child.addEventListener("click",()=>{
//     console.log("you click me child!!!")
// })

// parent.addEventListener("click",()=>{
//     console.log("you click me parent!!!")
// })

// grandparent.addEventListener("click",()=>{
//     console.log("you click me grandparent!!!")
// })

// document.body.addEventListener("click",()=>{
//     console.log("you click me body!!!")
// })


//event capturing
// child.addEventListener("click",()=>{
//     console.log("you click me child!!!")
// },true)

// parent.addEventListener("click",()=>{
//     console.log("you click me parent!!!")
// },true)

// grandparent.addEventListener("click",()=>{
//     console.log("you click me grandparent!!!")
// },true)

// document.body.addEventListener("click",()=>{
//     console.log("you click me body!!!")
// },true)

//event delgation
grandparent.addEventListener("click",(e)=>{
    console.log("you click me",e.target)
})