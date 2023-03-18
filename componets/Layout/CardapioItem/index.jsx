import styles from "./style.module.css";
import ImgProd from "@/assents/sushi.jpg";
import Image from 'next/image';
import SoldOut from "@/assents/soldout.png";
export default function CardapioItem({prodInfos}) {
  return (
        <div className={prodInfos.state?styles.itemCardapio:styles.itemCardapioNone}>
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
            src={ImgProd}
            alt="sushi"
          />
          </div>
      
          
          <div className={styles.textCardapio}>
            <div className={styles.headCardapio}>
            <span className={styles.title}>{prodInfos.title}</span>
            <span className={styles.price}>R${prodInfos.price[0].toFixed(2)}</span>
            </div>

            <div className={styles.desc}>
            {prodInfos.desc}
            </div>
          </div>
        </div>
	)
}