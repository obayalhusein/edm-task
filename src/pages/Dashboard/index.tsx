import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProductsTable from "../../components/ProductsTable";
import UiContainer from "../../components/UiElements/UiContainer";
import UiTextInput from "../../components/UiElements/UiTextInput";
import UiButton from "../../components/UiElements/UiButton";

const DashboardHomePage: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = (name: string, value: string): void => {
        setSearchText(value);
    };

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
                            value={searchText}
                            onChange={handleSearch}
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
                <ProductsTable
                    searchText={searchText}
                />
            </UiContainer>
        </DashboardLayout>
    );
}

export default DashboardHomePage;