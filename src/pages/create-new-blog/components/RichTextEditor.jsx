import React, { useState, useRef, useEffect } from 'react';
import Button from '../../../shared/ui/Button';
import Input from '../../../shared/ui/Input';
import Swal from 'sweetalert2';
import './RichTextEditor.css';

const MAX_CHARACTERS = 5000;

const RichTextEditor = ({ content, onContentChange, onWordCountChange, uploadedImages, setUploadedImages, onFeaturedImageUpdate }) => {
  const editorRef = useRef(null);
  const lastRangeRef = useRef(null);          // 🔹 store caret position
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  // load initial content when prop changes
  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content || '';
    }
  }, [content]);

  const toolbarButtons = [
    { name: 'Bold', icon: 'Bold', command: 'bold' },
    { name: 'Italic', icon: 'Italic', command: 'italic' },
    { name: 'Underline', icon: 'Underline', command: 'underline' },
    { name: 'Heading 1', icon: 'Heading1', command: 'formatBlock', value: 'h1' },
    { name: 'Heading 2', icon: 'Heading2', command: 'formatBlock', value: 'h2' },
    { name: 'Heading 3', icon: 'Heading3', command: 'formatBlock', value: 'h3' },
    { name: 'Bullet List', icon: 'List', command: 'insertUnorderedList' },
    { name: 'Numbered List', icon: 'ListOrdered', command: 'insertOrderedList' },
    { name: 'Quote', icon: 'Quote', command: 'formatBlock', value: 'blockquote' },
    { name: 'Code', icon: 'Code', command: 'formatBlock', value: 'pre' }
  ];

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      lastRangeRef.current = sel.getRangeAt(0);
    }
  };

  const executeCommand = (command, value = null) => {
    editorRef.current?.focus();
    if (lastRangeRef.current) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(lastRangeRef.current);
    }
    document.execCommand(command, false, value);
    saveSelection();
    triggerChange();
  };

  // Insert image at caret position
  const insertImageAtCursor = (url) => {
    if (!editorRef.current) return;

    editorRef.current.focus();
    let sel = window.getSelection();

    // restore saved range if exists
    if (lastRangeRef.current) {
      sel.removeAllRanges();
      sel.addRange(lastRangeRef.current);
    }

    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      range.deleteContents();

      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Uploaded image';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';

      range.insertNode(img);

      // move caret after image
      range.setStartAfter(img);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      lastRangeRef.current = range; // update saved caret
    }
    triggerChange();
  };

  const handleImageInsert = () => {
    if (imageUrl.trim()) {
      insertImageAtCursor(imageUrl);
      setImageUrl('');
      setIsImageModalOpen(false);
    }
  };

  const handleLinkInsert = () => {
    if (linkUrl.trim()) {
      executeCommand('createLink', linkUrl);
      setLinkUrl('');
      setIsLinkModalOpen(false);
    }
  };

 const handleImageUpload = async (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs/upload-image`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to upload image');
        }

        const data = await response.json();
        const imagePath = data.imageUrl;
        
        // Insert image in editor
        insertImageAtCursor(imagePath);
        
        // Update uploaded images list
        setUploadedImages((prev) => [...prev, imagePath]);
        
        // Auto-populate featured image field with the first uploaded image
        if (onFeaturedImageUpdate && uploadedImages.length === 0) {
          onFeaturedImageUpdate(imagePath);
        }
        
      } catch (error) {
        console.error('Error uploading image:', error);
        Swal.fire('Error', `Error uploading image: ${error.message}`, 'error');
      }
    }
  };

  const updateWordCount = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerText || '';
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const characters = text.length;
      const remaining = MAX_CHARACTERS - characters;
      onWordCountChange({ words, characters, remaining });
    }
  };

  const triggerChange = () => {
    updateWordCount();
    onContentChange(editorRef.current.innerHTML);
  };

  const insertTable = () => {
    const tableHTML = `
      <table border="1" style="border-collapse: collapse; width: 100%; margin: 10px 0;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Cell 1</td>
          <td style="padding: 8px; border: 1px solid #ddd;">Cell 2</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Cell 3</td>
          <td style="padding: 8px; border: 1px solid #ddd;">Cell 4</td>
        </tr>
      </table>
    `;
    executeCommand('insertHTML', tableHTML);
  };

  const removeImage = (index) => {
    const imgToRemove = uploadedImages[index];
    // remove from uploaded images
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));

    // remove from editor
    if (editorRef.current) {
      const editor = editorRef.current;
      const imgs = editor.querySelectorAll('img');
      imgs.forEach((img) => {
        if (img.src === imgToRemove) {
          img.remove();
        }
      });
      triggerChange();
    }
  };

  return (
    <div className="rich-text-editor">
      <div className="editor-container">
        {/* Toolbar */}
        <div className="editor-toolbar">
          <div className="toolbar-buttons">
            {toolbarButtons.map((button) => (
              <Button
                key={button.name}
                variant="ghost"
                size="sm"
                onClick={() => executeCommand(button.command, button.value)}
                iconName={button.icon}
                className="toolbar-button"
                title={button.name}
              />
            ))}

            <div className="toolbar-divider"></div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLinkModalOpen(true)}
              iconName="Link"
              className="toolbar-button"
              title="Insert Link"
            />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsImageModalOpen(true)}
              iconName="Image"
              className="toolbar-button"
              title="Insert Image"
            />

            <label className="file-upload-label">
              <Button
                variant="ghost"
                size="sm"
                iconName="Upload"
                className="toolbar-button"
                title="Upload Image"
                asChild
              >
                <span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-upload-input"
                  />
                </span>
              </Button>
            </label>

            <Button
              variant="ghost"
              size="sm"
              onClick={insertTable}
              iconName="Table"
              className="toolbar-button"
              title="Insert Table"
            />

            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                executeCommand(
                  'insertHTML',
                  '<iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>'
                )
              }
              iconName="Video"
              className="toolbar-button"
              title="Insert Video"
            />
          </div>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          className="editor-content"
          onInput={triggerChange}
          onPaste={triggerChange}
          onKeyUp={(e) => {
            saveSelection();
            triggerChange(e);
          }}
          onMouseUp={saveSelection}
          suppressContentEditableWarning={true}
        />
      </div>

      {/* Sidebar for uploaded images */}
      {uploadedImages.length > 0 && (
        <div className="uploaded-images-sidebar">
          <h3>Uploaded Images</h3>
          <div className="uploaded-images-preview">
            {uploadedImages.map((img, idx) => (
              <div key={idx} className="preview-img-wrapper">
                <img src={img} alt={`upload-${idx}`} className="preview-img" loading="lazy"/>
                <button
                  className="remove-img-btn"
                  onClick={() => removeImage(idx)}
                  title="Remove image"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Insert Image</h3>
            <Input
              label="Image URL"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="modal-input"
            />
            <div className="modal-actions">
              <Button variant="outline" onClick={() => setIsImageModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleImageInsert}>Insert</Button>
            </div>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Insert Link</h3>
            <Input
              label="Link URL"
              type="url"
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="modal-input"
            />
            <div className="modal-actions">
              <Button variant="outline" onClick={() => setIsLinkModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleLinkInsert}>Insert</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
