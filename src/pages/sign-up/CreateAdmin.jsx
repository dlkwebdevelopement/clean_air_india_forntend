import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components copy/ui/Input'; // Adjust path as needed
import Button from '../../components copy/ui/Button'; // Adjust path as needed
import Icon from '../../components copy/AppIcon'; // Adjust path as needed
import SidebarNavigation from '../../components copy/ui/SidebarNavigation'; // Adjust path as needed
import Header from '../../components copy/ui/Header'; // Adjust path as needed
import './CreateChildAdmin.css'; // New CSS file

const CreateChildAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'publisher'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
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
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    // if (!formData.email.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!validateEmail(formData.email)) {
    //   newErrors.email = 'Please enter a valid email address';
    // }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) newErrors.password = 'Password does not meet requirements';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.cleanairindia.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Creation failed');
      }

      navigate('/admin-list');
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const passwordValidation = validatePassword(formData.password);

  return (
    <div className="app-container">
      <SidebarNavigation
        collapsed={sidebarCollapsed}
        onToggle={handleSidebarToggle}
      />
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header
          onSidebarToggle={handleSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />
        <div className="create-childadmin-content">
          <h1 className="create-childadmin-title">Create User</h1>
          <form onSubmit={handleSubmit} className="create-childadmin-form">
            <div className="name-fields">
              <Input
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                error={errors.firstName}
                required
              />
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                error={errors.lastName}
                required
              />
            </div>
            <Input
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter username"
              error={errors.username}
              required
            />
            {/* <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              error={errors.email}
              required
            /> */}
            <div className="password-field">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create password"
                error={errors.password}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-btn"
              >
                <Icon name={showPassword ? "EyeOff" : "Eye"} size={20} />
              </button>
            </div>
            {formData.password && (
              <div className="password-requirements">
                <div className="requirements-title">Password Requirements:</div>
                <div className="password-requirements-grid">
                  <div className={`password-requirement ${passwordValidation?.minLength ? 'requirement-met' : 'requirement-unmet'}`}>
                    <Icon name={passwordValidation?.minLength ? "Check" : "X"} size={14} />
                    <span>At least 8 characters</span>
                  </div>
                  <div className={`password-requirement ${passwordValidation?.hasUpperCase ? 'requirement-met' : 'requirement-unmet'}`}>
                    <Icon name={passwordValidation?.hasUpperCase ? "Check" : "X"} size={14} />
                    <span>Uppercase letter</span>
                  </div>
                  <div className={`password-requirement ${passwordValidation?.hasLowerCase ? 'requirement-met' : 'requirement-unmet'}`}>
                    <Icon name={passwordValidation?.hasLowerCase ? "Check" : "X"} size={14} />
                    <span>Lowercase letter</span>
                  </div>
                  <div className={`password-requirement ${passwordValidation?.hasNumbers ? 'requirement-met' : 'requirement-unmet'}`}>
                    <Icon name={passwordValidation?.hasNumbers ? "Check" : "X"} size={14} />
                    <span>Number</span>
                  </div>
                  <div className={`password-requirement ${passwordValidation?.hasSpecialChar ? 'requirement-met' : 'requirement-unmet'}`}>
                    <Icon name={passwordValidation?.hasSpecialChar ? "Check" : "X"} size={14} />
                    <span>Special character</span>
                  </div>
                </div>
              </div>
            )}
            <div className="password-field">
              <Input
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm password"
                error={errors.confirmPassword}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="toggle-btn"
              >
                <Icon name={showConfirmPassword ? "EyeOff" : "Eye"} size={20} />
              </button>
            </div>
            {/* <div className="role-field">
              <label htmlFor="role">Role</label>
              <select id="role" name="role" value={formData.role} onChange={handleInputChange}>
                <option value="publisher">Publisher</option>
                <option value="editor">Editor</option>
              </select>
            </div> */}
            {errors.submit && (
              <div className="submit-error">
                <Icon name="AlertCircle" size={16} />
                <span>{errors.submit}</span>
              </div>
            )}
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
              {loading ? 'Creating...' : 'Create Child Admin'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateChildAdmin;