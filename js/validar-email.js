import { validateEmail } from "./modules/validate-email.js"; 

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('email').addEventListener('input', (e) => {
        let msg = validateEmail(e.target.value) ? 'Email válido' : 'Email inválido';
        document.getElementById('msg').textContent = msg; 
    });
});
