import { useState } from 'react';
import UiButton from '../UiElements/UiButton';
import UiModal from '../UiElements/UiModal';
import UiRow from '../UiElements/UiRow';
import UiCol from '../UiElements/UiCol';
import UiTextInput from '../UiElements/UiTextInput';
import { isNumberValid, isTextValid } from '../../utils/validators';
import { ProductData } from '../../types/productTypes';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../redux/products/actions';

interface EditProductFormState {
  title: string;
  price: number;
  quantity: number;
  description: string;
}

interface ProductEditProps {
  item: ProductData
}

const ProductEdit: React.FC<ProductEditProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<EditProductFormState>({
    title: item?.attributes?.title,
    price: item?.attributes?.price,
    quantity: item?.attributes?.quantity,
    description: item?.attributes?.description,
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
    // @ts-ignore
    dispatch(editProduct({ ...formData, id: item.id })
    );
    setIsModalOpen(false);
  };

  return (
    <>
      <UiButton
        label="Edit"
        type="button"
        color="primary"
        fill="text"
        onClick={openModal}
      />
      <UiModal
        title="Edit Product"
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

export default ProductEdit;