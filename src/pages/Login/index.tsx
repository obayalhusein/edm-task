import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/actions';

interface LoginFormState {
    identifier: string;
    password: string;
    error: string;
}

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<LoginFormState>({
        identifier: '',
        password: '',
        error: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!formData.identifier || !formData.password) {
        setFormData({ ...formData, error: 'Please fill in all fields' });
        return;
        }

        // Dispatch login action
        dispatch(loginAction({
            identifier: formData.identifier,
            password: formData.password
        }));

        // Reset form
        setFormData({ identifier: '', password: '', error: '' });
    };

    return (
        <div className="login-container">
        <h2>Login</h2>
        {formData.error && <p className="error">{formData.error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
            <label>Email or UserName:</label>
            <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleInputChange}
            />
            </div>
            <div>
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    );
};

export default LoginPage;