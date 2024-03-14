"use client"

import React from 'react'
import styles from "./Pagination.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageSelect = (event) => {
    const selectedPage = parseInt(event.target.value, 10);
    onPageChange(selectedPage);
  };

  const renderPageButtons = () => {
    const visiblePageNumbers = [];

    if (currentPage > 3) {
      visiblePageNumbers.push(1, '...');
    }

    for (let i = Math.max(1, currentPage - 1); i <= Math.min(currentPage + 1, totalPages); i++) {
      visiblePageNumbers.push(i);
    }

    if (currentPage < totalPages - 1) {
      visiblePageNumbers.push('...', totalPages);
    }

    return visiblePageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => onPageChange(typeof number === 'number' ? number : currentPage)}
        className={currentPage === number ? styles.active : ''}
      >
        {number}
      </button>
    ));
  };

  return (
    <>
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <button onClick={() => onPageChange(currentPage - 1)}> <FontAwesomeIcon icon={faChevronLeft} /> </button>
        )}

        {renderPageButtons()}

        {currentPage < totalPages && (
          <button onClick={() => onPageChange(currentPage + 1)}> <FontAwesomeIcon icon={faChevronRight} /> </button>
        )}
      </div>
      <div className={styles.dropdown_container}>
        {/* Dropdown for selecting page */}
        <select value={currentPage} onChange={handlePageSelect} className={styles.pageSelect}>
          {pageNumbers.map((number) => (
            <option key={number} value={number}>
              Page {number}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Pagination;
