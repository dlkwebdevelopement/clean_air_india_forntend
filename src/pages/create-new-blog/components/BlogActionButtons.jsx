import React from 'react';
import Button from '../../../shared/ui/Button';
import './BlogActionButtons.css';

const BlogActionButtons = ({ 
  onSaveDraft, 
  onPublish, 
  onPreview,
  isLoading,
  hasContent,
  isEditMode = false
}) => {
  return (
    <div className="blog-action-buttons">
      <div className="blog-actions-container">
        {/* Primary Actions */}
        <div className="blog-primary-actions">
          <Button
            variant="outline"
            onClick={onSaveDraft}
            loading={isLoading?.draft}
            disabled={!hasContent}
            iconName="Save"
            iconPosition="left"
            iconSize={16}
            className="blog-action-button"
          >
            {isEditMode ? 'Update Draft' : 'Save as Draft'}
          </Button>
          
          <Button
            variant="default"
            onClick={onPublish}
            loading={isLoading?.publish}
            disabled={!hasContent}
            iconName="Send"
            iconPosition="left"
            iconSize={16}
            className="blog-action-button"
          >
            {isEditMode ? 'Update Blog' : 'Publish Blog'}
          </Button>
        </div>

        {/* Secondary Actions */}
        {/* <div className="blog-secondary-actions">
          <Button
            variant="ghost"
            onClick={onPreview}
            disabled={!hasContent}
            iconName="Eye"
            iconPosition="left"
            iconSize={16}
            className="blog-action-button-secondary"
          >
            Preview
          </Button>
        </div> */}
      </div>
      {/* Status Indicators */}
      <div className="blog-status-section">
        <div className="blog-status-container">
          <div className="blog-status-item">
            <span className="blog-status-label">Status:</span>
            <span className="blog-status-value">
              {isEditMode ? 'Editing' : 'Draft'}
            </span>
          </div>
          <div className="blog-status-item">
            <span className="blog-status-label">Last saved:</span>
            <span className="blog-status-value">Never</span>
          </div>
        </div>
      </div>
      {/* Help Text */}
      <div className="blog-help-section">
        <p className="blog-help-text">
          <strong>Tip:</strong> {isEditMode 
            ? 'Update your blog content and publish when ready.' 
            : 'Save your work frequently as a draft. You can always come back to edit before publishing.'}
        </p>
      </div>
    </div>
  );
};

export default BlogActionButtons;
