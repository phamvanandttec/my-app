import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

export default function Product(props) {
    const {product} = props ;
    
    return (
      <div className={styles.product}>
        <Link href={`/${product._id}`}>
          <div className={styles.mainProduct}>
            <div className={styles.productImage}>
              <Image
                src={`/${product.productImage}`}
                alt="Product 1"
                layout="responsive"
                width={110}
                height={110}
              />
            </div>
            <div className={styles.productName}>
              <h5>{product.productName}</h5>
            </div>
            <div className={styles.productPrice}>
              <strong className={styles.price}>
                {(
                  product.productPrice -
                  (product.productPrice * product.percentDiscount) / 100
                ).toLocaleString("vi-VN")}
                ₫
              </strong>
              <span className={styles.discount}>
                <label className={styles.oldPrice}>
                  {product.productPrice.toLocaleString("vi-VN")}₫
                </label>
                <small className={styles.percent}>
                  -{product.percentDiscount}%
                </small>
              </span>
            </div>
            <div className={styles.productRemain}>
              <Image
                src="/flash-sale.png"
                alt="Product 1"
                width={25}
                height={30}
              />
              <span>Còn {product.productRemain}/{product.productTotal} suất</span>
            </div>
          </div>
        </Link>
        <div className={styles.buyButton}>
          <Link href="/giohang">Mua ngay</Link>
        </div>
      </div>
    );
    
}