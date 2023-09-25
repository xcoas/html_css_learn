let user_input = document.getElementById("userinput")
let button = document.querySelectorAll("button")

button.forEach(element =>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.textContent)
        if (e.target.textContent === "CE"){
            user_input.innerHTML = ""
        }else if(e.target.textContent === "X"){
            user_input.innerHTML = user_input.innerHTML.slice(0,-1)
        }else if(e.target.textContent === "="){
            user_input.innerHTML = eval(user_input.innerHTML)
        }else{
            user_input.innerHTML += e.target.textContent
        }
    })
})