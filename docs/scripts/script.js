const svgns = "http://www.w3.org/2000/svg";
let newElli = createSVGElement("ellipse");
let newCirc = createSVGElement("circle");
let newRect = createSVGElement("rect");
let newPath = createSVGElement("path");
const chatterSVG = document.getElementById("chatter");
function createSVGElement(type){    return document.createElementNS(svgns, type); }

function createWhiteNoise({count}){
    for (let i = 0; i < count; i++) {
        const {x, y} = getRandomCoordinate();
        const color = "black";
        const star = createWhisper({color, x, y});
    }
}

function createWhisper({color, x, y}){
    let newWisp = createSVGElement('g')
    let stroke = createSVGElement("ellipse");

    gsap.set(stroke, {
        attr: { x: x, y: y, width: 100, height: 100, fill: color }
    });
    newWisp.appendChild(stroke);
    chatterSVG.appendChild(newWisp);
}

function populateChatter(){

}
function populateEchoes(){

}
function fetch(){

}
function overlay(){

}




function getRandomCoordinate(){

}