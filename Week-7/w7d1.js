class Person {
    constructor (name, surname) {
        this.name = name,
        this.surname = surname
    }

    printPersonData() {
        console.log(this.name + ' ' + this.surname);        
    }
}   

class Programmer extends Person {
    constructor (name, surname, language){
    super(name,surname),
    this.language = language
    }

    printProgramerData(){
        console.log (super.printPersonData() + this.language);
    }

    learnedNewLanguage(lang){
        this.language += ', ' + lang;
    }
}

var Mika = new Programmer('Mika','Mikic',"Java");
Mika.printProgramerData();
Mika.learnedNewLanguage('Python');
console.log(Mika);
