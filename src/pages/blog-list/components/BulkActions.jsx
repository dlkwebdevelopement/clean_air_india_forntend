import React from 'react';
import Button from '../../../shared/ui/Button';
import './BulkActions.css';

const BulkActions = ({ selectedCount, onBulkAction, onClearSelection }) => {
  return (
    <div className="bulk-actions">
      <div className="bulk-actions-container">
        <div className="bulk-actions-left">
          <span className="bulk-actions-count">
            {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearSelection}
            iconName="X"
            iconPosition="left"
            iconSize={14}
            className="bulk-actions-clear"
          >
            Clear
          </Button>
        </div>
        
        <div className="bulk-actions-right">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onBulkAction('publish')}
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
          >
            Publish
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onBulkAction('draft')}
            iconName="FileEdit"
            iconPosition="left"
            iconSize={14}
          >
            Move to Draft
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onBulkAction('delete')}
            iconName="Trash2"
            iconPosition="left"
            iconSize={14}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkActions;
