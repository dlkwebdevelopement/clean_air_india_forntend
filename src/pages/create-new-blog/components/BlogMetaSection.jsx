import React, { useState } from 'react';
import Select from '../../../components copy/ui/Select';
import Input from '../../../components copy/ui/Input';
import Button from '../../../components copy/ui/Button';
import Icon from '../../../components copy/AppIcon';
import './BlogMetaSection.css';

const BlogMetaSection = ({ 
  categories,
  tags,
  selectedCategory, 
  onCategoryChange, 
  selectedTags, 
  onTagsChange, 
  featuredImage, 
  onFeaturedImageChange,
  errors,
  onCategoryCreated,
  onTagCreated,
  isFeaturedImageEditable = true
}) => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newTagName, setNewTagName] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingTag, setEditingTag] = useState(null);

  const handleCreateCategory = async () => {
    if (newCategoryName?.trim()) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://api.cleanairindia.com/api/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name: newCategoryName })
        });
        
        if (response.ok) {
          const data = await response.json();
          onCategoryChange(data._id);
          setNewCategoryName('');
          setIsCategoryModalOpen(false);
          
          if (onCategoryCreated) {
            onCategoryCreated();
          }
        } else {
          throw new Error('Failed to create category');
        }
      } catch (error) {
        console.error('Error creating category:', error);
        alert('Error creating category. Please try again.');
      }
    }
  };

  const handleUpdateCategory = async () => {
    if (newCategoryName?.trim() && editingCategory) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://api.cleanairindia.com/api/categories/${editingCategory._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name: newCategoryName })
        });
        
        if (response.ok) {
          setNewCategoryName('');
          setEditingCategory(null);
          setIsCategoryModalOpen(false);
          
          if (onCategoryCreated) {
            onCategoryCreated();
          }
        } else {
          throw new Error('Failed to update category');
        }
      } catch (error) {
        console.error('Error updating category:', error);
        alert('Error updating category. Please try again.');
      }
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://api.cleanairindia.com/api/categories/${categoryId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          if (onCategoryCreated) {
            onCategoryCreated();
          }
          // If the deleted category was selected, clear the selection
          if (selectedCategory === categoryId) {
            onCategoryChange('');
          }
        } else {
          throw new Error('Failed to delete category');
        }
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('Error deleting category. Please try again.');
      }
    }
  };

  const handleCreateTag = async () => {
    if (newTagName?.trim()) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://api.cleanairindia.com/api/tags', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name: newTagName })
        });
        
        if (response.ok) {
          const data = await response.json();
          onTagsChange([...selectedTags, data._id]);
          setNewTagName('');
          setIsTagModalOpen(false);
          
          if (onTagCreated) {
            onTagCreated();
          }
        } else {
          throw new Error('Failed to create tag');
        }
      } catch (error) {
        console.error('Error creating tag:', error);
        alert('Error creating tag. Please try again.');
      }
    }
  };

  const handleUpdateTag = async () => {
    if (newTagName?.trim() && editingTag) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://api.cleanairindia.com/api/tags/${editingTag._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name: newTagName })
        });
        
        if (response.ok) {
          setNewTagName('');
          setEditingTag(null);
          setIsTagModalOpen(false);
          
          if (onTagCreated) {
            onTagCreated();
          }
        } else {
          throw new Error('Failed to update tag');
        }
      } catch (error) {
        console.error('Error updating tag:', error);
        alert('Error updating tag. Please try again.');
      }
    }
  };

  const handleDeleteTag = async (tagId) => {
    if (window.confirm('Are you sure you want to delete this tag?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://api.cleanairindia.com/api/tags/${tagId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          if (onTagCreated) {
            onTagCreated();
          }
          // Remove the deleted tag from selected tags if it was selected
          if (selectedTags.includes(tagId)) {
            onTagsChange(selectedTags.filter(id => id !== tagId));
          }
        } else {
          throw new Error('Failed to delete tag');
        }
      } catch (error) {
        console.error('Error deleting tag:', error);
        alert('Error deleting tag. Please try again.');
      }
    }
  };

  const openEditCategoryModal = (category) => {
    setEditingCategory(category);
    setNewCategoryName(category.name);
    setIsCategoryModalOpen(true);
  };

  const openEditTagModal = (tag) => {
    setEditingTag(tag);
    setNewTagName(tag.name);
    setIsTagModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
    setEditingCategory(null);
    setNewCategoryName('');
  };

  const closeTagModal = () => {
    setIsTagModalOpen(false);
    setEditingTag(null);
    setNewTagName('');
  };

  return (
    <div className="blog-meta-section">
      <h3 className="blog-meta-title">Blog Settings</h3>
      <div className="blog-meta-content">
        {/* Category Selection */}
        <div className="blog-meta-field">
          <div className="blog-meta-field-header">
            <label className="blog-meta-label">Category</label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCategoryModalOpen(true)}
              iconName="Plus"
              iconPosition="left"
              iconSize={16}
            >
              New Category
            </Button>
          </div>
          <Select
            options={categories.map(cat => ({ 
              value: cat._id, 
              label: (
                <div className="category-option">
                  <span>{cat.name}</span>
                  <div className="category-actions">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditCategoryModal(cat);
                      }}
                      iconName="Edit"
                      iconSize={12}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCategory(cat._id);
                      }}
                      iconName="Trash2"
                      iconSize={12}
                    />
                  </div>
                </div>
              )
            }))}
            value={selectedCategory}
            onChange={onCategoryChange}
            placeholder="Select a category..."
            error={errors?.category}
            searchable
          />
        </div>

        {/* Tag Selection */}
        <div className="blog-meta-field">
          <div className="blog-meta-field-header">
            <label className="blog-meta-label">Tags</label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsTagModalOpen(true)}
              iconName="Plus"
              iconPosition="left"
              iconSize={16}
            >
              New Tag
            </Button>
          </div>
          <Select
            options={tags.map(tag => ({ 
              value: tag._id, 
              label: (
                <div className="tag-option">
                  <span>{tag.name}</span>
                  <div className="tag-actions">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditTagModal(tag);
                      }}
                      iconName="Edit"
                      iconSize={12}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTag(tag._id);
                      }}
                      iconName="Trash2"
                      iconSize={12}
                    />
                  </div>
                </div>
              )
            }))}
            value={selectedTags}
            onChange={onTagsChange}
            placeholder="Select tags..."
            multiple
            searchable
            clearable
            error={errors?.tags}
          />
        </div>

        {/* Featured Image Upload */}
        <div className="blog-meta-field">
          <label className="blog-meta-label">Featured Image URL</label>
          <Input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={featuredImage}
            onChange={(e) => onFeaturedImageChange(e.target.value)}
            error={errors?.featuredImage}
            readOnly={!isFeaturedImageEditable} // Make non-editable
            className={!isFeaturedImageEditable ? 'read-only-field' : ''}
          />
          <p className="image-upload-text">
            {isFeaturedImageEditable 
              ? "Enter the URL of your featured image or upload an image in the editor to auto-populate this field"
              : "Featured image is automatically set from your uploaded images"}
          </p>
          {featuredImage && (
            <div className="featured-image-preview">
              <img 
                src={featuredImage} 
                alt="Featured preview" 
                className="preview-img"
              />
            </div>
          )}
        </div>
      </div>

      {/* Category Creation/Edit Modal */}
      {isCategoryModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              {editingCategory ? 'Edit Category' : 'Create New Category'}
            </h3>
            <Input
              label="Category Name"
              type="text"
              placeholder="Enter category name..."
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="modal-input"
              required
            />
            <div className="modal-actions">
              <Button
                variant="outline"
                onClick={closeCategoryModal}
              >
                Cancel
              </Button>
              <Button 
                onClick={editingCategory ? handleUpdateCategory : handleCreateCategory}
                disabled={!newCategoryName.trim()}
              >
                {editingCategory ? 'Update Category' : 'Create Category'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Tag Creation/Edit Modal */}
      {isTagModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              {editingTag ? 'Edit Tag' : 'Create New Tag'}
            </h3>
            <Input
              label="Tag Name"
              type="text"
              placeholder="Enter tag name..."
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="modal-input"
              required
            />
            <div className="modal-actions">
              <Button
                variant="outline"
                onClick={closeTagModal}
              >
                Cancel
              </Button>
              <Button 
                onClick={editingTag ? handleUpdateTag : handleCreateTag}
                disabled={!newTagName.trim()}
              >
                {editingTag ? 'Update Tag' : 'Create Tag'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogMetaSection;