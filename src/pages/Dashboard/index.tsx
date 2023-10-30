import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProductsTable from "../../components/ProductsTable";
import UiContainer from "../../components/UiElements/UiContainer";
import UiTextInput from "../../components/UiElements/UiTextInput";
import ProductCreate from "../../components/ProductCreate";

const DashboardHomePage: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = (value: string): void => {
        setSearchText(value);
    };

    return (
        <DashboardLayout>
            <UiContainer>
                <div className="page-header flex align-center justify-between">
                    <h1 className="no-gutter">
                        Products
                    </h1>

                    <div className="flex align-center">
                        <UiTextInput
                            label="Search..."
                            type="search"
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <ProductCreate />
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