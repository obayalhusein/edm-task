import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/actions';

interface LoginFormState {
  email: string;
  password: string;
  error: string;
}

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<LoginFormState>({
        email: '',
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
        if (!formData.email || !formData.password) {
        setFormData({ ...formData, error: 'Please fill in all fields' });
        return;
        }

        // Dispatch login action
        dispatch(loginAction({
            email: formData.email,
            password: formData.password
        }));

        // Reset form
        setFormData({ email: '', password: '', error: '' });
    };

    return (
        <div className="login-container">
        <h2>Login</h2>
        {formData.error && <p className="error">{formData.error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
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