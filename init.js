const jsonMalFormado = '{"error"'; // JSON incompleto

let object;

try {
    object = JSON.parse(jsonMalFormado);
    console.log("Objeto parseado:", object);
} catch (err) {
    console.log('Te está dando el siguiente error: ', err.message);
    object = {}; 
} finally {
    console.log("Objeto final:", object);
}

const fatal = 'dfjaijda}';

let object2;

try {
    object2 = JSON.parse(fatal);
    console.log('object: ', object);
} catch (err) {
    console.log('te está dando error: ', err.message);
    object2 = 18;
} finally {
    console.log('el object tiene que ser 18', object2);
}

console.log('hola mundo');

const objectDinamica = {
    name: 'Juan',
    age: 25,
    email: 'dadsa@gmail.com'
}   

let propertyName = 'gender';
let propertyValue = 'male';

objectDinamica[propertyName] = propertyValue;
console.log(objectDinamica); 

/* this constructor de objeto */

class Juego {
    constructor({ name = "Sin nombre", designer = "Desconocido", players = "Sin determinar" } = {}) {
        this.name = name;
        this.designer = designer;
        this.players = players;
    }
    
    show() {
        console.log(`El juego, ${this.name}, fue diseñado por ${this.designer} y puede ser jugado por ${this.players} jugadores.`);
    }
}

let juego1 = new Juego({ name: "Monopoly", designer: "Hasbro", players: "2-8" });
let juego2 = new Juego({ name: "Risk", designer: "Albert", players: "2-6" });
juego1.show(); 
juego2.show();

/* extendiendo una clase de otra reutilizando un código de la clase padre */

class Student {
    constructor(name, course) {
    this.name = name;
    this.course = course;
    }
    defineYourself() {
    return 'Soy ' + this.name + ' y estudio ' + this.course;
    }
}

class Erasmus extends Student {
    constructor(name, course, country) {
    super(name, course); // ejecuta la función constructora de la clase padre
    this.country = country;
    }
    defineYourself() {
    let definition = super.defineYourself();
    return definition + ' y provengo de ' + this.country;
}
}

let student1 = new Student('Juan', 'Informática');
let student2 = new Erasmus('Maria', 'Derecho', 'Italia');
console.log(student1.defineYourself());
console.log(student2.defineYourself());

/* props declaradas en clases */

class Range {
    min;
    max = 1000;
    static type = 'Integer range'
    constructor(min, max) {
    this.min = parseInt(min);
    this.max = parseInt(max);
    }
    show() {
    console.log(`[${this.min} - ${this.max}]`);
    }
}

let range1 = new Range(50, 100);
let range2 = new Range(200, 300);
range1.show();
range2.show();