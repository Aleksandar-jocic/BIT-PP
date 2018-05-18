'use strict';

(function () {

    function Genre(genreName) {
        this.genre = genreName;
        this.getData = function (genre) {
            var genreRes = '';
            genreRes = this.genre[0] + this.genre[this.genre.length - 1];
            return genreRes
        }
    }

    function Movie(title, genre, movLength) {
        this.title = title;
        this.genre = genre;
        this.movLength = movLength;
        this.getData = function () {
            var movieRes = '';
            movieRes = this.title + ', ' + this.movLength + ', ' + this.genre.getData();
            return movieRes
        }
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumMovies = 0;
        this.addMovie = function (title) {
            this.listOfMovies.push(title);
            this.totalNumMovies++;
        }
        this.getData = function () {
            var programRes = '';
            var totalLength = 0;
            //f-ja za listu
            var totalList = '';
            for (var k = 0; k < this.listOfMovies.length; k++) {
                totalList += this.listOfMovies[k].getData() + '\n';
            }
            //for loop za ukupnu minutazu
            for (var i = 0; i < this.listOfMovies.length; i++) {
                totalLength += this.listOfMovies[i].movLength
            }
            //konacan rez
            programRes = this.date + ', ' + totalLength + 'mins ' + '\n' + totalList;

            return programRes;
        }


    }
    function Festival(festName) {
        this.festName = festName;
        this.listOfPrograms = [];
        this.totalNumPrograms = 0;
        this.addProgram = function (festName) {
            this.listOfPrograms.push(festName);
        }
        this.getData = function () {
            //continue w for loop 
            this.festName + ' has ' + this.tota
        }
    }

    //genres
    var thriller = new Genre('thriller');
    var crime = new Genre('crime');
    var action = new Genre('action');
    var drama = new Genre('drama');
    //movies
    var Shawshank = new Movie('The Shawshank Redemption', thriller, 130);
    var Godfather = new Movie('The Godfather', crime, 175);
    var DarkKnight = new Movie('The Dark Knight', action, 152);
    var Goodfellas = new Movie('Goodfellas ', drama, 146);

    //festivals
    var oktobarFest = new Festival('oktobarFest');

    //programs
    var cartoon = new Program('07/07/2018')
    var anime = new Program('23/09/2018');


    // console.log(thriller);
    // console.log(Shawshank);
    // console.log(exitFest);
    cartoon.addMovie(Shawshank);
    cartoon.addMovie(Godfather);
    cartoon.addMovie(DarkKnight);
    anime.addMovie(Goodfellas);
    oktobarFest.addProgram(cartoon);
    oktobarFest.addProgram(anime);




    console.log(cartoon.getData());
    console.log(anime.getData());
    console.log(oktobarFest.getData());
    console.log(exitFest.getData());






})();

