import Item from "../Item/";
import styles from "./style.module.css";

const ProductsList = ({ prodList }) => {
    
    const results = prodList.map(item=><Item key={item._id} prodInfos={item} />)

    const content = results?.length? results:<div className={styles.notFound}>Produto não encontrado</div>
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
        {content}
    </tbody>
    </table>
    )
}

export default ProductsList;