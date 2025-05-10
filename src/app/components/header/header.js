import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
    return (
        <div className={styles.header} >
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/contact">Contact</Link>
            </li>
            <li>
            <Link href="/about">About</Link>
              
            </li>
          </ul>
        </nav>
        <div>
          <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
        </div>
       </div>
    );
}