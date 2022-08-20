import styles from "../styles/FoodCard.module.css"
import Image from "next/image"
import Link from "next/link"
const FoodCard = ({food}) => {
    return (
    <div className={styles.container}>
        <div className={styles.card}>
        <Link href={`/product/${food._id}`} passHref>
        <Image src = {food.img} width="200" height="200" alt=""/>
        </Link>
        <h1 className={styles.title}>{food.title}</h1>
        <span className={styles.price}>${food.prices[0]}</span>
        <div className={styles.desc}>{food.desc}</div>
        </div>
    </div>
)
}

export default FoodCard
