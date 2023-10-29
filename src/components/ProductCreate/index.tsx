import { useState } from "react";
import UiButton from "../UiElements/UiButton";
import UiModal from "../UiElements/UiModal";
import UiRow from "../UiElements/UiRow";
import UiCol from "../UiElements/UiCol";

const ProductCreate: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <UiButton
                label="Add Product"
                type="button"
                color="primary"
                fill="outline"
                onClick={openModal}
            />
            <UiModal
                title="Add Product"
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <UiRow>
                    <UiCol cols={12} sm={6}>input 1</UiCol>
                    <UiCol cols={12} sm={6}>input 2</UiCol>
                </UiRow>
                Create Product Form
            </UiModal>
        </>
    );
}

export default ProductCreate;