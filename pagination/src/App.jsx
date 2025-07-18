import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Pagination from "./components/Pagination";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalProducts = products.length;
  const productsPerPage = 12;
  const numOfPages = Math.ceil(totalProducts / productsPerPage);
  // 💡 Index of first product on current page
  const startIndex = (currentPage - 1) * productsPerPage;

  // 💡 Index of last product on current page (non-inclusive for slice)
  const endIndex = startIndex + productsPerPage;

  // 💡 Current page's products
  const currentProducts = products.slice(startIndex, endIndex);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=300");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" min-h-screen bg-[#d9d4cd]">
      <h1 className="p-10 text-amber-600 underline text-center flex flex-col text-9xl">
        Pagination
      </h1>
      {products.length > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={numOfPages}
        />
      )}

      <Products products={currentProducts} />
    </div>
  );
};

export default App;
