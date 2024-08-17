const svgns = "http://www.w3.org/2000/svg";
const animSpiral = 'windSpiral var(--rotation-speed) linear infinite';
const animOrbit = 'windOrbit var(--rotation-speed) linear infinite;';
const animPulse = 'windPulse var(--pulse-speed) infinite alternate';
const animFade = 'windFade var(--fade-speed) infinite alternate';
const animGlide = 'windGlide var(--glide-speed) infinite alternate';
const chatterSVG = document.getElementById("chatter");

let newElli = createSVGElement("ellipse");
let newCirc = createSVGElement("circle");
let newRect = createSVGElement("rect");
let newPath = createSVGElement("path");
var animations = [];
var glideSpeed = 30;
var rotationSpeed = 50;
var fadeSpeed = 40;
var pulseSpeed = 15;       

function createSVGElement(type){    return document.createElementNS(svgns, type); }

function createWhiteNoise(count){
    for (let i = 0; i < count; i++) {
        createWhisper({color:"white", y:3, x:5});
    }
}

function setProperty(duration) {
    var n_elements = $(".stroke").length;
    var random = Math.floor(Math.random()*n_elements);
    $(".stroke").eq(random).attr("style", "--rotation-speed: "+duration +"s");
}

function changeAnimationTime() {
    var time = Math.floor((Math.random() * 50) + 1);
    setProperty(time);
}

/*setInterval(changeAnimationTime, 1000);*/


function createWhisper({color, x, y}){
    let newWisp = createSVGElement('g')
    let stroke = createSVGElement("ellipse");
    glideSpeed = (Math.random() * 40) + 20; 
    const u = Math.floor((Math.random() * 360) + 1);
    const v = Math.floor((Math.random() * 10) - 10);  
    gsap.set(stroke, {
        attr: { rx:"100", ry:"3", fill: color}
    });    
    gsap.to(stroke, { "--glide-speed": glideSpeed+"s"});
    newWisp.classList.add("wisp");
    stroke.classList.add("stroke");    
    let animGlide = 'windGlide var(--glide-speed) infinite alternate';    
    animations.push(animGlide);
    stroke.style.animation = animGlide;    
    stroke.classList.add("glide");
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

function toggleAnimation(type){       
    switch(type) {
        case "spiral":
            switchSpiralAnimation();
            break;
        case "orbit":
            switchOrbitAnimation();
            break;
        case "glide":
            switchGlideAnimation();
            break;
        case "pulse":
            togglePulseAnimation();
            break;
        case "fade":
            toggleFadeAnimation();
            break;
    }
}
function toggleFadeAnimation(){    
    $(".stroke").each(function() { 
    fadeSpeed = (Math.random() * 20) + 5;
        if($(this).hasClass('fade')){
            animations = splice(animations, animFade);
            this.style.animation = arrToString(animations, ", ");  
            $(this).removeClass('fade');
        } else {                    
            animations.push(animFade);
            this.style.animation = arrToString(animations, ", ");
            gsap.to(this, {"--fade-speed": fadeSpeed+"s"});
            $(this).addClass('fade');
        }
    });     
}
function togglePulseAnimation(){   
    $(".stroke").each(function() { 
    pulseSpeed = (Math.random() * 30) + 15;  
        if($(this).hasClass('pulse')){
            animations = splice(animations, animPulse);
            this.style.animation = arrToString(animations, ", ");  
            $(this).removeClass('pulse');
        } else {                    
            animations.push(animPulse);
            this.style.animation = arrToString(animations, ", ");
            gsap.to(this, { "--pulse-speed": pulseSpeed+"s"});
            $(this).addClass('pulse');
        }
    });
}
function switchSpiralAnimation(){
    $(".stroke").each(function() {  
    rotationSpeed = (Math.random() * 60) + 30;
        if($(this).hasClass('spiral')){
            animations = splice(animations, animSpiral);
            animations.push(animOrbit);
            this.style.animation = arrToString(animations, ", ");  
            $(this).removeClass('spiral');
        } else {                    
            animations = splice(animations, animOrbit);
            animations = splice(animations, animGlide);
            animations.push(animSpiral);
            this.style.animation = arrToString(animations, ", ");
            gsap.to(this, { "--rotation-speed": rotationSpeed+"s"});
            $(this).addClass('spiral');
        } 
    });
}
function switchOrbitAnimation(){
    $(".stroke").each(function() {  
    rotationSpeed = (Math.random() * 60) + 30;
        if($(this).hasClass('orbit')){
            animations = splice(animations, animOrbit);
            animations.push(animGlide);
            this.style.animation = arrToString(animations, ", ");  
            $(this).removeClass('orbit');
        } else {                    
            animations = splice(animations, animSpiral);
            animations = splice(animations, animGlide);
            animations.push(animOrbit);
            this.style.animation = arrToString(animations, ", ");
            gsap.to(this, { "--rotation-speed": rotationSpeed+"s"});
            $(this).addClass('orbit');
        } 
     });
}
function switchGlideAnimation(){
    $(".stroke").each(function() {   
    glideSpeed = (Math.random() * 60) + 20;
        if($(this).hasClass('glide')){
            animations = splice(animations, animGlide);
            animations.push(animSpiral);
            this.style.animation = arrToString(animations, ", ");  
            $(this).removeClass('glide');
        } else {                    
            animations = splice(animations, animOrbit);
            animations = splice(animations, animSpiral);
            animations.push(animGlide);
            this.style.animation = arrToString(animations, ", ");
            gsap.to(this, { "--glide-speed": glideSpeed+"s"});
            $(this).addClass('glide');
        } 
    });
}




function getRandomCoordinate(){
    const u = Math.floor((Math.random() * 100) + 1);
    const v = Math.floor((Math.random() * 100) + 1);
    return {u, v};
}



/* UTILITIES */

function splice(array, string){
    const index = array.indexOf(string);
    if (index > -1) { // only splice array when item is found        
        console.log("Removing ... "+array[index]);
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
    return array;
}

function arrToString(array, delim){
    let string = array.join(delim);
    return string;
}