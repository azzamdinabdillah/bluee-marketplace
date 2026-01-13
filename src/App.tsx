import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/buyer/landing/Home";
import BrowseCategoryProduct from "./pages/buyer/landing/BrowseCategoryProduct";
import ProductDetails from "./pages/buyer/landing/ProductDetails";
import Checkout from "./pages/buyer/landing/Checkout";
import StoreDetails from "./pages/buyer/landing/StoreDetails";
import ScrollToTop from "./helper/ScrollToTop";
import Cart from "./pages/buyer/landing/Cart";
import ProductsPage from "./pages/buyer/landing/ProductsPage";
import MyTransaction from "./pages/buyer/backoffice-buyer/MyTransaction";
import Overview from "./pages/buyer/backoffice-buyer/Overview";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart">
          <Route index element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route
          path="/browse-category-product/:category"
          element={<BrowseCategoryProduct />}
        />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/store-details/:id" element={<StoreDetails />} />

        <Route path="/backoffice-buyer">
          <Route path="overview" element={<Overview />} />
          <Route path="my-transaction" element={<MyTransaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
