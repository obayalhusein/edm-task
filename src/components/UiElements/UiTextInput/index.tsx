import React from 'react';
import './style.scss';
import UiIcon from '../UiIcon';

interface TextInputProps {
  name?: string;
  label: string;
  type: string;
  value: string | number;
  appendIcon?: string;
  validate?: (value: string | number) => string;
  onChange: (value: string, name: string) => void;
}

const UiTextInput: React.FC<TextInputProps> = ({ name, label, type, value, appendIcon, validate, onChange }) => {
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
        <div className="ui-text-input-label-append-icon">
          <UiIcon
              name={appendIcon || ''}
              color="muted"
          />
        </div>
      </label>
      {validate && (
        <div className='ui-text-input-details'>
          {(typeof value === 'string' && value.length > 3) || (typeof value === 'number') ? validate(value): ''}
        </div>
      )}
    </div>
  );
};

export default UiTextInput;
