
import React, { useState } from 'react';
import {useEffect} from 'react'; 
import styles from "../styles/Cart.module.css"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
    } from "@paypal/react-paypal-js";
import { useRouter } from 'next/router';
import axios from 'axios';
import { reset } from "../redux/cartSlice";
import OrderDetails from '../view/OrderDetails';
    
    const Cart = () => {
        
        const cart = useSelector((state) => state.cart);
        const [open, setOpen] = useState(false);
        const [cash, setCash] = useState(false);
        const amount = cart.total;
        const currency ="USD";
        const style = {"layout":"vertical", "color":"blue",};
        const dispatch = useDispatch();
        const router = useRouter();


        const createOrder = async (data) => {
            try {
            const res = await axios.post("http://localhost:3000/api/orders", data);
            res.status === 201 && router.push(`/orders/${res.data._id}`);
            dispatch(reset());
            } catch (err) {
                console.log(err);
            }
            };


        const ButtonWrapper = ({ currency, showSpinner }) => {

            const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
        
            useEffect(() => {
                dispatch({
                    type: "resetOptions",
                    value: {
                        ...options,
                        currency: currency,
                    },
                });
            }, [currency, showSpinner]);
        
        
            return (<>
                    { (showSpinner && isPending) && <div className="spinner" /> }
                    <PayPalButtons
                        style={style}
                        disabled={false}
                        forceReRender={[amount, currency, style]}
                        fundingSource={undefined}
                        createOrder={(data, actions) => {
                            return actions.order
                                .create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: currency,
                                                value: amount,
                                            },
                                        },
                                    ],
                                })
                                .then((orderId) => {
                                    
                                    return orderId;
                                });
                        }}
                        onApprove={function (data, actions) {
                            return actions.order.capture().then(function (details) {
                                const shipping = details.purchase_units[0].shipping;
                                createOrder({
                                    customer: shipping.name.full_name,
                                    address: shipping.address.address_line_1,
                                    total: cart.total,
                                    method: 1,
                                });   
                            });
                        }}
                    />
                </>
            );
        }







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
    <div className={styles.container} >
        <div className={styles.left}>
        {cart.products.map((product) => (
        <table className={styles.table} key={product._id}>
            <tbody>
            <tr className={styles.trTitle}>
                <th className={styles.trName}>Product</th>
                <th className={styles.trName}>Name</th>
                <th className={styles.trName}>Extras</th>
                <th className={styles.trName}>Price</th>
                <th className={styles.trName}>Quantity</th>
                <th className={styles.trName}>Total</th>
            </tr>
            </tbody>
            <tbody>
            <tr className={styles.tr} >
                <td>
                    <div className={styles.imageContainer}>
                        <Image src={product.img} alt='' layout='fill'/>
                    </div>
                </td>
                <td>
                    <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                
                    <span className={styles.extras}>
                    {product.extras.map((extra) => (
                        <span key={extra._id}>{extra.text} </span>
                    ))}
                </span>
                </td>
                <td>
                    <span className={styles.price}>{product.price}</span>
                </td>
                <td>
                    <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                    <span className={styles.total}>{product.price * product.quantity}</span>
                </td>
            </tr>
            </tbody>
        </table>
        ))}
        <div className={styles.tableGap}>
            
        </div>
        
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
            <h2 className={styles.title}>Purchase Details</h2>
            <div className={styles.textBox}>
            <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
            </div>
            <div className={styles.totalDiscountText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
        </div>
        </div>
        {open ? (
            <div className={styles.paymentMethods}>
            <button data-cy="pay-in-cash" className={styles.payButton} onClick={() => setCash(true)}>Cash on delivery</button>
            <PayPalScriptProvider
                options={{
                    "client-id": "AThpN7fNA97c_Zx_SLcT_idEnqVhIYZ7KM2pPrLaQs7dNosh82ZVTNf2qC5i5IwpqGXiC-9sd3ISQiW2",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding":"card,credit,venmo",
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                    
                />
			</PayPalScriptProvider>
            </div>
            ) : (
        <button data-cy="payment_button" onClick={() => setOpen(true)} className={styles.button}>Proceed To Pay</button>
        )}
        
            </div>
        </div>
        {cash && <OrderDetails total={cart.total} createOrder={createOrder} />}
    </div>
    
    );
    }
}

export default Cart
