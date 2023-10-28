import { ReactNode } from "react";
import './style.scss';

const UiContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="ui-container">
            {children}
        </div>
    );
}

export default UiContainer;