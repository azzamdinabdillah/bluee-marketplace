import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/buyer/landing/Home';
import BrowseCategoryProduct from './pages/buyer/landing/BrowseCategoryProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-category-product" element={<BrowseCategoryProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
