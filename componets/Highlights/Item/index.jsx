import styles from "./style.module.css";
import Image from 'next/image';

export default function index({ prodInfos }) {
    return (

        <div className={ styles.itemCardapio }>

            <div className={styles.img}>
                <Image
                    width={400}
                    height={400}
                    src={prodInfos.img}
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

