import React, { useState } from 'react';
import Icon from '../../../shared/AppIcon';
import Button from '../../../shared/ui/Button';
import ConfirmationModal from './ConfirmationModal';
import './ActionButtons.css';

const ActionButtons = ({ onEdit, onDelete, mobile = false }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    onDelete();
    setShowDeleteModal(false);
  };

  if (mobile) {
    return (
      <>
        <div className="action-buttons-mobile">
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            iconName="Edit"
            iconPosition="left"
            iconSize={14}
            className="action-button-edit"
          >
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            iconName="Trash2"
            iconPosition="left"
            iconSize={14}
            className="action-button-delete"
          >
            Delete
          </Button>
        </div>
        
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
          title="Delete Blog Post"
          message="Are you sure you want to delete this blog post? This action cannot be undone."
          confirmText="Delete"
          confirmVariant="destructive"
        />
      </>
    );
  }

  return (
    <>
      <div className="action-buttons-desktop">
        <Button
          variant="ghost"
          size="icon"
          onClick={onEdit}
          className="action-button-icon-edit"
        >
          <Icon name="Edit" size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDelete}
          className="action-button-icon-delete"
        >
          <Icon name="Trash2" size={16} />
        </Button>
      </div>
      
      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Delete Blog Post"
        message="Are you sure you want to delete this blog post?"
        confirmText="Delete"
        confirmVariant="destructive"
      />
    </>
  );
};

export default ActionButtons;
