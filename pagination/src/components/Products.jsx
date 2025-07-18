import { ClipLoader } from "react-spinners";

const Products = ({ products }) => {
  if (!products.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#16a34a" size={150} />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer"
        >
          <img
            src={p.thumbnail}
            alt={p.title}
            className="w-full h-50 object-cover rounded"
          />
          <h2 className="mt-2 font-semibold text-lg">{p.title}</h2>
          <p className="text-sm text-gray-700">${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
