import styles from "../../styles/Order.module.css"
import Image from "next/image"
import React, { useState } from 'react';
import {useEffect} from 'react';
import axios from "axios";



const Order = ({order}) => {

    const status = order.status;
    const statusClass = (index) => {
        if (index-status<1) return styles.done;
        if (index-status ===1) return styles.inProgress;
        if (index-status>1) return styles.undone;
    };

    const [showing, setShowing] = useState(false);
    useEffect(() => {
    setShowing(true);
    }, []);
    
    if (!showing) {
        return null;
    }
    if (typeof window === 'undefined') {
        return <></>;
        }
    else{
    return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
            <tr className={styles.trTitle}>
                <th className={styles.trName}>Order ID</th>
                <th className={styles.trName}>Customer</th>
                <th className={styles.trName}>Address</th>
                <th className={styles.trName}>Total</th>
            </tr>
            
            <tr className={styles.tr}>
                <td>
                    <span className={styles.order}>{order._id}</span>
                </td>
                <td>
                    <span className={styles.customer}>{order.customer}</span>
                </td>
                <td>
                    <span className={styles.address}>{order.address}</span>
                </td>
                <td>
                    <span className={styles.total}>${order.total}</span>
                </td>
            </tr>

        </table>
            </div>
            <div className={styles.row}>
            <div table className={styles.tableStatus}>
                <div className={statusClass(0)}>
                    <Image src="/image/paid.png" alt="" width="40" height="40"/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width="40" height="40"/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/image/preparing.png" alt="" width="40" height="40"/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width="40" height="40"/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/image/onway.png" alt="" width="40" height="40"/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width="40" height="40"/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/image/delivered.png" alt="" width="40" height="40"/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/image/checked.png" alt="" width="40" height="40"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Purchase Details</h2>
            <div className={styles.textBox}>
            <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
            </div>
            <div className={styles.totalDiscountText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${order.total}
        </div>
        </div>
        <button disabled className={styles.button}>Payment Done</button>

            </div>
        </div>
    </div>
    )
    }
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
        props: { order: res.data },
        };
    };


export default Order
