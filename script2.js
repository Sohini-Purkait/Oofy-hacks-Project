const loginBtn = document.querySelector(".text")
const form = document.querySelector(".form")
const body = document.querySelector("html")

function toggling() {
    form.classList.toggle("form-show");
}

const leftBtn = document.querySelector(".slider-left button")
const rightBtn = document.querySelector(".slider-right button")
let num = 0
rightBtn.addEventListener("click", () => {
    if (num % 2 === 0) {
        document.querySelector(".card-center1").classList.toggle("hide-card-center1")
        document.querySelector(".card-center6").classList.toggle("show-card-center6")
        num+=1
    }
})
leftBtn.addEventListener("click",()=>{
    if(num%2===1){
        document.querySelector(".card-center1").classList.toggle("hide-card-center1")
        document.querySelector(".card-center6").classList.toggle("show-card-center6")
        num+=1
    }
})