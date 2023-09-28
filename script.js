// Model
const app = document.getElementById('app');
const coordinates = {
    dot: {
        y: null,
        x: null,
    },
    cursor: {
        y: null,
        x: null,
    },
};
// View

updateView();
function updateView(){
    
    html = /*html*/ `
    <div id="place1" >Rød</div>
    <div id="myGrid">
    </div>
    <div id="dotGrid">
        <div id="myDot" onclick="newPlace(this)" onmousemove="myColor(this)"></div>
    </div>
    
    `;
    app.innerHTML = html;
}
init();
// Controler

function newPlace(dot){
    let newArea = randomPlace();
    console.log(newArea);
    dot.style.gridArea = newArea;
}

function randomPlace(){
    let y = Math.floor((Math.random())*20);
    let x = Math.floor((Math.random())*42);
    //coordinates.dot.y = y;
    //coordinates.dot.x = x;
    let newrandomPlace = y + '/' + x;
    //console.log(newrandomPlace);
    logCoDot(y, x);
    return(newrandomPlace);
}

function init(){
    let newArea = randomPlace();
    let firstDot= document.getElementById("myDot");
    firstDot.style.gridArea = newArea;
    
}

function myColor(){
let place = document.getElementById("place1");
let myDot = document.getElementById("myDot");
let space = distance(coordinates.dot.x, coordinates.dot.y, coordinates.cursor.x, coordinates.cursor.y);
if(space<=0){
    place.style.backgroundColor = "#ff0000";
    console.log('haha');
    myDot.innerHTML = `<img id="flame" src="icons8-flame-96.png">`;
    let fire = document.getElementById("flame");
    fire.style.gridArea = myDot.style.gridArea;
}
else if(space>0 && space<2){
    place.style.backgroundColor = "#ff5e00";
}
else if(space>=2 && space<5){
    
    place.style.backgroundColor = "#ff9100";
}
else if(space>=5 && space<10){
    
    place.style.backgroundColor = "#ffd000";
}
else if(space>=10 && space<15){
    
    place.style.backgroundColor = "#d9ff00";
}
else if(space>=15 && space<20){
    
    place.style.backgroundColor = "#91ff00";
}
else if(space>=20 && space<25){
    
    place.style.backgroundColor = "#00ff0d";
}
else if(space>=25 && space<30){
    
    place.style.backgroundColor = "#00ff88";
}
else if(space>=30 && space<35){
    
    place.style.backgroundColor = "#00eeff";
}
else if(space>=35 && space<40){
    
    place.style.backgroundColor = "#0077ff";
}
else if(space>=40){
    
    place.style.backgroundColor = "#4400ff";
}


}

function comparePlace(){
    let place = document.getElementById("place1");
    //console.log(coordinates.cursor);
    //console.log(coordinates.dot);

    if(coordinates.cursor.y == coordinates.dot.y && coordinates.cursor.x == coordinates.dot.x){
        //console.log(coordinates.dot.y);
        //console.log(coordinates.cursor.y);
        console.log('braa');
        place.innerText = 'bruh';
    }
    
}

function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}


function logCo(y, x){
    console.log(y, x);
    coordinates.cursor.y = y;
    coordinates.cursor.x = x;
}
function logCoDot(y, x){
    coordinates.dot.y = y-1;
    coordinates.dot.x = x-1;
}

divGen();
function divGen(){
    let j=0;
    while(j<20){
        for(let i=0; i<42; i++){
            document.getElementById("myGrid").innerHTML += `<div id="${j}/${i}" onmousemove="myColor(); logCo(${j}, ${i}); comparePlace()"></div>`;
        }j++
    }
}
