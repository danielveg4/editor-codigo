const textElement = document.getElementById('text-code');
const viewElement = document.getElementById('preview');

const saveToLocalStorage = () => {
    localStorage.setItem('code', textElement.value);
};

const loadFromLocalStorage = () => {
    try {
        const savedCode = localStorage.getItem('code');
        if (savedCode) {
            textElement.value = savedCode;
            updatePreview();  
        }
    } catch (error) {
        console.error('error al cargar código desde LS:', error);
    }
};

const updatePreview = () => {
    try {
        const code = textElement.value;
        viewElement.srcdoc = code;
    } catch (error) {
        console.error('error al actualizar vista previa:', error);
    }
};

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const handleInput = debounce(() => {
    updatePreview();
    saveToLocalStorage();
}, 300);


const handleKeyboardShortcuts = (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveToLocalStorage();
        console.log('código guardado!');
    }
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        updatePreview();
        console.log('código lanzado!')
    }
};

loadFromLocalStorage(); 

textElement.addEventListener('input', handleInput);
document.addEventListener('keydown', handleKeyboardShortcuts);