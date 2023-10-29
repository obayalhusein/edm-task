import { useState } from "react";
import UiButton from "../UiElements/UiButton";
import UiModal from "../UiElements/UiModal";
import UiRow from "../UiElements/UiRow";
import UiCol from "../UiElements/UiCol";
import UiTextInput from "../UiElements/UiTextInput";
import { isNumberValid, isTextValid } from "../../utils/validators";
import { ProductData } from "../../types/ProductTypes";

interface DeleteProductFormState {
    title: string;
    price: number;
    quantity: number;
    description: string;
}

interface ProductDeleteProps {
    item: ProductData
}

const ProductDelete: React.FC<ProductDeleteProps> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<DeleteProductFormState>({
        title: item.attributes.title,
        price: item.attributes.price,
        quantity: item.attributes.quantity,
        description: item.attributes.description,
    });

    const handleInputChange = (value: string, name: string): void => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

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