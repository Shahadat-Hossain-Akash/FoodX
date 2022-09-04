import Image from "next/image"
import { useState } from "react";
import styles from "../../styles/Product.module.css"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({food}) => {
    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(food.prices[0]);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantity] = useState();
    const dispatch = useDispatch();
    /*const food= {
        id:1,
        img: "/image/menufood1.png",
        name: "Spaghetti",
        price: [20, 25.99, 31.99],
        desc: "orem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }; */

    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) =>{

    const difference = food.prices[sizeIndex] - food.prices[size];
    setSize(sizeIndex);
    changePrice(difference);

    }

    const handleChange = (e, option) =>{

    const checked = e.target.checked;

    if (checked) {
    changePrice(option.price);
    setExtras((prev) => [...prev, option]);
    } else {
    changePrice(-option.price);
    setExtras(extras.filter((extra) => extra._id !== option._id));
    }

    }

    const handleClick = () => {

        dispatch(addProduct({...food,extras,price,quantity}));
    };



    return (
    <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.foodContainer}>
            <div className={styles.imageContainer}>
                <Image src={food.img} alt="" height="500" width="500"/>
            </div>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{food.title}</h1>
            <span className={styles.price}>${price}</span>
            <p className={styles.desc}>{food.desc}</p>
            <h3 className={styles.select}>Select the size</h3>
            <div data-cy="sizes" className={styles.sizes}>
            <div className={styles.sizeContainer}>
                <div className={styles.size} onClick={()=>handleSize(0)}>
                    
                    <span className={styles.number}>Small</span>
                </div>
                </div>
                <div className={styles.sizeContainer} onClick={()=>handleSize(1)}>
                <div className={styles.size} >
                    
                    <span className={styles.number}>Medium</span>
            </div>
            </div>
            <div className={styles.sizeContainer}>
                <div className={styles.size} onClick={()=>handleSize(2)}>
                    
                    <span className={styles.number}>Large</span>
                    </div>
            </div>
            </div>
            <h3 className={styles.choose}>Extra Add-ons</h3>
        <div className={styles.ingredients}>
        {food.extraOptions.map(option => (
        <div className={styles.option} key={option._id}>
            <input
            type="checkbox"
            id={option.text }
            name={option.text }

            onChange={(e) => handleChange(e, option)}
            
            className={styles.checkbox}
            />
            
            <label className="label"  htmlFor="mild">{option.text }</label>
        </div>
            ))}
        </div>
        <div className={styles.add}>
            <input data-cy="quantity" onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={0} className={styles.quantity}/>
            <button data-cy="Add-to-cart" className={styles.button} onClick={handleClick} >Add to Cart</button>
        </div>
    </div>
    </div>


    
    )
}

export const getServerSideProps = async ({params}) => {

    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props: {
        food: res.data
      }
    }
  }

export default Product
