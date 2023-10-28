import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/actions';
import UiContainer from '../../components/UiElements/UiContainer';
import UiTextInput from '../../components/UiElements/UiTextInput';
import UiButton from '../../components/UiElements/UiButton';

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

    const handleInputChange = (name: string, value: string): void => {
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
        <UiContainer>
            <h1>Login</h1>

            {formData.error && <p className="error">{formData.error}</p>}
            
            <form onSubmit={handleSubmit}>
                <UiTextInput
                    name="identifier"
                    label="Email or UserName"
                    type="text"
                    value={formData.identifier}
                    onChange={handleInputChange}
                />
                
                <UiTextInput
                    name="password"
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <UiButton
                    label="Login"
                    type="submit"
                    color="primary"
                    onClick={handleSubmit}
                />
            </form>
        </UiContainer>
    );
};

export default LoginPage;