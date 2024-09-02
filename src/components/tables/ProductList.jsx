const ProductList = ({ products }) => {
    return (
        <div className="mt-6">
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="text-left"> {/* Align table headers to the left */}
                        <th className="py-2 px-4 border-b">ID</th>
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
                    {products.map((product, index) => (
                        <tr key={index} className="text-left"> {/* Align table rows to the left */}
                            <td className="py-2 px-4 border-b text-left">{product.id}</td>
                            <td className="py-2 px-4 border-b text-left">{product.name}</td>
                            <td className="py-2 px-4 border-b text-left">{product.category}</td>
                            <td className="py-2 px-4 border-b text-left">{product.description}</td>
                            <td className="py-2 px-4 border-b text-left">{product.dateCreated}</td>
                            <td className="py-2 px-4 border-b text-left">{product.quantity}</td>
                            <td className="py-2 px-4 border-b text-left">{product.price}</td>
                            <td className="py-2 px-4 border-b text-left">{product.currency}</td>
                            <td className="py-2 px-4 border-b text-left">{product.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
