export const isEmailValid = (email: string): string => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    const errorMessage = isValid ? '' : 'Please enter a valid email address';
    return errorMessage;
};

export const isPasswordValid = (password: string): string => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^().])[A-Za-z\d@$!%*?&#^().]{8,}$/;
    const isValid = passwordRegex.test(password);
    const errorMessage = isValid ? '' : 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    return errorMessage;
};
