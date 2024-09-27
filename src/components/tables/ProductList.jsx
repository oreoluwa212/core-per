import React, { useState, useEffect } from "react";
import axios from "axios";
import EditProductModal from "../modals/EditProductModal";

// Function to format the date
const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', options);
};

const truncateDescription = (description) => {
  if (!description) return "";
  const words = description.split(" ");
  return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : description;
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_APP_API_URL}/products/${id}`);
      setProducts((prevProducts) => prevProducts.filter(product => product._id !== id));
    } catch (err) {
      alert("Failed to delete product. Please try again.");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSubmit = async (formData) => {
    const { name, category, description, price, currency, image } = formData;
    const formDataToSend = new FormData();

    formDataToSend.append("name", name);
    formDataToSend.append("category", category);
    formDataToSend.append("description", description);
    formDataToSend.append("price", price);
    formDataToSend.append("currency", currency);

    if (image) {
      formDataToSend.append("image", image);
    }

    try {
      await axios.put(`${import.meta.env.VITE_APP_API_URL}/products/${editingProduct._id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === editingProduct._id ? { ...product, name, category, description, price, currency } : product
        )
      );
      handleCloseModal();
    } catch (err) {
      alert("Failed to update product. Please try again.");
    }
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-10 overflow-x-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border outline-teal p-2 rounded mb-4 w-full"
      />
      <table className="min-w-full bg-white shadow-md mt-6 rounded-lg table-fixed">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Date Created</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">Unit Selling Price</th>
            <th className="py-2 px-4 border-b">Currency</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{truncateDescription(product.description)}</td>
              <td className="py-2 px-4 border-b">{formatDate(product.createdAt)}</td>
              <td className="py-2 px-4 border-b">{product.availableQuantity}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.currency}</td>
              <td className="py-2 px-4 border-b flex gap-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <EditProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={editingProduct}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProductList;
