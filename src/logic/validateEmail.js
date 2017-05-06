const validateEmail = (email) => {
    if (!email) return false;
    if (email.length < 8) return false;
    if (email.indexOf('@') < 1) return false;
    if (email.indexOf('@') !== email.lastIndexOf('@')) return false;
    if (email.indexOf('.') < 1) return false;
    if (email.lastIndexOf('.') < email.indexOf('@')) return false;
    return true;
};

export default validateEmail;
