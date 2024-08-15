const svgns = "http://www.w3.org/2000/svg";
let newElli = createSVGElement("ellipse");
let newCirc = createSVGElement("circle");
let newRect = createSVGElement("rect");
let newPath = createSVGElement("path");
const chatterSVG = document.getElementById("chatter");


function createSVGElement(type){    return document.createElementNS(svgns, type); }

function createWhiteNoise(count){
    for (let i = 0; i < count; i++) {
        const x = Math.floor((Math.random() * 80) + 1);
        const y = Math.floor((Math.random() * 80) + 1);
        const color = "white";
        let g = createSVGElement('g')
        const wisp = createSVGElement("ellipse");
        gsap.set(g, {
            attr: { transform: "translate("+x+" "+y+")", class:"bkgWisp" }
        });
        
        gsap.set(wisp, {
            attr: { rx:"10", ry:"3", cx:"120", cy:"80", fill: color }
        });
        g.appendChild(wisp);
        chatterSVG.appendChild(g);
    }
}

function createWhisper({color, x, y}){
    let newWisp = createSVGElement('g')
    let stroke = createSVGElement("ellipse");

    gsap.set(stroke, {
        attr: { rx:"10", ry:"3", cx:"120", cy:"80", fill: color }
    });
    gsap.set(g, {
        attr: { transform: "translate("+x+" "+y+")" }
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


/*document.getElementById("BKG").addEventListener("click", createWhiteNoise(Math.floor((Math.random() * 100) + 1)), false);*/


function getRandomCoordinate(){
    const u = Math.floor((Math.random() * 100) + 1);
    const v = Math.floor((Math.random() * 100) + 1);
    return {u, v};
}