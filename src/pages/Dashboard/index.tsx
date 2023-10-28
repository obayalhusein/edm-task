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

                    <div className="flex align-center">
                        <UiTextInput
                            name="search"
                            label="Search..."
                            type="search"
                            value=""
                            onChange={() => {}}
                        />
                        &nbsp;
                        <UiButton
                            label="Add Product"
                            type="button"
                            color="primary"
                            fill="outline"
                            onClick={() => {}}
                        />
                    </div>
                </div>
                <ProductsTable />
            </UiContainer>
        </DashboardLayout>
    );
}

export default DashboardHomePage;