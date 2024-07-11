import React from "react";
import "./pagination.css"

interface PaginationProps {
    currentPage: number;
    lastPage: number;
    // eslint-disable-next-line no-unused-vars
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange, lastPage }) => {
    return (
        <div className="pagination-container">
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage <= 1 }
                className="pagination-button">
                {"<"}
            </button>

            <span className="page-number">Page {currentPage}</span>
            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= lastPage}
                className="pagination-button">
                {">"}
            </button>
        </div>
    );
};

export default Pagination;
