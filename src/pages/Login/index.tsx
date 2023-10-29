import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/auth/actions';
import UiContainer from '../../components/UiElements/UiContainer';
import UiTextInput from '../../components/UiElements/UiTextInput';
import UiButton from '../../components/UiElements/UiButton';
import UiCard from '../../components/UiElements/UiCard';
import { isEmailValid, isPasswordValid } from '../../utils/validators';
import { useNavigate } from 'react-router-dom';
import './style.scss';

interface LoginFormState {
  identifier: string;
  password: string;
  error: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [formData, setFormData] = useState<LoginFormState>({
    identifier: '',
    password: '',
    error: '',
  });

  const handleInputChange = (value: string, name: string): void => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Dispatch login action
    dispatch(
      loginAction({
        identifier: formData.identifier,
        password: formData.password,
      })
    ).then((res: boolean) => {
      if (res) {
        nav('/dashboard');
      }
    });

    // Reset form
    setFormData({ identifier: '', password: '', error: '' });
  };

  return (
    <div className="bg-primary flex flex-column justify-center h-100">
      <UiContainer maxWidth="550px">
        <div className="auth-card">
          <h1 className="auth-card-title">Welcome Back!</h1>
          <p className="auth-card-subtitle">Unlock Your World</p>
          <UiCard>

            {formData.error && <p className="error">{formData.error}</p>}

            <form onSubmit={handleSubmit}>
              <div>
                <UiTextInput
                  name="identifier"
                  label="Your Email"
                  type="text"
                  value={formData.identifier}
                  onChange={handleInputChange}
                  validate={isEmailValid}
                />
              </div>

              <div>
                <UiTextInput
                  name="password"
                  label="Your Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  validate={isPasswordValid}
                />
              </div>

              <div>
                <UiButton
                  label="Login"
                  type="submit"
                  color="primary"
                  disabled={!!isEmailValid(formData.identifier) || !!isPasswordValid(formData.password)}
                  fullWidth
                  onClick={handleSubmit}
                />
              </div>

            </form>
          </UiCard>
        </div>
        <div className="auth-effects">
          <img className="effect effect-cloud1" src="images/cloud1.webp" />
          <img className="effect effect-cloud2" src="images/cloud2.webp" />
          <img className="effect effect-gift" src="images/gift.webp" />
          <img className="effect effect-laptop" src="images/laptop.webp" />
          <img className="effect effect-shopping-cart1" src="images/shopping-cart1.webp" />
          <img className="effect effect-shopping-cart2" src="images/shopping-cart2.webp" />
        </div>
      </UiContainer>
    </div>
  );
};

export default LoginPage;