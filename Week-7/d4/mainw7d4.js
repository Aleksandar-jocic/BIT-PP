$(document).ready(function () {


    let home = document.querySelector('#mainTemplate');
    let about = document.querySelector('#aboutTemplate');
    let placeHolder = document.querySelector('#placeHolder');

    document.getElementById('homeButton').addEventListener('click', function () {


        if (placeHolder.hasChildNodes()) {
 
            placeHolder.removeChild(about);

            placeHolder.appendChild(home);
            home.removeAttribute('class');

        } else {

            placeHolder.appendChild(home);
            home.removeAttribute('class');
        }

    })

    document.getElementById('aboutButton').addEventListener('click', function () {

        
        if (placeHolder.hasChildNodes()) {

            placeHolder.removeChild(home);

            placeHolder.appendChild(about);
            about.removeAttribute('class');

        } else {

            placeHolder.appendChild(about);
            about.removeAttribute('class');
        }

    })

});



