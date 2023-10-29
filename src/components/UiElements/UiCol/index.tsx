import { ReactNode } from 'react';
import './style.scss';

interface UiColProps {
    children?: ReactNode
    cols?: number
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
}

const UiCol: React.FC<UiColProps> = ({ children, cols, xs, sm, md, lg, xl }) => {
    const colClass = getClassNames({ cols, xs, sm, md, lg, xl });

    return (
        <div className={colClass}>
            {children}
        </div>
    );
}

export default UiCol;


function getClassNames({ cols, xs, sm, md, lg, xl }: UiColProps) {
    const classList = ['ui-col'];
  
    if (cols) {
      classList.push(`ui-col-${cols}`);
    }
  
    if (xs) {
      classList.push(`ui-col-xs-${xs}`);
    }
  
    if (sm) {
      classList.push(`ui-col-sm-${sm}`);
    }
  
    if (md) {
      classList.push(`ui-col-md-${md}`);
    }
  
    if (lg) {
      classList.push(`ui-col-lg-${lg}`);
    }
  
    if (xl) {
      classList.push(`ui-col-xl-${xl}`);
    }
  
    return classList.join(' ');
  }