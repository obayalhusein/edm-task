import { useState } from 'react';
import UiButton from '../UiElements/UiButton';
import UiModal from '../UiElements/UiModal';
import { ProductData } from '../../types/productTypes';
import { deleteProduct } from '../../redux/products/actions';
import { useDispatch } from 'react-redux';
import UiIcon from '../UiElements/UiIcon';

interface ProductDeleteProps {
  item: ProductData
}

const ProductDelete: React.FC<ProductDeleteProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitModal = () => {
    // @ts-ignore
    dispatch(deleteProduct(item.id));
    setIsModalOpen(false);
  };

  return (
    <>
      <UiButton
        type="button"
        color="error"
        fill="text"
        iconOnly
        onClick={openModal}
      >
        <UiIcon
          name="trash"
          color="error"
        />
      </UiButton>
      <UiModal
        title="Delete Product"
        titleIcon="trash"
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={submitModal}
        isTypeConfirm
      >
        <p>
          Are you sure you want to delete <b>{item?.attributes?.title}</b>?
        </p>
      </UiModal>
    </>
  );
};

export default ProductDelete;