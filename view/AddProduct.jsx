import React from 'react'
import styles from "../styles/Add.module.css"

const AddProduct = ({setClose}) => {
    return (
    <div className={styles.container}>
        <div onClick={() => setClose(false)} className={styles.mainAddProduct}>+</div>
    </div>
    )
}

export default AddProduct
