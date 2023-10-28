import DashboardLayout from "../../layouts/DashboardLayout";
import ProductsTable from "../../components/ProductsTable";
import UiContainer from "../../components/UiElements/UiContainer";

const DashboardHomePage: React.FC = () => {
    return (
        <DashboardLayout>
            <UiContainer>
                <h1>Products</h1>
                <ProductsTable />
            </UiContainer>
        </DashboardLayout>
    );
}

export default DashboardHomePage;