import React from "react";

interface PaginationProps {
    currentPage: number;
    // eslint-disable-next-line no-unused-vars
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
    return (
        <div>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
                Previous
            </button>
            <span>Page {currentPage}</span>
            <button onClick={() => onPageChange(currentPage + 1)}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
