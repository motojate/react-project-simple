import React from 'react';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pageNumbers.map(pageNumber => (
        <button
          key={pageNumber}
          className={currentPage === pageNumber ? 'active' : ''}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
