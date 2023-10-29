import React from 'react';
import './style.scss';

interface TextInputProps {
  name?: string;
  label: string;
  type: string;
  value: string;
  validate?: (value: string) => string;
  onChange: (value: string, name: string) => void;
}

const UiTextInput: React.FC<TextInputProps> = ({ name, label, type, value, validate, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue, name || '');
  };

  return (
    <div className="ui-text-input">
      <label className="ui-text-input-label">
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            className={`ui-text-input-label-field ${value ? 'active' : ''}`}
        />
        <div className="ui-text-input-label-text">
            {label}
        </div>
      </label>
      {validate && (
        <div className='ui-text-input-details'>
          {value.length > 3 ? validate(value) : ''}
        </div>
      )}
    </div>
  );
};

export default UiTextInput;
