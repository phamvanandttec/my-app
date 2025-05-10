'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Product from "./components/product";


export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const result = await response.json();
        if (response.ok) {
          console.log("Products:", result.data);
          setProducts(result.data);
        } else {
          console.error("Error fetching products:", result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchProducts();
  },[]);
  return (
   
       <div className={styles.content}>
        
        <div className={styles.mainContent}>
          {products?.map((p) => (
            <Product key={p._id} product={p} />
          ))}
          
        </div>
        
        </div>
      
  );
}
