import Item from "../Item/";
import styles from "./style.module.css";
import {useTable} from "react-table";
import {useMemo} from "react";
const ProductsList = ({ prodList }) => {
    /*<div className={styles.wrapper}>
        {prodList.map((item) => (
            <Item key={item._id} prodInfos={item} />
                ))}
    </div>*/
    return (
    <table className={styles.wrapper}>
    <thead className={styles.full}>
    <tr className={styles.titlesTable}>
        <th>Produto</th>
        <th>Categoria</th>
        <th>Preço</th>
        <th className={styles.centerText}>Estado</th>
        <th className={styles.centerText}>Ações</th>
    </tr>
    </thead>

    <tbody className={styles.itensTable}>

        {prodList.map((item) => (
            <Item key={item._id} prodInfos={item} />
                ))}

    </tbody>
    </table>
    )
}

export default ProductsList;