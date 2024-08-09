import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] lgss:mt-16 w-full flex flex-col justify-between gap-16 lg:px-[5%]">
        <div className="overflow-x-auto mt-14 pt-5">
          {cartItems.length > 0 ? (
            <table className="min-w-full hidden md:table">
              <thead>
                <tr>
                  <th className="px-[8%] border-b border-black py-3 text-left">
                    Artwork
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Price
                  </th>
                  <th className="px-8 py-3 border-b border-black text-left">
                    Quantity
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-6 flex items-start">
                      <img
                        src={item.img}
                        alt={item.album}
                        className="w-24 h-24 object-cover mr-4"
                      />
                      <div>
                        <p className="text-lg font-medium">{item.album}</p>
                        <p className="text-sm text-gray-500">({item.album})</p>
                        <button
                          onClick={() => removeItemFromCart(index)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td className="px-6 text-left">€ {item.price}</td>
                    <td className="px-6 text-left">
                      <div className="flex items-center">
                        <span>1</span>
                      </div>
                    </td>
                    <td className="px-6 text-left">€ {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="min-w-full hidden md:table">
              <thead>
                <tr>
                  <th className="px-[8%] w-[40%] border-b border-black py-3 text-left">
                    Artwork
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Price
                  </th>
                  <th className="px-8 py-3 border-b border-black text-left">
                    Quantity
                  </th>
                  <th className="px-7 py-3 border-b border-black text-left">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    No items in cart.{" "}
                    <Link to="/galleries/products" className="text-blue-500">
                      Proceed to shop
                    </Link>
                  </td>
                </tr>
              </tbody>
            </div>
          )}

          <div className="md:hidden">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  className="flex flex-col border-b border-black py-6 px-5"
                  key={index}
                >
                  <div className="flex items-start mb-4">
                    <img
                      src={item.img}
                      alt={item.album}
                      className="w-24 h-24 object-cover mr-4"
                    />
                    <div>
                      <p className="text-lg font-medium">{item.album}</p>
                      <p className="text-sm text-gray-500">({item.album})</p>
                      <button
                        onClick={() => removeItemFromCart(index)}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Price:</span>
                    <span>€ {item.price}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex items-center">
                      <span>1</span>
                    </div>
                  </div>
                  <div className="hidden lgss:flex justify-between">
                    <span className="font-medium">Total:</span>
                    <span>€ {item.price}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col border-b border-black py-6 px-5">
                <div className="text-center flex py-6">
                  <h3>No items in cart.</h3>
                  <Link to="/galleries/products" className="text-blue-500 pl-2">
                    Proceed to shop
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {cartItems.length > 0 && (
          <div className="flex justify-center lgss:justify-end mt-12 lgss:pt-12">
            <Link to={"/checkout"}>
              <button className="bg-black text-white px-16 lgss:px-6 py-3 lgss:w-full rounded-full">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
