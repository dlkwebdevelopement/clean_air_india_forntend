import React from "react";
import { Check, Minus } from "lucide-react";
import "./Checkbox.css";

const Checkbox = React.forwardRef(({
    className,
    id,
    checked,
    indeterminate = false,
    disabled = false,
    required = false,
    label,
    description,
    error,
    size = "default",
    ...props
}, ref) => {
    // Generate unique ID if not provided
    const checkboxId = id || `checkbox-${Math.random()?.toString(36)?.substr(2, 9)}`;

    return (
        <div className={`checkbox-container ${className || ''}`}>
            <div className="checkbox-input-wrapper">
                <input
                    type="checkbox"
                    ref={ref}
                    id={checkboxId}
                    checked={checked}
                    disabled={disabled}
                    required={required}
                    className="checkbox-input"
                    {...props}
                />

                <label
                    htmlFor={checkboxId}
                    className={`
                        checkbox-label 
                        checkbox-size-${size}
                        ${checked ? 'checkbox-checked' : ''}
                        ${indeterminate ? 'checkbox-indeterminate' : ''}
                        ${error ? 'checkbox-error' : ''}
                        ${disabled ? 'checkbox-disabled' : ''}
                    `}
                >
                    {checked && !indeterminate && (
                        <Check className="checkbox-icon" />
                    )}
                    {indeterminate && (
                        <Minus className="checkbox-icon" />
                    )}
                </label>
            </div>
            {(label || description || error) && (
                <div className="checkbox-content">
                    {label && (
                        <label
                            htmlFor={checkboxId}
                            className={`checkbox-text-label ${error ? 'checkbox-text-label-error' : ''}`}
                        >
                            {label}
                            {required && <span className="checkbox-required">*</span>}
                        </label>
                    )}

                    {description && !error && (
                        <p className="checkbox-description">
                            {description}
                        </p>
                    )}

                    {error && (
                        <p className="checkbox-error-text">
                            {error}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
});

Checkbox.displayName = "Checkbox";

// Checkbox Group component
const CheckboxGroup = React.forwardRef(({
    className,
    children,
    label,
    description,
    error,
    required = false,
    disabled = false,
    ...props
}, ref) => {
    return (
        <fieldset
            ref={ref}
            disabled={disabled}
            className={`checkbox-group ${className || ''}`}
            {...props}
        >
            {label && (
                <legend className={`checkbox-group-legend ${error ? 'checkbox-group-legend-error' : ''}`}>
                    {label}
                    {required && <span className="checkbox-required">*</span>}
                </legend>
            )}

            {description && !error && (
                <p className="checkbox-group-description">
                    {description}
                </p>
            )}

            <div className="checkbox-group-children">
                {children}
            </div>

            {error && (
                <p className="checkbox-group-error">
                    {error}
                </p>
            )}
        </fieldset>
    );
});

CheckboxGroup.displayName = "CheckboxGroup";

export { Checkbox, CheckboxGroup };