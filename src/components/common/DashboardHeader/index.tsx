import UiButton from '../../UiElements/UiButton'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import UiIcon from '../../UiElements/UiIcon';

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
        onClick={logoutAction}
        fill="text"
        iconOnly
      >
        <UiIcon
          name="logout"
          color="white"
        />
      </UiButton>
    </div>
  );
};

export default DashboardHeader;