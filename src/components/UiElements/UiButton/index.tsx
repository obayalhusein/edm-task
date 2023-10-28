import { FormEvent, ReactNode } from "react";
import './style.scss';

interface UiButtonProps {
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary';
    fill?: 'text' | 'outline';
    children?: ReactNode;
    onClick: (e: FormEvent) => void;
}

const UiButton: React.FC<UiButtonProps> = ({ label, type, color, fill, children, onClick }) => {
    return (
        <button type={type} className={`ui-button ${color} ${fill}`} onClick={onClick}>
          {label ? label : children }
        </button>
    );
}

export default UiButton;