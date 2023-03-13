// The javascript was for multiple text animation,
// if not hardcode the text to be animated into the 
// span with second-text class.

const text = document.querySelector(".second-text")

const loadText =() =>{
    setTimeout(()=> {
        text.textContent = "Software Engineer"
    },0)
    setTimeout(()=> {
        text.textContent = "Frontend Dev"
    },4150)
    setTimeout(()=> {
        text.textContent = "Mech Engineer"
    },8000)
}

loadText() // without you calling it will seconds in the setinterval before it will start working
setInterval(loadText,12000)