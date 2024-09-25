import { useState } from "react";
import axios from "axios";

const PublishProductModal = ({ isOpen, onClose, onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [imageFile, setImageFile] = useState(null); // State for the image file

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected file
  };

  const handleSubmit = async () => {
    // Create a FormData object to send data as multipart/form-data
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", price);
    formData.append("availableQuantity", quantity);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("currency", currency);
    if (imageFile) {
      formData.append("image", imageFile); // Add the image file to FormData
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
      console.log("Product created:", response.data); // Log the response or handle it as needed
      onSubmit(response.data); // Optionally call the onSubmit function to refresh the product list or notify the parent

      // Clear form fields after submission
      setProductName("");
      setPrice(0);
      setQuantity(0);
      setDescription("");
      setCategory("");
      setCurrency("USD");
      setImageFile(null); // Reset the image file

      onClose();
    } catch (error) {
      console.error("Error creating product:", error.response.data); // Handle errors
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed lg:inset-0 top-[8rem] lg:bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-xl font-semibold lg:mb-6">Publish Product</h2>

        <div className="lg:mb-4">
          <label className="block text-gray-700">
            What Product are you selling?
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="lg:mb-4">
          <label className="block text-gray-700">Product Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2"
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
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="NGN">NGN</option>
            {/* Add more currencies as needed */}
          </select>
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <label className="block text-gray-700">
              How much do you sell for?
            </label>
            <input
              type="number"
              className="w-24 border border-gray-300 rounded px-3 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">
              How much is available for sale?
            </label>
            <input
              type="number"
              className="w-24 border border-gray-300 rounded px-3 py-2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        {/* Add the file input for image upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishProductModal;
