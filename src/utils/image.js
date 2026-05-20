import defaultBlogImage from "../assets/images/blog/blog.webp";

/**
 * Resolves the given image URL dynamically.
 * If the URL starts with /uploads, it prepends the backend API base.
 * If it has a hardcoded developer local IP (192.168.1.77:5000), it swaps it for the correct active backend base.
 * Falls back to the default logo/blog banner if empty.
 */
export const getBlogImageUrl = (url, fallback = defaultBlogImage) => {
  if (!url) return fallback;
  
  // If it's a relative path starting with /uploads or uploads
  if (url.startsWith('/')) {
    const apiBase = (import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api').replace(/\/api$/, '');
    return `${apiBase}${url}`;
  }
  if (url.startsWith('uploads/')) {
    const apiBase = (import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api').replace(/\/api$/, '');
    return `${apiBase}/${url}`;
  }

  // If it contains a hardcoded local IP from previous developer uploads, replace it with the dynamic active backend base
  if (url.includes('192.168.1.77:5000')) {
    const apiBase = (import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api').replace(/\/api$/, '');
    return url.replace('http://192.168.1.77:5000', apiBase);
  }

  return url;
};
