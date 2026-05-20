import React from 'react';
import Icon from '../../../shared/AppIcon';
import Button from '../../../shared/ui/Button';
import './ConfirmationModal.css';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = "Confirm", 
  cancelText = "Cancel",
  confirmVariant = "default" 
}) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal-container">
        {/* Backdrop */}
        <div 
          className="confirmation-modal-backdrop"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="confirmation-modal">
          <div className="confirmation-modal-header">
            <div className="confirmation-modal-icon">
              <Icon name="AlertTriangle" size={20} className="confirmation-modal-icon-svg" />
            </div>
            <div className="confirmation-modal-content">
              <h3 className="confirmation-modal-title">
                {title}
              </h3>
              <div className="confirmation-modal-message">
                <p className="confirmation-modal-text">
                  {message}
                </p>
              </div>
            </div>
          </div>
          <div className="confirmation-modal-actions">
            <Button
              variant={confirmVariant}
              onClick={onConfirm}
              className="confirmation-modal-confirm-btn"
            >
              {confirmText}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="confirmation-modal-cancel-btn"
            >
              {cancelText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
