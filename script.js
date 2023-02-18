const btnPlus = document.querySelector(".sizeUp")
const btnMinus = document.querySelector(".sizeDown")
const btnColor = document.querySelector(".color")
const text = document.querySelector("p")

const compStyles = window.getComputedStyle(text)
mainFontSize = compStyles.getPropertyValue("font-size")
console.log(mainFontSize)
let newMainFontSize = parseInt(mainFontSize.slice(0,-2))


const Plus = () => {
    if(newMainFontSize < 60){
        text.style.fontSize = (newMainFontSize + 4) + "px"
        newMainFontSize += 4
        console.log(newMainFontSize)
        
    }
    else { alert("osiągnięto maksymalny rozmiar!")}
}
const Minus = () => {
    if(newMainFontSize > 6){
        text.style.fontSize = (newMainFontSize - 4) + "px"
        newMainFontSize -= 4
        console.log(newMainFontSize)
        
    }
    else { alert("osiągnięto minimalny rozmiar!")}
}
const Color = () => {
    let red = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)

    text.style.color =`rgb(${red},${green},${blue})`
    console.log(red)
    console.log(green)
    console.log(blue)
    console.log(text.style.color)
}



btnPlus.addEventListener("click", Plus)
btnMinus.addEventListener("click", Minus)
btnColor.addEventListener("click", Color)