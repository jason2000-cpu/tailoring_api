const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export function validateEmail(email: string): Boolean {
    return emailRegex.test(email);
}

export function validatePassword(password: string): Boolean {
    return passwordRegex.test(password);
}
