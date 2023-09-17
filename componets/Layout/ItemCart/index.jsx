import styles from "./style.module.css";
import ImgCard from '../../../assents/item_card.png'
import Image from 'next/image';

function index() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContaienr}>
                <Image src={ImgCard}>

                </Image>
            </div>
            <div className={styles.date}>
                <div className={styles.name}>Peito de Frango</div>
                <div className={styles.prices}>R$40.00</div>
                <div className={styles.remove}>
                    <button>Remover</button>
                </div>
            </div>
            <div className={styles.quantity}>
                <span >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </span>
                <p>1</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default index