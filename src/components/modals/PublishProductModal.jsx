import { useState, useRef, useEffect } from "react";
import axios from "axios";

const PublishProductModal = ({ isOpen, onClose, onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [imageFile, setImageFile] = useState(null);

  const modalRef = useRef();

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", price);
    formData.append("availableQuantity", quantity);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("currency", currency);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
      onSubmit(response.data);

      // Clear form fields after submission
      setProductName("");
      setPrice(0);
      setQuantity(0);
      setDescription("");
      setCategory("");
      setCurrency("NGN");
      setImageFile(null);
      onClose();
    } catch (error) {
      console.error("Error creating product:", error.response.data);
    }
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
        <h2 className="text-xl font-semibold lg:mb-6">Publish Product</h2>

        <div className="lg:mb-4">
          <label className="block text-gray-700">
            What Product are you selling?
          </label>
          <input
            type="text"
            className="w-full border outline-teal border-gray-300 rounded px-3 py-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="lg:mb-4">
          <label className="block text-gray-700">Product Description</label>
          <textarea
            className="w-full border outline-teal border-gray-300 rounded px-3 py-2"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            className="w-full border outline-teal border-gray-300 rounded px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="electronics">Photography</option>
            <option value="fashion">Digital</option>
            <option value="home">Paintings</option>
            <option value="sports">Liquid</option>
            <option value="books">Ceramic</option>
            <option value="others">Nfts</option>
            <option value="others">Plaster</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Currency</label>
          <select
            className="w-full outline-teal border border-gray-300 rounded px-3 py-2"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="NGN">NGN</option>
          </select>
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <label className="block text-gray-700">
              How much do you sell for?
            </label>
            <input
              type="number"
              className="w-24 outline-teal border border-gray-300 rounded px-3 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">
              How many are you selling?
            </label>
            <input
              type="number"
              className="w-24 outline-teal border border-gray-300 rounded px-3 py-2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            className="border outline-teal border-gray-300 rounded px-3 py-2 w-full"
            onChange={handleFileChange}
          />
        </div>

        <button
          className="bg-teal text-white px-4 py-2 rounded hover:bg-teal-600"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default PublishProductModal;
