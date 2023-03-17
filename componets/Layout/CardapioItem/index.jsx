import styles from "./style.module.css";

export default function CardapioItem({prodInfos}) {
  return (




        <div className={styles.itemCardapio}>
          <div className={styles.img}></div>

          <div className={styles.textCardapio}>
            <div className={styles.headCardapio}>
            <span>{prodInfos.title}</span>
            <span className={styles.price}>R${prodInfos.price[0].toFixed(2)}</span>
            </div>

            <div className={styles.desc}>
            {prodInfos.desc}
            </div>
          </div>
        </div>
	)
}