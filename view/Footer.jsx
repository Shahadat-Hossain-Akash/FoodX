/* eslint-disable react/jsx-no-undef */
import styles from "../styles/Footer.module.css"
import Image from "next/image"


const Footer = () => {
    return (
    <div className={styles.footer}>
        <div className={styles.col1}>
            <div className={styles.title}>
                Quick Links
                </div>
                <a className={styles.nav1} href="#">About</a>
                <a className={styles.nav1} href="#">Menu</a>
                <a className={styles.nav1} href="#">Restaurant</a>
            
        </div>
        <div className={styles.col2}>
            <div className={styles.title}>
                NewsLetter
                </div>
                <form className={styles.formStyle}>

                    <input className={styles.email} type="email" placeholder="Enter your email" required/>
                    <button className={styles.submit} type="submit" placeholder="Join our community">Join now</button>
                </form>
            
        </div>
        <div className={styles.col3}>
        <div className={styles.text}>
        <div className={styles.title}>Contact us</div>
                1654 R, Don road
                <br/> DHK, 1234
                <br/> 7542700
            </div>
        </div>
    </div>


    )
}

export default Footer
