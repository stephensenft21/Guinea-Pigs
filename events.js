 let output = document.getElementById("out-target")
 let keyInput = document.getElementById("keypress-input")
 let header = document.getElementById("page-header")
 let title = document.getElementById("page-title")
 let guineaPig = document.getElementById("guinea-pig")
 let button = document.getElementById("add-color")
 let enlargeButton = document.getElementById("make-large")
 let borderButton = document.getElementById("add-border")
 let roundingButton = document.getElementById("add-rounding") 
 let aElement = document.getElementsByClassName("article-section")

function sectionClick(event) {
    let elementText = event.target.innerHTML
    console.log(event)
    output.innerHTML = "You Clicked on the" + elementText + "section"
}


for (let index = 0; index < aElement.length; index++) {
    aElement[0].classList.add("bold")
    aElement[aElement.length -1].classList.add("italic")
    
}


for (let index = 0; index < aElement.length; index++) {
    aElement.item(index).addEventListener("click",sectionClick)
    console.log("aElement",aElement)
    
}

title.addEventListener("mouseout", function(output){
    output.innerHTML = "YOU LEFT ME!! COME BACKKKK"
}) 
console.log(title)

button.addEventListener("click", function(){
    guineaPig.classList.toggle("blue")
})

enlargeButton.addEventListener("click", function(){
    guineaPig.classList.toggle("large")
})

borderButton.addEventListener("click",function(){
    guineaPig.classList.toggle("border")
})

roundingButton.addEventListener("click",function(){
 guineaPig.classList.toggle("round")

})

keyInput.addEventListener("keyup", function(event){
    output.innerHTML = event.target.value
})
