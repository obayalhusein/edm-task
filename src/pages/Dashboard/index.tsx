import DashboardLayout from "../../layouts/DashboardLayout";
import ProductsTable from "../../components/ProductsTable";
import UiContainer from "../../components/UiElements/UiContainer";
import UiTextInput from "../../components/UiElements/UiTextInput";
import UiButton from "../../components/UiElements/UiButton";

const DashboardHomePage: React.FC = () => {
    return (
        <DashboardLayout>
            <UiContainer>
                <div className="flex justify-between">
                    <h1>
                        Products
                    </h1>

                    <UiButton
                        label="Add Product"
                        type="button"
                        color="primary"
                        fill="outline"
                        onClick={() => {}}
                    />
                </div>
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