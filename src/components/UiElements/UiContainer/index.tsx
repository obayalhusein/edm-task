import { ReactNode } from "react";
import './style.scss';

interface UiContainerProps {
    children: ReactNode;
    maxWidth?: string;
}

const UiContainer: React.FC<UiContainerProps> = ({ children, maxWidth }) => {
    return (
        <div className="ui-container" style={{ maxWidth: maxWidth }}>
            {children}
        </div>
    );
}

export default UiContainer;