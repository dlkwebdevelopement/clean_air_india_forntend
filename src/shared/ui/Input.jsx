import React from "react";
import "./Input.css";

const Input = React.forwardRef(({
    className,
    type = "text",
    label,
    description,
    error,
    required = false,
    id,
    ...props
}, ref) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random()?.toString(36)?.substr(2, 9)}`;

    // Checkbox-specific styles
    if (type === "checkbox") {
        return (
            <input
                type="checkbox"
                className={`input-checkbox ${className || ''}`}
                ref={ref}
                id={inputId}
                {...props}
            />
        );
    }

    // Radio button-specific styles
    if (type === "radio") {
        return (
            <input
                type="radio"
                className={`input-radio ${className || ''}`}
                ref={ref}
                id={inputId}
                {...props}
            />
        );
    }

    // For regular inputs with wrapper structure
    return (
        <div className="input-container">
            {label && (
                <label
                    htmlFor={inputId}
                    className={`input-label ${error ? 'input-label-error' : ''}`}
                >
                    {label}
                    {required && <span className="input-required">*</span>}
                </label>
            )}

            <input
                type={type}
                className={`input-base ${error ? 'input-error' : ''} ${className || ''}`}
                ref={ref}
                id={inputId}
                {...props}
            />

            {description && !error && (
                <p className="input-description">
                    {description}
                </p>
            )}

            {error && (
                <p className="input-error-text">
                    {error}
                </p>
            )}
        </div>
    );
});

Input.displayName = "Input";

export default Input;