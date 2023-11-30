/*import React from 'react';
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

export default Pagination;*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Número de elementos por página

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
     
      }</div>
      ))}

      {}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginationComponent;*/