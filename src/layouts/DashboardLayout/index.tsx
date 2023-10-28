import { ReactNode } from "react";
import './style.scss';
import DashboardHeader from "../../components/common/DashboardHeader";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
        <DashboardHeader />
        <main>
            {children}
        </main>
    </div>
  );
}

export default DashboardLayout;