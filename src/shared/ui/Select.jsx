import React, { useState } from "react";
import { ChevronDown, Check, Search, X } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import "./Select.css";

const Select = React.forwardRef(({
    className,
    options = [],
    value,
    defaultValue,
    placeholder = "Select an option",
    multiple = false,
    disabled = false,
    required = false,
    label,
    description,
    error,
    searchable = false,
    clearable = false,
    loading = false,
    id,
    name,
    onChange,
    onOpenChange,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Generate unique ID if not provided
    const selectId = id || `select-${Math.random()?.toString(36)?.substr(2, 9)}`;

    // Filter options based on search
    const filteredOptions = searchable && searchTerm
        ? options?.filter(option =>
            option?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
            (option?.value && option?.value?.toString()?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
        )
        : options;

    // Get selected option(s) for display
    const getSelectedDisplay = () => {
        if (!value) return placeholder;

        if (multiple) {
            const selectedOptions = options?.filter(opt => value?.includes(opt?.value));
            if (selectedOptions?.length === 0) return placeholder;
            if (selectedOptions?.length === 1) return selectedOptions?.[0]?.label;
            return `${selectedOptions?.length} items selected`;
        }

        const selectedOption = options?.find(opt => opt?.value === value);
        return selectedOption ? selectedOption?.label : placeholder;
    };

    const handleToggle = () => {
        if (!disabled) {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            onOpenChange?.(newIsOpen);
            if (!newIsOpen) {
                setSearchTerm("");
            }
        }
    };

    const handleOptionSelect = (option) => {
        if (multiple) {
            const newValue = value || [];
            const updatedValue = newValue?.includes(option?.value)
                ? newValue?.filter(v => v !== option?.value)
                : [...newValue, option?.value];
            onChange?.(updatedValue);
        } else {
            onChange?.(option?.value);
            setIsOpen(false);
            onOpenChange?.(false);
        }
    };

    const handleClear = (e) => {
        e?.stopPropagation();
        onChange?.(multiple ? [] : '');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e?.target?.value);
    };

    const isSelected = (optionValue) => {
        if (multiple) {
            return value?.includes(optionValue) || false;
        }
        return value === optionValue;
    };

    const hasValue = multiple ? value?.length > 0 : value !== undefined && value !== '';

    return (
        <div className={`select-container ${className || ''}`}>
            {label && (
                <label
                    htmlFor={selectId}
                    className={`select-label ${error ? 'select-label-error' : ''}`}
                >
                    {label}
                    {required && <span className="select-required">*</span>}
                </label>
            )}
            <div className="select-wrapper">
                <button
                    ref={ref}
                    id={selectId}
                    type="button"
                    className={`select-trigger ${error ? 'select-trigger-error' : ''} ${!hasValue ? 'select-trigger-placeholder' : ''} ${disabled ? 'select-trigger-disabled' : ''}`}
                    onClick={handleToggle}
                    disabled={disabled}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    {...props}
                >
                    <span className="select-value">{getSelectedDisplay()}</span>

                    <div className="select-icons">
                        {loading && (
                            <svg className="select-loading" viewBox="0 0 24 24">
                                <circle className="select-loading-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="select-loading-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        )}

                        {clearable && hasValue && !loading && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="select-clear"
                                onClick={handleClear}
                            >
                                <X className="select-clear-icon" />
                            </Button>
                        )}

                        <ChevronDown className={`select-chevron ${isOpen ? 'select-chevron-open' : ''}`} />
                    </div>
                </button>

                {/* Hidden native select for form submission */}
                <select
                    name={name}
                    value={value || ''}
                    onChange={() => { }} // Controlled by our custom logic
                    className="select-native"
                    tabIndex={-1}
                    multiple={multiple}
                    required={required}
                >
                    <option value="">Select...</option>
                    {options?.map(option => (
                        <option key={option?.value} value={option?.value}>
                            {option?.label}
                        </option>
                    ))}
                </select>

                {/* Dropdown */}
                {isOpen && (
                    <div className="select-dropdown">
                        {searchable && (
                            <div className="select-search">
                                <div className="select-search-wrapper">
                                    <Search className="select-search-icon" />
                                    <Input
                                        placeholder="Search options..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        className="select-search-input"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="select-options">
                            {filteredOptions?.length === 0 ? (
                                <div className="select-empty">
                                    {searchTerm ? 'No options found' : 'No options available'}
                                </div>
                            ) : (
                                filteredOptions?.map((option) => (
                                    <div
                                        key={option?.value}
                                        className={`select-option ${isSelected(option?.value) ? 'select-option-selected' : ''} ${option?.disabled ? 'select-option-disabled' : ''}`}
                                        onClick={() => !option?.disabled && handleOptionSelect(option)}
                                    >
                                        <span className="select-option-label">{option?.label}</span>
                                        {multiple && isSelected(option?.value) && (
                                            <Check className="select-option-check" />
                                        )}
                                        {option?.description && (
                                            <span className="select-option-description">
                                                {option?.description}
                                            </span>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
            {description && !error && (
                <p className="select-description">
                    {description}
                </p>
            )}
            {error && (
                <p className="select-error">
                    {error}
                </p>
            )}
        </div>
    );
});

Select.displayName = "Select";

export default Select;