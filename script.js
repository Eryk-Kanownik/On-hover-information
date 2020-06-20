var button = document.querySelector("button");
var main = document.querySelector(".main");

button.addEventListener('mouseover', (e) => {
    let {screenX, screenY} = e;
    let element = infoDivCreator(screenX,screenY)
    setTimeout(() => main.appendChild(element), 500)
})

button.addEventListener('mouseout', (e) => {
    let infoDiv = document.querySelector("#first")
    infoDiv.parentNode.removeChild(infoDiv)
})

function infoDivCreator(x,y){
    let infoDiv = document.createElement("div");
    infoDiv.style.display = "block"
    infoDiv.style.position = "absolute";
    infoDiv.style.top = `${y}px`;
    infoDiv.style.left = `${x}px`;
    infoDiv.style.zIndex = "1";
    infoDiv.id = "first";
    infoDiv.innerText = "You've got the message!"
    return infoDiv;
}