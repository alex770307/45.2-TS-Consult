import { HashRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./favoritesContext/FavoritesContext";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import Layout from "./layout/Layout";

import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import FetchFox from "./components/fetchFox/FetchFox";
import ProductPage from "./components/productPage/ProductPage";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";

import Lesson05 from "./components/fellowship/Lesson05";

import Carshop from "./consultation/consultation04/Carshop/Carshop";
import CityPage from "./consultation/consultation01/CityPage";
import User from "./consultation/consultation02/User";
import Playground from "./consultation/consultation03/Playground";
import Counter from "./consultation/consultation05/Counter/Counter";
import Sendwich from "./consultation/consultation06/Sendwich/Sendwich";
import PostContainer from "./consultation/consultation07/PostContainer/PostContainer";
import Coctail from "./consultation/consultation08/Coctail/Coctail";
import UserPage from "./consultation/consultation09/UserPage/UserPage";
import ProductList from "./consultation/consultation10/ProductList/ProductList";
import ChuckNorris from "./consultation/consultation11/ChuckNorris";
import IpLocation from "./consultation/consultation12/IpLocation";
import DataFetcher from "./consultation/consultation14/DataFetcher";

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="fellowship" element={<Lesson05 />} />
              <Route path="fetch-fox" element={<FetchFox />} />

              {/* добавили новые пути для корзины и продутков */}
              <Route path="cart" element={<Cart />} />
              <Route path="products" element={<Products />} />
              {/* новый динамический роутинг */}
              <Route path="products/:id" element={<ProductPage />} />

              <Route path="consultation-01" element={<CityPage />} />
              <Route path="consultation-02" element={<User />} />
              <Route path="consultation-03" element={<Playground />} />
              <Route path="consultation-04" element={<Carshop />} />
              <Route path="consultation-05" element={<Counter />} />
              <Route path="consultation-06" element={<Sendwich />} />
              <Route path="consultation-07" element={<PostContainer />} />
              <Route path="consultation-08" element={<Coctail />} />
              <Route path="consultation-09" element={<UserPage />} />
              <Route path="consultation-10" element={<ProductList />} />
              <Route path="consultation-11" element={<ChuckNorris />} />
              <Route path="consultation-12" element={<IpLocation />} />
              <Route path="consultation-13" element={<Products />} />
              <Route path="products/:productId" element={<ProductPage />} />
              <Route path="consultation-14" element={<DataFetcher />} />

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
