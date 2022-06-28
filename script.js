



const container = document.querySelector('#container');

let width = 16;
let height = 16;

let i = width * height;

while (i <= 256) {

const content = document.createElement('div');
content.setAttribute("class","content");
content.textContent = '0';

container.appendChild(content);

i++;
}

let elements = document.querySelectorAll(".content");



function mouseOver() {
    console.log("moused over");
}

function mouseOut() {
    console.log("moused out");
}

document.("gridSizeButton")

let l = 1;

elements.forEach(element => {
        element.addEventListener('mouseover', (e)=>{
        element.style.background = "purple";
      
    });
 });


