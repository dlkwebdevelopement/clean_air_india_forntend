import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components copy/ui/Input';
import Button from '../../../components copy/ui/Button';
import { Checkbox } from '../../../components copy/ui/Checkbox';
import Icon from '../../../components copy/AppIcon';
import './SignUpForm.css';

const SignUpForm = ({ onToggleForm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',           // ✅ added username
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = password?.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
    };
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        newErrors.password = 'Password does not meet requirements';
      }
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('https://api.cleanairindia.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // ✅ username is included
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  const passwordValidation = validatePassword(formData.password);

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      {/* Name Fields */}
      <div className="signup-name-fields">
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
          error={errors.firstName}
          required
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
          error={errors.lastName}
          required
        />
      </div>

      {/* Username Field */}
      <Input
        label="Username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Choose a username"
        error={errors.username}
        required
      />

      {/* Email Field */}
      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email address"
        description="We'll use this email for account verification and notifications"
        error={errors.email}
        required
      />

      {/* Password Field */}
      <div className="password-field-container">
        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Create a strong password"
          error={errors.password}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle-btn"
        >
          <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
        </button>
      </div>

      {/* Password Strength Indicator */}
      {formData.password && (
        <div className="password-requirements">
          <div className="password-requirements-title">Password Requirements:</div>
          <div className="password-requirements-grid">
            <div className={`password-requirement ${passwordValidation.minLength ? 'requirement-met' : 'requirement-unmet'}`}>
              <Icon name={passwordValidation.minLength ? 'Check' : 'X'} size={14} />
              <span>At least 8 characters</span>
            </div>
            <div className={`password-requirement ${passwordValidation.hasUpperCase ? 'requirement-met' : 'requirement-unmet'}`}>
              <Icon name={passwordValidation.hasUpperCase ? 'Check' : 'X'} size={14} />
              <span>Uppercase letter</span>
            </div>
            <div className={`password-requirement ${passwordValidation.hasLowerCase ? 'requirement-met' : 'requirement-unmet'}`}>
              <Icon name={passwordValidation.hasLowerCase ? 'Check' : 'X'} size={14} />
              <span>Lowercase letter</span>
            </div>
            <div className={`password-requirement ${passwordValidation.hasNumbers ? 'requirement-met' : 'requirement-unmet'}`}>
              <Icon name={passwordValidation.hasNumbers ? 'Check' : 'X'} size={14} />
              <span>Number</span>
            </div>
            <div className={`password-requirement ${passwordValidation.hasSpecialChar ? 'requirement-met' : 'requirement-unmet'}`}>
              <Icon name={passwordValidation.hasSpecialChar ? 'Check' : 'X'} size={14} />
              <span>Special character</span>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Password Field */}
      <div className="password-field-container">
        <Input
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="password-toggle-btn"
        >
          <Icon name={showConfirmPassword ? 'EyeOff' : 'Eye'} size={20} />
        </button>
      </div>

      {/* Terms Agreement */}
      <Checkbox
        label="I agree to the Terms of Service and Privacy Policy"
        name="agreeToTerms"
        checked={formData.agreeToTerms}
        onChange={handleInputChange}
        error={errors.agreeToTerms}
        required
      />

      {/* Submit Error */}
      {errors.submit && (
        <div className="submit-error">
          <div className="error-content">
            <Icon name="AlertCircle" size={16} />
            <span className="error-message">{errors.submit}</span>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        fullWidth
        loading={loading}
        disabled={loading}
        iconName="UserPlus"
        iconPosition="left"
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>

      {/* Sign In Link */}
      <div className="signin-link">
        <span className="signin-text">Already have an account? </span>
        <button
          type="button"
          onClick={onToggleForm}
          className="signin-btn"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
