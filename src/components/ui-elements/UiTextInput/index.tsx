import React from 'react';
import './style.scss';

interface TextInputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

const UiTextInput: React.FC<TextInputProps> = ({ name, label, type, value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(name, newValue);
  };

  return (
    <div>
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UiTextInput;
