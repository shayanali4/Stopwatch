var min = 00;
var sec = 00;
var msec = 00;
var interval ;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');

function start(){
    interval = setInterval(timer,10);
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('reset').disabled = false;
}

function stop(){
    clearInterval(interval);
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
    document.getElementById('reset').disabled = false;
}

function reset(){
    stop();
     min= 00;
     sec= 00;
     msec= 00;
     minHeading.innerHTML = min;
     secHeading.innerHTML = sec;
     msecHeading.innerHTML = msec;
     document.getElementById('reset').disabled = true;
     document.getElementById('stop').disabled = false;
     document.getElementById('start').disabled = false;
}

function timer(){
    msec++
    msecHeading.innerHTML = msec ;
    if (msec>=99)
    {
        msec=0;
        sec++;
        secHeading.innerHTML = sec ;
    }
    else if (sec>=59){
        sec=0;
        min++;
        minHeading.innerHTML = min;
    }
}