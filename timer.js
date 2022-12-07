let timerid;
let counter = 0;

function incrementTime(){
    counter ++;
    document.querySelector("#count").innerText = counter;
}

function start(){
    if(!timerid){
        timerid = setInterval(incrementTime, 1000);
    }
}
function stop(){
    clearInterval(timerid)
    timerid = null;
}

function reset(){
    counter = 0;
    document.querySelector("#count").innerText = counter;
    clearInterval(timerid)
    timerid = null;
}


