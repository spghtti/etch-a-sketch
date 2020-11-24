let arrayDiv = new Array();

function createDivs () {
    let rowsAndColumns = prompt("How many rows/columns? (<=100)", "");

    if ((rowsAndColumns % 1 === 0) && (rowsAndColumns > 0 && rowsAndColumns < 101)) {
        for (i = 0; i < (rowsAndColumns * rowsAndColumns); i++) {

            let container = document.querySelector(".container");
            arrayDiv[i] = document.createElement('div');
            arrayDiv[i].addEventListener('mouseenter', changeColor);
            arrayDiv[i].style.backgroundColor = 'rgb(255, 255, 255)';
            arrayDiv[i].className = "child";
            arrayDiv[i].style.width = ((1 / rowsAndColumns) * 100) + "%";
            container.appendChild(arrayDiv[i]);
            
        }
    } else {
        createDivs();
    }
}

createDivs();

function changeColor() {
    console.log(this.style.backgroundColor);
    this.style.backgroundColor = 'black';
    this.style.opacity -= '-.1';
}

function clearDivs() {
    let pixels = document.getElementsByClassName('child');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";
    }

    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    createDivs();
}