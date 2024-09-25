import React, { useEffect, useState } from "react";
import axios from "axios";

// Function to format the date
const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', options); // Formats to DD/MM/YYYY
};

// Function to truncate description
const truncateDescription = (description) => {
  if (!description) return "";
  const words = description.split(" ");
  return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : description;
};

// ProductList Component
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products`);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg table-fixed">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Date Created</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">Unit Selling Price</th>
            <th className="py-2 px-4 border-b">Currency</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{truncateDescription(product.description)}</td>
              <td className="py-2 px-4 border-b">{formatDate(product.createdAt)}</td>
              <td className="py-2 px-4 border-b">{product.availableQuantity}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.currency}</td>
              <td className="py-2 px-4 border-b">{product.status || "Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ProductList;
