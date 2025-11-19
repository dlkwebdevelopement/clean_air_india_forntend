import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components copy/ui/Button';
import Input from '../../../components copy/ui/Input';
import { Checkbox } from '../../../components copy/ui/Checkbox';
import Icon from '../../../components copy/AppIcon';
import './SignInForm.css';

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Login ID validation
    if (!formData?.loginId) {
      newErrors.loginId = 'Username or email is required';
    }

    // Password validation
    if (!formData?.password) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://api.cleanairindia.com/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginId: formData.loginId, password: formData.password, rememberMe: formData.rememberMe }),
      });

      const data = await response.json();

      console.log("res",data);

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save token and user data
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      if (formData?.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      
      // onAuthChange(true);
      navigate('/dashboard');
    } catch (error) {
      setErrors({
        general: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/sign-up');
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        {/* Header */}
        <div className="signin-header">
          {/* <div className="signin-logo">
            <Icon name="FileText" size={32} color="white" />
          </div> */}
          <h1 className="signin-title">Welcome Back</h1>
          <p className="signin-subtitle">Sign in to your Blog Admin Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="signin-form">
          {/* General Error */}
          {errors?.general && (
            <div className="signin-error-alert">
              <div className="signin-error-content">
                <Icon name="AlertCircle" size={16} className="signin-error-icon" />
                <p className="signin-error-text">{errors?.general}</p>
              </div>
            </div>
          )}

          {/* Login ID Field */}
          <Input
            label="Username or Email"
            type="text"
            name="loginId"
            placeholder="Enter your username or email"
            value={formData?.loginId}
            onChange={handleInputChange}
            error={errors?.loginId}
            required
            disabled={isLoading}
          />

          {/* Password Field */}
          <div className="password-field-container">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData?.password}
              onChange={handleInputChange}
              error={errors?.password}
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-btn"
              disabled={isLoading}
            >
              <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
            </button>
          </div>

          {/* Remember Me */}
          <div className="signin-remember-forgot">
            <Checkbox
              label="Remember me"
              name="rememberMe"
              checked={formData?.rememberMe}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <button
              type="button"
              className="forgot-password-btn"
              disabled={isLoading}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            fullWidth
            loading={isLoading}
            disabled={isLoading}
            iconName={isLoading ? undefined : "LogIn"}
            iconPosition="left"
            iconSize={16}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>

          {/* Sign Up Link */}
          {/* <div className="signin-signup-link">
            <p className="signin-signup-text">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={handleSignUpRedirect}
                className="signin-signup-btn"
                disabled={isLoading}
              >
                Sign up here
              </button>
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default SignInForm;