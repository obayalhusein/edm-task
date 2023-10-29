import { useState } from "react";
import UiButton from "../UiElements/UiButton";
import UiModal from "../UiElements/UiModal";
import { ProductData } from "../../types/ProductTypes";

interface ProductDeleteProps {
    item: ProductData
}

const ProductDelete: React.FC<ProductDeleteProps> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const submitModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <UiButton
                label="Delete"
                type="button"
                color="error"
                fill="text"
                onClick={openModal}
            />
            <UiModal
                title="Delete Product"
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={submitModal}
                isTypeConfirm
            >
                <p>Are you sure you want to delete <b>{item.attributes.title}</b>?</p>
            </UiModal>
        </>
    );
}

export default ProductDelete;