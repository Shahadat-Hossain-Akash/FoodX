import styles from "../styles/FoodList.module.css"
import FoodCard from "./FoodCard"

const FoodList = ({foodList}) => {
    return (
    <div className={styles.container}>
        <h2 className={styles.headTitle}>About us</h2>
        <h1 className={styles.title}>FoodX, Best food ordering service in town</h1>
            <di className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </di>
        <div className={styles.wrapper}>
            {foodList.map((food) => (
                <FoodCard key={food._id} food={food}/>))}


        </div>


    </div>
    )
}

export default FoodList
