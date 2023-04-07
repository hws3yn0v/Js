let search = document.getElementById("search")
let input = document.getElementById("input")

search.addEventListener("click", function () {
    if (input.style.display === "none") {
        input.style.display = "block"
    }
    else {
        input.style.display = "none"
    }
})

let close = document.getElementById("close")

close.addEventListener("click", function () {
    
    if (input.style.display === "none") {
        input.style.display = "block"
    }
    else {
        input.style.display = "none"
    }
})