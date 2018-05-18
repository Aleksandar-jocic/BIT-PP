var listen = document.querySelector('body');
var but = document.querySelector('input');


listen.addEventListener('click', event);
but.addEventListener('click', stop);



function event(event) {
    var x = (event.clientX - 54) + 'px';
    var y = (event.clientY - 70) + 'px';

    var play = document.querySelector('.player');

    console.log(x);
    console.log(y);

    play.style.top = y;
    play.style.left = x;


}


function stop() {
    var play = document.querySelector('.player');
    play.className = 'stopplay';
}