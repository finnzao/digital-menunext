import styles from "./style.module.css";
import ButtonDelete from "@/componets/Buttons/buttonDelete";
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction, updateAction } from "@/redux/reducer";
const Item = ({ prodInfos }) => {
    const price = prodInfos.price[0].toFixed(2);
    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispacth = useDispatch()

    const onUpdate = () => {
        dispacth(toggleChangeAction())
        if (visible) {
            dispacth(updateAction(prodInfos._id))
        }

    }
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>{prodInfos.title}</h1>
            <span className={styles.price}>R${price}</span>
            <p className={styles.desc}>
                {prodInfos.desc}
            </p>

            <span className={styles.state}>{prodInfos.state}</span>
            <ButtonDelete Prodid={prodInfos._id} />
            <button onClick={onUpdate}>a</button>
        </div>
    )
}

export default Item;
