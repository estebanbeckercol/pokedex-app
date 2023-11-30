import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
 const pages = [];

 for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
 }

 return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
 );
};

Pagination.propTypes = {
 currentPage: PropTypes.number.isRequired,
 totalPages: PropTypes.number.isRequired,
 onPageChange: PropTypes.func.isRequired,
};

export default Pagination;