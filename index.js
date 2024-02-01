//document.getElementById("myH1").textContent='Hello this is Bornvejah';
//document.getElementById("myP").textContent='I like programming shiet';

//let fullname = "BORNVEJAH NYAMASYO";
//let age = 19;
//document.getElementById("p1").textContent =`My name is ${fullname}`;
//document.getElementById("p2").textContent = `I'm ${age}`;

//let username;
//username = window.prompt("What is your username?");

//console.log(username);

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value = "";

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Santax Error";
    }

}