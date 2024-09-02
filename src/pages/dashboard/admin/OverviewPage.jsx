import { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { UploadProductCard } from "../../../components/cards/UploadProductCard";
import PublishProductModal from "../../../components/modals/PublishProductModal";
import ProductList from "../../../components/tables/ProductList";

const OverviewPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const handleUploadClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleProductSubmit = (product) => {
        const newProduct = {
            ...product,
            id: `CO${Math.floor(Math.random() * 100000)}P`,
            dateCreated: new Date().toLocaleDateString(),
            status: "available",
        };
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <AdminLayout>
                <div className="flex justify-center mt-8">
                    <UploadProductCard onUpload={handleUploadClick} />
                </div>
                <PublishProductModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSubmit={handleProductSubmit}
                />
                <ProductList products={products} />
            </AdminLayout>
        </div>
    );
};

export default OverviewPage;
