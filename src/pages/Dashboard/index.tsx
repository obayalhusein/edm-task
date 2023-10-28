import DashboardLayout from "../../layouts/DashboardLayout";
import ProductsTable from "../../components/ProductsTable";
import UiContainer from "../../components/UiElements/UiContainer";
import UiTextInput from "../../components/UiElements/UiTextInput";

const DashboardHomePage: React.FC = () => {
    return (
        <DashboardLayout>
            <UiContainer>
                <h1>Products</h1>
                <UiContainer maxWidth="200px" align="end" noGutters>
                    <UiTextInput
                        name="search"
                        label="Search..."
                        type="search"
                        value=""
                        onChange={() => {}}
                    />
                </UiContainer>
                <ProductsTable />
            </UiContainer>
        </DashboardLayout>
    );
}

export default DashboardHomePage;