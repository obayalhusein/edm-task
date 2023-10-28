import { ReactNode } from "react";
import './style.scss';

interface UiCardProps {
    children: ReactNode;
}

const UiCard: React.FC<UiCardProps> = ({ children }) => {
    return (
        <div className="ui-card">
            {children}
        </div>
    );
}

export default UiCard;