import React, { useState } from 'react';
import Icon from '../../../shared/AppIcon';
import StatusBadge from './StatusBadge';
import ActionButtons from './ActionButtons';
import BulkActions from './BulkActions';
import './BlogTable.css';

const BlogTable = ({ 
  blogs, 
  onEdit, 
  onDelete, 
  onBulkDelete, 
  onBulkStatusChange,
  sortConfig,
  onSort,
  isAdmin
}) => {
  const [selectedBlogs, setSelectedBlogs] = useState([]);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedBlogs(blogs?.map(blog => blog?.id));
    } else {
      setSelectedBlogs([]);
    }
  };

  const handleSelectBlog = (blogId, checked) => {
    if (checked) {
      setSelectedBlogs(prev => [...prev, blogId]);
    } else {
      setSelectedBlogs(prev => prev?.filter(id => id !== blogId));
    }
  };

  const getSortIcon = (column) => {
    if (sortConfig?.key !== column) {
      return <Icon name="ArrowUpDown" size={14} className="sort-icon-default" />;
    }
    return sortConfig?.direction === 'asc' 
      ? <Icon name="ArrowUp" size={14} />
      : <Icon name="ArrowDown" size={14} />;
  };

  const handleBulkAction = (action) => {
    if (action === 'delete') {
      onBulkDelete(selectedBlogs);
    } else if (action === 'publish') {
      onBulkStatusChange(selectedBlogs, 'Published');
    } else if (action === 'draft') {
      onBulkStatusChange(selectedBlogs, 'Draft');
    }
    setSelectedBlogs([]);
  };

  return (
    <div className="blog-table-container">
      {/* Bulk Actions */}
      {selectedBlogs?.length > 0 && (
        <BulkActions
          selectedCount={selectedBlogs?.length}
          onBulkAction={handleBulkAction}
          onClearSelection={() => setSelectedBlogs([])}
          hideDelete={!isAdmin}
        />
      )}
      {/* Desktop Table */}
      <div className="blog-table-desktop">
        <table className="blog-table">
          <thead className="blog-table-head">
            <tr className="blog-table-head-row">
              {/* <th className="blog-table-head-cell blog-table-checkbox-cell">
                <input
                  type="checkbox"
                  checked={selectedBlogs?.length === blogs?.length && blogs?.length > 0}
                  onChange={(e) => handleSelectAll(e?.target?.checked)}
                  className="blog-table-checkbox"
                />
              </th> */}
              <th className="blog-table-head-cell">
                <button
                  onClick={() => onSort('serialNumber')}
                  className="blog-table-sort-button"
                >
                  <span>S.No</span>
                  {getSortIcon('serialNumber')}
                </button>
              </th>
              <th className="blog-table-head-cell">
                <button
                  onClick={() => onSort('title')}
                  className="blog-table-sort-button"
                >
                  <span>Title</span>
                  {getSortIcon('title')}
                </button>
              </th>
              <th className="blog-table-head-cell">
                <button
                  onClick={() => onSort('category')}
                  className="blog-table-sort-button"
                >
                  <span>Category</span>
                  {getSortIcon('category')}
                </button>
              </th>
              <th className="blog-table-head-cell">
                <button
                  onClick={() => onSort('postedBy')}
                  className="blog-table-sort-button"
                >
                  <span>Posted By</span>
                  {getSortIcon('postedBy')}
                </button>
              </th>
              <th className="blog-table-head-cell">
                <button
                  onClick={() => onSort('createdDate')}
                  className="blog-table-sort-button"
                >
                  <span>Created Date</span>
                  {getSortIcon('createdDate')}
                </button>
              </th>
              <th className="blog-table-head-cell">
                <button
                  onClick={() => onSort('status')}
                  className="blog-table-sort-button"
                >
                  <span>Status</span>
                  {getSortIcon('status')}
                </button>
              </th>
             
                <th className="blog-table-head-cell blog-table-actions-cell">
                  Actions
                </th>
            
            </tr>
          </thead>
          <tbody className="blog-table-body">
            {blogs?.map((blog) => (
              <tr key={blog?.id} className="blog-table-row">
                {/* <td className="blog-table-cell blog-table-checkbox-cell">
                  <input
                    type="checkbox"
                    checked={selectedBlogs?.includes(blog?.id)}
                    onChange={(e) => handleSelectBlog(blog?.id, e?.target?.checked)}
                    className="blog-table-checkbox"
                  />
                </td> */}
                <td className="blog-table-cell blog-table-serial">
                  {blog?.serialNumber}
                </td>
                <td className="blog-table-cell">
                  <div className="blog-table-title-container">
                    <h3 className="blog-table-title">
                      {blog?.title}
                    </h3>
                    <p className="blog-table-excerpt">
                      {blog?.excerpt}
                    </p>
                  </div>
                </td>
                <td className="blog-table-cell">
                  <span className="blog-table-category">
                    {blog?.category}
                  </span>
                </td>
                <td className="blog-table-cell">
                  <span className="blog-table-posted-by">
                    {blog?.postedBy}
                  </span>
                </td>
                <td className="blog-table-cell blog-table-date">
                  {blog?.createdDate}
                </td>
                <td className="blog-table-cell">
                  <StatusBadge status={blog?.status} />
                </td>
                
                  <td className="blog-table-cell blog-table-actions-cell">
                    <ActionButtons
                      onEdit={() => onEdit(blog?.id)}
                      onDelete={() => onDelete(blog?.id)}
                    />
                  </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Cards */}
      <div className="blog-table-mobile">
        {blogs?.map((blog) => (
          <div key={blog?.id} className="blog-table-mobile-card">
            <div className="blog-table-mobile-header">
              <div className="blog-table-mobile-checkbox">
                <input
                  type="checkbox"
                  checked={selectedBlogs?.includes(blog?.id)}
                  onChange={(e) => handleSelectBlog(blog?.id, e?.target?.checked)}
                  className="blog-table-checkbox"
                />
                <span className="blog-table-mobile-serial">
                  #{blog?.serialNumber}
                </span>
              </div>
              <StatusBadge status={blog?.status} />
            </div>
            
            <div className="blog-table-mobile-content">
              <h3 className="blog-table-mobile-title">{blog?.title}</h3>
              <p className="blog-table-mobile-excerpt">{blog?.excerpt}</p>
            </div>
            
            <div className="blog-table-mobile-footer">
              <div className="blog-table-mobile-info">
                <div className="blog-table-mobile-info-item">
                  <Icon name="Folder" size={14} className="blog-table-mobile-icon" />
                  <span>{blog?.category}</span>
                </div>
                <div className="blog-table-mobile-info-item">
                  <Icon name="User" size={14} className="blog-table-mobile-icon" />
                  <span>{blog?.postedBy}</span>
                </div>
                <div className="blog-table-mobile-info-item">
                  <Icon name="Calendar" size={14} className="blog-table-mobile-icon" />
                  <span>{blog?.createdDate}</span>
                </div>
              </div>
             
                <ActionButtons
                  onEdit={() => onEdit(blog?.id)}
                  onDelete={() => onDelete(blog?.id)}
                  mobile
                />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTable;
