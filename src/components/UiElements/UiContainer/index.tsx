import { ReactNode } from "react";
import './style.scss';

interface UiContainerProps {
    children: ReactNode;
    maxWidth?: string;
    noGutters?: boolean;
    align?: 'start' | 'end';
}

const UiContainer: React.FC<UiContainerProps> = ({ children, maxWidth, noGutters, align }) => {
    return (
        <div className={`ui-container ${align} ${noGutters ? 'no-gutters': ''}`} style={{ maxWidth: maxWidth }}>
            {children}
        </div>
    );
}

export default UiContainer;