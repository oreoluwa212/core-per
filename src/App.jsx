import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import ProductsPage from "./pages/ProductsPage";
import ItemDetailsPage from "./pages/ItemsDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import Selection from "./pages/selection";
import SignUpAdmin from "./pages/signUp/admin";
import SignUpClient from "./pages/signUp/client";
import SignInAdmin from "./pages/signin/admin";
import SignInClient from "./pages/signin/client";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/galleries" element={<ExhibitionPage />} />
          <Route path="/galleries/products" element={<ProductsPage />} />
          <Route path="/galleries/products/item-details" element={<ItemDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/signup/admin" element={<SignUpAdmin />} />
          <Route path="/signup/client" element={<SignUpClient />} />
          <Route path="/signin/admin" element={<SignInAdmin />} />
          <Route path="/signin/client" element={<SignInClient />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
