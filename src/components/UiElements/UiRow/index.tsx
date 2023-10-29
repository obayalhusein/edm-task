import { ReactNode } from 'react';
import './style.scss';

interface UiRowProps {
    noGutters?: boolean
    children?: ReactNode
}

const UiRow: React.FC<UiRowProps> = ({ children, noGutters }) => {
    return (
        <div className={`ui-row ${noGutters ? 'ui-row-no-gutters' : ''}`}>
            {children}
        </div>
    );
}

export default UiRow;