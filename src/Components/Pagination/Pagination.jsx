import React from 'react';
import PaginationStyle from "./Pagination.style";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ArrowLeft from "../../assets/images/icons/pagination-arrow-left.svg";
import ArrowRight from "../../assets/images/icons/pagination-arrow-right.svg";
import ScrollAnimate from "../ScrollAnimate";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const location = useLocation();

  // Don't render if only one page
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const generatePageUrl = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', page);
    return `${location.pathname}?${searchParams.toString()}`;
  };

  const handlePageClick = (page, e) => {
    e.preventDefault();
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <PaginationStyle>
      <ScrollAnimate delay={200}>
        <ul className="staco-pagination-list">
          {/* Previous Page */}
          <li className={currentPage === 1 ? 'disabled' : ''}>
            <NavLink 
              to={currentPage > 1 ? generatePageUrl(currentPage - 1) : '#'}
              onClick={(e) => handlePageClick(currentPage - 1, e)}
              className={currentPage === 1 ? 'disabled-link' : ''}
            >
              <img height="14" width="8" src={ArrowLeft} alt="Previous" loading="lazy"/>
            </NavLink>
          </li>

          {/* First Page + Ellipsis */}
          {pageNumbers[0] > 1 && (
            <>
              <li>
                <NavLink 
                  to={generatePageUrl(1)}
                  onClick={(e) => handlePageClick(1, e)}
                  className={currentPage === 1 ? 'active' : ''}
                >
                  1
                </NavLink>
              </li>
              {pageNumbers[0] > 2 && (
                <li className="ellipsis">
                  <span>...</span>
                </li>
              )}
            </>
          )}

          {/* Page Numbers */}
          {pageNumbers.map(page => (
            <li key={page} className={currentPage === page ? 'active' : ''}>
              <NavLink 
                to={generatePageUrl(page)}
                onClick={(e) => handlePageClick(page, e)}
              >
                {page}
              </NavLink>
            </li>
          ))}

          {/* Last Page + Ellipsis */}
          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <li className="ellipsis">
                  <span>...</span>
                </li>
              )}
              <li>
                <NavLink 
                  to={generatePageUrl(totalPages)}
                  onClick={(e) => handlePageClick(totalPages, e)}
                  className={currentPage === totalPages ? 'active' : ''}
                >
                  {totalPages}
                </NavLink>
              </li>
            </>
          )}

          {/* Next Page */}
          <li className={currentPage === totalPages ? 'disabled' : ''}>
            <NavLink 
              to={currentPage < totalPages ? generatePageUrl(currentPage + 1) : '#'}
              onClick={(e) => handlePageClick(currentPage + 1, e)}
              className={currentPage === totalPages ? 'disabled-link' : ''}
            >
              <img height="14" width="8" src={ArrowRight} alt="Next" loading="lazy"/>
            </NavLink>
          </li>
        </ul>
      </ScrollAnimate>
    </PaginationStyle>
  );
};

export default Pagination;