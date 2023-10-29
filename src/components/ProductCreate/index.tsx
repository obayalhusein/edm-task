import { useState } from "react";
import UiButton from "../UiElements/UiButton";
import UiModal from "../UiElements/UiModal";
import UiRow from "../UiElements/UiRow";
import UiCol from "../UiElements/UiCol";
import UiTextInput from "../UiElements/UiTextInput";
import { isNumberValid, isTextValid } from "../../utils/validators";
import { addProduct } from "../../redux/products/actions";
import { useDispatch } from "react-redux";

interface CreateProductFormState {
  title: string;
  price: number;
  quantity: number;
  description: string;
}

const ProductCreate: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<CreateProductFormState>({
    title: '',
    price: 0,
    quantity: 1,
    description: '',
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
    dispatch(addProduct(formData));
    setIsModalOpen(false);
    setFormData({
      title: "",
      price: 0,
      quantity: 1,
      description: "",
    });
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
        onSubmit={submitModal}
      >
        <UiRow>
          <UiCol cols={12} sm={12}>
            <UiTextInput
              name="title"
              label="Title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              validate={isTextValid}
            />
          </UiCol>
          <UiCol cols={12} sm={6}>
            <UiTextInput
              name="price"
              label="Price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              validate={isNumberValid}
            />
          </UiCol>
          <UiCol cols={12} sm={6}>
            <UiTextInput
              name="quantity"
              label="Quantity"
              type="number"
              value={formData.quantity}
              onChange={handleInputChange}
              validate={isNumberValid}
            />
          </UiCol>
          <UiCol cols={12} sm={12}>
            <UiTextInput
              name="description"
              label="description"
              type="text"
              value={formData.description}
              onChange={handleInputChange}
              validate={isTextValid}
            />
          </UiCol>
        </UiRow>
      </UiModal>
    </>
  );
};

export default ProductCreate;