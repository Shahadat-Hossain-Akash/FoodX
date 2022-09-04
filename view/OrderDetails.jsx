import {useState} from 'react'
import styles from '../styles/OrderDetails.module.css'

const OrderDetails = ({total, createOrder}) => {

    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    };

    return (
    <div className= {styles.container}>
        <div className={styles.wrapper}>
        <h1 className={styles.title}></h1>
        <div className={styles.item}>
        <label className={styles.label}>Name</label>
        <input data-cy="name"
            placeholder="Your Name"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
        />
        </div>
        <div className={styles.item}>
            <label className={styles.label}>Contact Number</label>
            <input data-cy="contact"
            type="text"
            placeholder="Add Contact"
            className={styles.input}
        />
        </div>
        <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea data-cy="address"
            rows={5}
            placeholder="Enter your address"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
            />
        </div>
        <button data-cy="order" className={styles.button} onClick={handleClick}>
            Order
        </button>
    </div>
    </div>
    );
};

export default OrderDetails
