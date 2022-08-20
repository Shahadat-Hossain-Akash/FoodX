/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux";
import Link from "next/link";


const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
    <div className={styles.container}>
        <div className={styles.item}>
        <Link href="/" passHref>
            <div className={styles.textLogo}>
            <span className={styles.textLogoFood}>Food</span><span className={styles.textLogoX}>X</span>
            </div>
        </Link>
        </div>
        <div className={styles.item}>
        <ul className={styles.list}>
        <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
        </Link>
            <li className={styles.listItem}>About</li>
            <li className={styles.listItem}>Menu</li>
            <li className={styles.listItem}>Restaurant</li>
        </ul>
        </div>
        <Link href="/cart" passHref>
        <div className={styles.item}>
            <div className={styles.cart}>
                <Image src="/image/Shopping Cart yellow.png" alt="" height= "35" width="35" />
                <div className={styles.counter}>{quantity}</div>
            </div>
        </div>
        </Link>
    </div>
    )
}

export default Navbar
