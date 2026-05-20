import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import SidebarNavigation from '../../shared/ui/SidebarNavigation';
import Header from '../../shared/ui/Header';
import BlogTitleSection from './components/BlogTitleSection';
import RichTextEditor from './components/RichTextEditor';
import BlogMetaSection from './components/BlogMetaSection';
import WordCountDisplay from './components/WordCountDisplay';
import BlogActionButtons from './components/BlogActionButtons';
import './CreateNewBlog.css';

const MAX_CHARACTERS = 5000;

const CreateNewBlog = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editBlogId = searchParams.get('edit');
  const isEditMode = Boolean(editBlogId);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    category: '',
    tags: [],
    featuredImage: '',
    images: []
  });

  const [originalBlog, setOriginalBlog] = useState(null);
  const [wordCount, setWordCount] = useState({ words: 0, characters: 0, remaining: MAX_CHARACTERS });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState({
    draft: false,
    publish: false
  });

   const handleFeaturedImageUpdate = (imagePath) => {
    setFormData(prev => ({ ...prev, featuredImage: imagePath }));
  };

  const [refreshCategories, setRefreshCategories] = useState(0);
  const [refreshTags, setRefreshTags] = useState(0);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      navigate('/sign-in');
    } else {
      fetchCategories();
      fetchTags();
      if (isEditMode) {
        fetchBlogData();
      }
    }
  }, [navigate, isEditMode, editBlogId, refreshCategories, refreshTags]);

  // Sync uploadedImages to formData.images
  useEffect(() => {
    setFormData(prev => ({ ...prev, images: uploadedImages }));
  }, [uploadedImages]);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/categories`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchTags = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/tags`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setTags(data);
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  const fetchBlogData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs/${editBlogId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setOriginalBlog(data);
        setFormData({
          title: data.title,
          author: data.author,
          content: data.content,
          category: data.category?._id || '',
          tags: data.tags?.map(tag => tag._id) || [],
          featuredImage: data.featuredImage || '',
          images: data.images || []
        });
        setUploadedImages(data.images || []);
        const text = data.content.replace(/<[^>]*>/g, '');
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const characters = text.length;
        const remaining = MAX_CHARACTERS - characters;
        setWordCount({ words, characters, remaining });
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
      Swal.fire('Error', 'Error loading blog data. Please try again.', 'error');
    }
  };

  const handleCategoryCreated = () => {
    setRefreshCategories(prev => prev + 1);
  };

  const handleTagCreated = () => {
    setRefreshTags(prev => prev + 1);
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const validateForm = (isPublishing = false) => {
    const newErrors = {};

    if (!formData?.title?.trim()) {
      newErrors.title = 'Blog title is required';
    }
    if (!formData?.author?.trim()) {
      newErrors.author = 'Author name is required';
    }

    if (isPublishing) {
      if (!formData?.content?.trim() || formData?.content === '<br>') {
        newErrors.content = 'Blog content is required for publishing';
      }
      if (!formData?.category) {
        newErrors.category = 'Category is required for publishing';
      }
      if (wordCount?.words < 100) {
        newErrors.content = 'Blog should have at least 100 words for publishing';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors)?.length > 0) {
      const errorList = Object.values(newErrors).join('<br/>');
      Swal.fire({
        icon: 'warning',
        title: 'Validation Errors',
        html: errorList,
        confirmButtonColor: '#3085d6'
      });
      return false;
    }
    return true;
  };

  const handleSaveDraft = async () => {
    if (!validateForm(false)) return;

    setIsLoading(prev => ({ ...prev, draft: true }));

    try {
      const token = localStorage.getItem('token');
      const url = isEditMode
        ? `${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs/${editBlogId}`
        : `${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs`;

      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('tags', JSON.stringify(formData.tags));
      formDataToSend.append('featuredImage', formData.featuredImage);
      formDataToSend.append('images', JSON.stringify(formData.images));
      formDataToSend.append('status', 'draft');

      const response = await fetch(url, {
        method: isEditMode ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save draft');
      }

      const message = isEditMode ? 'Draft updated successfully!' : 'Draft saved successfully!';
      Swal.fire('Success', message, 'success');
      navigate('/blog-list');
    } catch (error) {
      console.error('Error saving draft:', error);
      Swal.fire('Error', `Error saving draft: ${error.message}`, 'error');
    } finally {
      setIsLoading(prev => ({ ...prev, draft: false }));
    }
  };

  const handlePublish = async () => {
    if (!validateForm(true)) return;

    setIsLoading(prev => ({ ...prev, publish: true }));

    try {
      const token = localStorage.getItem('token');
      const url = isEditMode
        ? `${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs/${editBlogId}`
        : `${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs`;

      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('tags', JSON.stringify(formData.tags));
      formDataToSend.append('featuredImage', formData.featuredImage);
      formDataToSend.append('images', JSON.stringify(formData.images));
      formDataToSend.append('status', 'published');

      const response = await fetch(url, {
        method: isEditMode ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to publish blog');
      }

      const message = isEditMode ? 'Blog updated successfully!' : 'Blog published successfully!';
      Swal.fire('Success', message, 'success');
      navigate('/blog-list');
    } catch (error) {
      console.error('Error publishing blog:', error);
      Swal.fire('Error', `Error publishing blog: ${error.message}`, 'error');
    } finally {
      setIsLoading(prev => ({ ...prev, publish: false }));
    }
  };

  const handlePreview = () => {
    if (!formData?.title?.trim() || !formData?.content?.trim()) {
      Swal.fire('Warning', 'Please add title and content to preview the blog', 'warning');
      return;
    }
    Swal.fire('Preview', 'Preview functionality would open in a new window', 'info');
  };

  const hasContent = formData?.title?.trim() || formData?.content?.trim() || formData?.author?.trim();

  return (
    <div className="create-new-blog">
      <SidebarNavigation
        collapsed={sidebarCollapsed}
        onToggle={handleSidebarToggle}
      />
      <Header
        onSidebarToggle={handleSidebarToggle}
        sidebarCollapsed={sidebarCollapsed}
      />
      <main
        className="create-new-blog-main"
        style={{
          marginLeft: sidebarCollapsed ? '64px' : '240px'
        }}
      >
        <div className="create-new-blog-content">
          <div className="create-new-blog-header">
            <h1 className="create-new-blog-title">
              {isEditMode ? 'Edit Blog' : 'Create New Blog'}
            </h1>
            <p className="create-new-blog-subtitle">
              {isEditMode
                ? 'Update and publish your blog content'
                : 'Write and publish engaging content for your audience'}
            </p>
          </div>

          <div className="create-new-blog-grid">
            <div className="create-new-blog-main-content">
              <BlogTitleSection
                title={formData?.title}
                author={formData?.author}
                onTitleChange={(title) => setFormData(prev => ({ ...prev, title }))}
                onAuthorChange={(author) => setFormData(prev => ({ ...prev, author }))}
                errors={errors}
              />

              <RichTextEditor
                content={formData?.content}
                onContentChange={(content) => setFormData(prev => ({ ...prev, content }))}
                onWordCountChange={setWordCount}
                uploadedImages={uploadedImages}
                setUploadedImages={setUploadedImages}
                onFeaturedImageUpdate={handleFeaturedImageUpdate} // Add this prop
              />

              <WordCountDisplay wordCount={wordCount} />

              <div className="mobile-meta-section">
                <BlogMetaSection
                  categories={categories}
                  tags={tags}
                  selectedCategory={formData?.category}
                  onCategoryChange={(category) => setFormData(prev => ({ ...prev, category }))}
                  selectedTags={formData?.tags}
                  onTagsChange={(tags) => setFormData(prev => ({ ...prev, tags }))}
                  featuredImage={formData?.featuredImage}
                  onFeaturedImageChange={(featuredImage) => setFormData(prev => ({ ...prev, featuredImage }))}
                  errors={errors}
                  onCategoryCreated={handleCategoryCreated}
                  onTagCreated={handleTagCreated}
                  isFeaturedImageEditable={false} // Add this prop
                />
              </div>

              <div className="mobile-action-buttons">
                <BlogActionButtons
                  onSaveDraft={handleSaveDraft}
                  onPublish={handlePublish}
                  onPreview={handlePreview}
                  isLoading={isLoading}
                  hasContent={hasContent}
                  isEditMode={isEditMode}
                />
              </div>
            </div>

            <div className="create-new-blog-sidebar">
              <BlogMetaSection
                categories={categories}
                tags={tags}
                selectedCategory={formData?.category}
                onCategoryChange={(category) => setFormData(prev => ({ ...prev, category }))}
                selectedTags={formData?.tags}
                onTagsChange={(tags) => setFormData(prev => ({ ...prev, tags }))}
                featuredImage={formData?.featuredImage}
                onFeaturedImageChange={(featuredImage) => setFormData(prev => ({ ...prev, featuredImage }))}
                errors={errors}
                onCategoryCreated={handleCategoryCreated}
                onTagCreated={handleTagCreated}
              />

              <BlogActionButtons
                onSaveDraft={handleSaveDraft}
                onPublish={handlePublish}
                onPreview={handlePreview}
                isLoading={isLoading}
                hasContent={hasContent}
                isEditMode={isEditMode}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateNewBlog;
