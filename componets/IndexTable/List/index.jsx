import Item from "../Item/";
import styles from "./style.module.css"
const ProductsList = ({ prodList }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {prodList.map((item) => (
                    <Item key={item._id} prodInfos={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;