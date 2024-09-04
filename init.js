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