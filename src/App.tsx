import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/buyer/landing/Home";
import BrowseCategoryProduct from "./pages/buyer/landing/BrowseCategoryProduct";
import ProductDetails from "./pages/buyer/landing/ProductDetails";
import Checkout from "./pages/buyer/landing/Checkout";
import StoreDetails from "./pages/buyer/landing/StoreDetails";
import ScrollToTop from "./helper/ScrollToTop";
import Cart from "./pages/buyer/landing/Cart";
import ProductsPage from "./pages/buyer/landing/ProductsPage";
import OverviewBuyer from "./pages/buyer/backoffice-buyer/Overview";
import OverviewSeller from "./pages/seller/Overview";
import MyTransactions from "./pages/buyer/backoffice-buyer/manage-transactions/MyTransactions";
import DetailsTransaction from "./pages/buyer/backoffice-buyer/manage-transactions/DetailsTransaction";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MyStore from "./pages/seller/my-store/MyStore";
import CreateStore from "./pages/seller/my-store/CreateStore";
import MyProducts from "./pages/seller/my-products/MyProducts";
import MyProductDetails from "./pages/seller/my-products/MyProductDetails";
import CreateProduct from "./pages/seller/my-products/CreateProduct";
import Transactions from "./pages/seller/transactions/Transactions";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
          <Route path="overview" element={<OverviewBuyer />} />
          <Route path="manage-transactions">
            <Route index element={<MyTransactions />} />
            <Route path=":id" element={<DetailsTransaction />} />
          </Route>
        </Route>

        <Route path="/backoffice-seller">
          <Route path="overview" element={<OverviewSeller />} />
          <Route path="my-store">
            <Route index element={<MyStore />} />
            <Route path="create" element={<CreateStore />} />
          </Route>
          <Route path="my-products">
            <Route index element={<MyProducts />} />
            <Route path=":id" element={<MyProductDetails />} />
            <Route path="create" element={<CreateProduct />} />
          </Route>

          <Route path="transactions">
            <Route index element={<Transactions />} />
            {/* <Route path=":id" element={<DetailsTransaction />} /> */}
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
