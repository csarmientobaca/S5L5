console.log("hi")

const topYellow = document.querySelector(".container-border-bottom")
const topButton = document.querySelector(".button-black")



console.log(top)

window.onscroll = function (event) {
    const distanza = window.pageYOffset
    if (distanza < 300) {
        topYellow.style.backgroundColor = "#FFC017"
        topButton.style.backgroundColor = "#191919"

    }
    else {
        topYellow.style.backgroundColor = "white"
        topButton.style.backgroundColor = "#1a8917"

    }
}