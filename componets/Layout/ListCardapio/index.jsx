
export default function CardapioItem({prodInfos}) {
  return (




        <div className={styles.itemCardapio}>
          <div className={styles.img}></div>

          <div className={styles.textCardapio}>
            <div className={styles.headCardapio}>
            <span></span>
            <span className={styles.price}>R$20.00</span>
            </div>

            <div className={styles.desc}>
            DESCRIÇÃO
            </div>
          </div>
        </div>
	)
}