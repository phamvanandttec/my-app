"use client";
import Link from "next/link";
import {  useEffect, useState } from "react";
import KmSlider from "../components/slider/kmslider";
import SimpleSlider from "../components/slider/slider";
import styles from "./page.module.css";
export default function ChiTietSanPham(params) {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    async function fetchProductId(params) {
      const { productId } = await params;
      setProductId(productId);
    }
    fetchProductId(params.params);
  }, [params]);

  useEffect(() => {
    async function fetchProduct(productId) {
      try {
        if (!productId) {
          console.log("Product ID is null");
          return;
        }
        const response = await fetch(`/api/products/${productId}`);
        const result = await response.json();
        if (response.ok) {
          setProduct(result.product);
        } else {
          console.log("Error fetching product:", result.error);
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    }
    fetchProduct(productId);
  }, [productId]);
  return (
    <div className={styles.chitietsanpham}>
      {product && (
        <div className={styles.mainContent}>
          <div className={styles.gioithieu}>
            <div className={styles.hinhanh}>
              <div className={styles.slider}>
                <SimpleSlider></SimpleSlider>
              </div>
            </div>
            <div className={styles.gia}>
              <div className={styles.giaban}>
                <h3>{product?.productName}</h3>
                <p>
                  {(
                    product.productPrice -
                    (product.productPrice * product.percentDiscount) / 100
                  )?.toLocaleString("vi-VN")}
                  ₫
                  <span className={styles.giacu}>
                    {product.productPrice?.toLocaleString("vi-VN")}₫
                  </span>
                </p>
              </div>
              <div className={styles.khuyenmai}>
                <div className={styles.kmslider}>
                  <KmSlider />
                </div>
              </div>
              <div className={styles.muangay}>
                <div className={styles.nutmua}>
                  <Link href="/giohang">Mua ngay</Link>
                  <span className={styles.giaohang}>
                    Giao hàng tận nơi hoặc nhận tại cửa hàng
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mota}>
            <div
              dangerouslySetInnerHTML={{ __html: product?.productDescription }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
