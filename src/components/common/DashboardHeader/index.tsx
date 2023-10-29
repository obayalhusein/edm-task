import UiButton from '../../UiElements/UiButton'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const DashboardHeader: React.FC = () => {
  const nav = useNavigate();
  
  const logoutAction = () => {
    localStorage.removeItem('token');
    nav('/login');
  };

  return (
    <div className="dashboard-header bg-primary">
      <div className="dashboard-header-brand">EDM</div>
      <UiButton
        label="Logout"
        onClick={logoutAction}
      />
    </div>
  );
};

export default DashboardHeader;