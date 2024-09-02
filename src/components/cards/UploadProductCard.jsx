export const UploadProductCard = ({ onUpload }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center mb-4">
                <div className="bg-gray-200 rounded-full p-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h6l7 7-7 7H3v-2a2 2 0 012-2h5l5-5-5-5H5a2 2 0 01-2-2V3z"
                        />
                    </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Make more Sales</h3>
            </div>
            <p className="text-gray-600 mb-6">
                Publish your product to global marketplaces
            </p>
            <button onClick={onUpload}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                Start
            </button>
        </div>
    );
};
