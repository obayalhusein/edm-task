import { FormEvent, ReactNode } from "react";
import './style.scss';

interface UiButtonProps {
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary' | 'warn' | 'error';
    fill?: 'text' | 'outline';
    fullWidth?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    onClick: (e: FormEvent) => void;
}

const UiButton: React.FC<UiButtonProps> = ({ label, type, color, fill, fullWidth, disabled, children, onClick }) => {
    return (
        <button type={type} className={`ui-button ${color || ''} ${fill || ''} ${fullWidth ? 'full-width' : ''}`} onClick={onClick} disabled={disabled}>
          {label ? label : children }
        </button>
    );
}

export default UiButton;