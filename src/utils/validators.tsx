export const isEmailValid = (email: string | number): string => {
    if(typeof(email) == 'number') return '';
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    const errorMessage = isValid ? '' : 'Please enter a valid email address';
    return errorMessage;
};

export const isPasswordValid = (password: string | number): string => {
    if(typeof(password) == 'number') return '';
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^().])[A-Za-z\d@$!%*?&#^().]{8,}$/;
    const isValid = passwordRegex.test(password);
    const errorMessage = isValid ? '' : 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    return errorMessage;
};

export const isTextValid = (text: string | number): string => {
    if(typeof(text) == 'number') return '';
    
    const textRegex = /^[A-Za-z0-9\s!@#$%^&*()-_+={}[\]:;"'<>,.?/|]*$/;
    const isValid = textRegex.test(text);
    const errorMessage = isValid ? '' : 'Text contains invalid characters or symbols';
    return errorMessage;
};

export const isNumberValid = (number: string | number): string => {
    const numberRegex = /^[0-9]*$/;
    const isValid = numberRegex.test(number.toString());
    const errorMessage = isValid ? '' : 'Number contains invalid characters or symbols';
    return errorMessage;
}