const textElement = document.getElementById('text-code');
const viewElement = document.getElementById('view')

const update = () => {
    console.log(textElement.value);
    viewElement.srcdoc = textElement.value;
}

textElement.addEventListener('keydown', update);