const relogio = document.querySelector('.relogio');
let hr = 00;
let min = 00;
let seg = 00;
let cron;
let clique;

start = () => {
    relogio.classList.remove('pausado');
    if (clique == 'start') {
        return
    } if (clique = 'start') {
        cron = setInterval(() => {timer();}, 1000);
    }
};

pause = () =>{
    relogio.classList.add('pausado');
    clique = 'pause';
    clearInterval(cron);
};

reset = () =>{ 
    relogio.classList.remove('pausado');
    clique = 'reset';
    clearInterval(cron);
    hr = 00;
    min = 00;
    seg = 00;

    document.querySelector('.relogio').innerHTML = '00:00:00'    
};

timer = () =>{
    seg++
    
    if (seg == 60) {
        seg = 0;
        min++;
       }
        if (min == 60) {
        min = 0;
        hr++;
       }

    let format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.querySelector('.relogio').innerHTML = format
};
