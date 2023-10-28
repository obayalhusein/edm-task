import UiButton from '../../UiElements/UiButton';
import './style.scss';

const DashboardHeader: React.FC = () => {

    return (
        <div className="dashboard-header bg-primary">
            <div className="dashboard-header-brand">EDM</div>
            <UiButton
                label="Logout"
                onClick={() => { console.log('Logout') }}
            />
        </div>
    );
}

export default DashboardHeader;