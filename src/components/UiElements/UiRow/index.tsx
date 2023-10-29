import { ReactNode } from 'react';
import './style.scss';

interface UiRowProps {
    children?: ReactNode;
}

const UiRow: React.FC<UiRowProps> = ({ children }) => {
    return (
        <div className="ui-row">
            {children}
        </div>
    );
}

export default UiRow;