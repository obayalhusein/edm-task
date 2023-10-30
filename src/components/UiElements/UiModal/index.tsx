import { ReactNode } from 'react';
import './style.scss';
import UiCard from '../UiCard';
import UiButton from '../UiButton';
import UiIcon from '../UiIcon';

interface UiModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    isTypeConfirm?: boolean;
    titleIcon?: string;
    children?: ReactNode;
}

const UiModal: React.FC<UiModalProps> = ({ title, isOpen, onClose, onSubmit, isTypeConfirm, titleIcon, children }) => {
  if (!isOpen) return null;

  return (
    <div className="ui-modal-wrapper">
        <div className="ui-modal-wrapper-content">
            <UiCard>
                <div className="ui-modal-wrapper-content-title flex align-center justify-between">
                    <h3 className="flex align-center no-gutter">
                        {titleIcon && (
                            <UiIcon
                                name={titleIcon}
                                color={isTypeConfirm ? 'error' : 'primary'}
                            />
                        )}
                        {title}
                    </h3>
                    <UiButton onClick={onClose} fill="text" iconOnly>
                        <UiIcon
                            name="close"
                            color="primary"
                        />
                    </UiButton>
                </div>
                <div className="ui-modal-wrapper-content-description">
                    {children}
                </div>
                <div className={`flex ${isTypeConfirm ? 'justify-center' : 'justify-end'}`}>
                    <UiButton onClick={onClose}>
                        {isTypeConfirm ? 'Cancel' : 'Close' }
                    </UiButton>
                    {onSubmit && (
                        <UiButton onClick={onSubmit} color={isTypeConfirm ? 'error' : 'primary'}>
                            {isTypeConfirm ? 'Confirm' : 'Submit' }
                        </UiButton>
                    )}
                </div>
            </UiCard>
        </div>
        <div onClick={onClose} className="ui-modal-wrapper-overlay"></div>
    </div>
  );
};

export default UiModal;
