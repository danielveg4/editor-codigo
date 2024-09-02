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