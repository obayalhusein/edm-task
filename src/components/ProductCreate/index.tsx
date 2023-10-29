import { useState } from "react";
import UiButton from "../UiElements/UiButton";
import UiModal from "../UiElements/UiModal";

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
                Create Product Form
            </UiModal>
        </>
    );
}

export default ProductCreate;