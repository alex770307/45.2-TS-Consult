import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.css'
// import Header from './Header';
// import Footer from './Footer';
import { getTotalPrice } from '../components/cart/Cart';
import { useCart } from '../context/CartContext';

export default function Layout() {
  const { cart } = useCart();
  return (
    <>
      <header className={styles.header}>
        {/* <Header /> */}
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to="fellowship"
          >
            fellowship
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to="fetch-fox"
          >
            fetch fox
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to="products"
          >
            products
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to="cart"
          >
            cart
          </NavLink>
        </nav>
        <span>total: {getTotalPrice(cart)}€</span>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        {/* <Footer /> */}
        Footer
      </footer>
    </>
  );
}