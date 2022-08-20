/* eslint-disable react/jsx-no-undef */
import styles from "../styles/Footer.module.css"
import Image from "next/image"


const Footer = () => {
    return (
    /*
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/image/footer1.png" alt = "" layout="fill" objectFit="contain"/>
        </div>
    <div className={styles.item}>
        <div className={styles.card}>
            <h2 className={styles.motto}>Oh yes. We provide the best delivery service everywhere</h2>
        </div>
        <div className={styles.card}>
        <div className={styles.title}>
            Find Our Restaurant
            </div>
            <div className={styles.text}>
                1654 R, Don road
                <br/> New York, 85032
                <br/> (602) 867-2102
            </div>
            <div className={styles.text}>
                1654 R, Don road
                <br/> New York, 85032
                <br/> (602) 867-2102
            </div>
        </div>
        <div className={styles.card}>
            <h1 className={styles.title}>Contact us</h1>
            <br/> (602) 867-2102
            <br/> ORDER NOW
            </div>
    
    </div>
    </div>
        */
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
                <br/> New York, 85032
                <br/> (602) 867-2102
            </div>
        </div>
    </div>


    )
}

export default Footer
