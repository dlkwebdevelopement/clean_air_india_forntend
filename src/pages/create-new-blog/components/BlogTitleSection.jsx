import React from 'react';
import Input from '../../../shared/ui/Input';
import './BlogTitleSection.css';

const BlogTitleSection = ({ title, author, onTitleChange, onAuthorChange, errors }) => {
  return (
    <div className="blog-title-section">
      <div className="blog-title-grid">
        <Input
          label="Blog Title"
          type="text"
          placeholder="Enter your blog title..."
          value={title}
          onChange={(e) => onTitleChange(e?.target?.value)}
          error={errors?.title}
          required
          className="blog-title-input"
        />
        <Input
          label="Author Name"
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={(e) => onAuthorChange(e?.target?.value)}
          error={errors?.author}
          required
          className="blog-author-input"
        />
      </div>
    </div>
  );
};

export default BlogTitleSection;
