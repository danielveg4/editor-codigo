const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const validateEmail = (email) => {
    if(!email || email == '') return false;
    return emailReg.test(email);
}