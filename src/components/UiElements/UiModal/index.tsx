import { ReactNode } from 'react';
import './style.scss';
import UiCard from '../UiCard';
import UiButton from '../UiButton';

interface UiModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const UiModal: React.FC<UiModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
        <div className="modal-wrapper-content">
            <UiCard>
                <div className="flex justify-between">
                    <h3>{title}</h3>
                    <UiButton onClick={onClose} fill="text">
                        X
                    </UiButton>
                </div>
                <div>
                    {children}
                </div>
                <div className="flex justify-end">
                    <UiButton onClick={onClose}>
                        Close
                    </UiButton>
                    &nbsp;
                    <UiButton onClick={onClose} color="primary">
                        Submit
                    </UiButton>
                </div>
            </UiCard>
        </div>
        <div onClick={onClose} className="modal-wrapper-overlay"></div>
    </div>
  );
};

export default UiModal;
