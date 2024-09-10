/* 
const getUsers = url => {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => console.log('recibiendo información del resolve'))
        .catch(error => console.log(error));
}

getUsers('https://jsonplaceholder.typicode.com/users')

*/

/* const getUsers = async url => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers('https://jsonplaceholder.typicode.com/users'); */


const advideTextElement = document.getElementById('adviceText');
const adviceButtonElement = document.getElementById('adviceButton');


let advice = '';
advideTextElement.textContent = advice;

const getAdvide = async url => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return advice = data.slip.advice;
    } catch (error) {
        console.log(error);
    }
}

adviceButtonElement.addEventListener('click', () => {
    getAdvide('https://api.adviceslip.com/advice');
});
