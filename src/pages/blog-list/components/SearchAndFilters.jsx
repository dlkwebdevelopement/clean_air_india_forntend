import React from 'react';
import Icon from '../../../shared/AppIcon';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import './SearchAndFilters.css'; // Import the CSS file

const SearchAndFilters = ({ 
  searchTerm, 
  onSearchChange, 
  statusFilter, 
  onStatusFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  categories,
  onClearFilters 
}) => {
  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'Published', label: 'Published' },
    { value: 'Draft', label: 'Draft' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...categories?.map(cat => ({ value: cat, label: cat }))
  ];

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || categoryFilter !== 'all';

  return (
    <div className="search-filters-container">
      <div className="search-filters-content">
        {/* Search */}
        <div className="search-section">
          <div className="search-input-container">
            <Icon 
              name="Search" 
              size={16} 
              className="search-icon"
            />
            <Input
              type="search"
              placeholder="Search by title or content..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e?.target?.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="filters-container">
          <select
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e?.target?.value)}
            className="filter-select"
          >
            {statusOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => onCategoryFilterChange(e?.target?.value)}
            className="filter-select"
          >
            {categoryOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              iconSize={14}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
