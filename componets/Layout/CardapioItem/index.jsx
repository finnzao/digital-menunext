import styles from "./style.module.css";
import Image from 'next/image';
import SoldOut from "../../../assents/soldout.png";
<<<<<<< HEAD
export default function CardapioItem({ prodInfos }) {
=======
export default function CardapioItem({prodInfos}) {
>>>>>>> 3d20795629f34146238a75c98695ef2021dec161
  return (
    <div className={prodInfos.state ? styles.itemCardapio : styles.itemCardapioNone}>
      <span className={styles.warningNone}>
        <span className={styles.warningImg}>
          <Image
            src={SoldOut}
            alt="soldout"
          />
        </span>
      </span>
      <div className={styles.img}>
        <Image
          width={400}
          height={400}
          src={prodInfos.img}
          alt={prodInfos.id}
        />
      </div>


      <div className={styles.textCardapio}>
        
        <div className={styles.headCardapio}>
          <span className={styles.title}>{prodInfos.title}</span>
          <div className={styles.pricesContainer}>
            <span className={styles.descont}>R${prodInfos.price[0].toFixed(2)}</span>
            <span className={styles.price}>R${prodInfos.price[0].toFixed(2)}</span>
          </div>
        
        </div>

        <div className={styles.desc}>
          {prodInfos.desc}
        </div>

        <div className={styles.ordenContainer}>
            <button className={styles.button}>Adicionar ao pedido</button>
          </div>
      </div>
    </div>
  )
}