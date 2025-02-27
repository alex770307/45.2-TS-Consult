import { useEffect, useState } from "react";
import styles from "./productList.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function ProductList(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const arr = await res.json();
    setProducts(arr);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li className={styles.productCard}>
            <p className={styles.title}>{product.title}</p>
            <img className={styles.image} src={product.image} alt="" />
            <p className={styles.price}>{`${product.price} $`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
