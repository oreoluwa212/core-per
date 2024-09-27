import React, { useState, useRef, useEffect } from "react";

const EditProductModal = ({ isOpen, onClose, product, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    currency: "",
    image: null,
  });

  const modalRef = useRef();

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        description: product.description || "",
        price: product.price || "",
        currency: product.currency || "",
        image: null,
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent body scroll
    } else {
      document.body.style.overflow = ""; // Reset body scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Reset body scroll on cleanup
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="mb-4 text-lg font-semibold">Edit Product</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            placeholder="Currency"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="block w-full mb-2 p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
