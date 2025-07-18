import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    setCurrentPage((prev) => {
      if (currentPage < totalPages) return prev - 1;
      return prev;
    });
  };

  const handleNext = () => {
    setCurrentPage((prev) => {
      if (currentPage < totalPages) return prev + 1;
      return prev;
    });
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 my-6">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white cursor-pointer"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 border rounded ${
            page === currentPage
              ? "bg-amber-600 text-white"
              : "bg-white text-black cursor-pointer"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded  ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
