import { Routes, Route } from "react-router";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import ProductDescription from "../pages/ProductDescription";
import Cart from "../pages/Cart";
import Favourites from "../pages/Favourites";
import Favourites from "../pages/Profile";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="categories" element={<Categories />} />
      <Route path="product-description" element={<ProductDescription />} />
      <Route path="cart" element={<Cart />} />
      <Route path="fav" element={<Favourites />} />
      <Route path="profile" element={<Profile/>} />
    </Routes>
  );
}
