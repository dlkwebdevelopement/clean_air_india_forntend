import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Normalize path to prevent duplicate slashes and remove trailing slash (except for root)
  const normalizedPath = currentPath.replace(/\/+/g, '/').replace(/(.+)\/$/, '$1');
  
  // Requirement 5 & 6: Generate canonical using https://www.cleanairindia.com and remove query/hash (pathname only)
  const canonicalUrl = `https://www.cleanairindia.com${normalizedPath === "/" ? "/" : normalizedPath}`;

  // Do not generate canonical URLs for private/admin pages
  const excludedPrefixes = ['/admin', '/admin-list', '/dashboard', '/create-childadmin', '/create-new-blog', '/sign-up'];
  const isExcluded = excludedPrefixes.some(prefix => currentPath === prefix || currentPath.startsWith(prefix + '/'));

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Description */}
      <meta name="description" content={description} />

      {/* Canonical URL - exactly ONE per public page */}
      {!isExcluded && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      {!isExcluded && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Card Meta Tags */}
      {!isExcluded && <meta name="twitter:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
