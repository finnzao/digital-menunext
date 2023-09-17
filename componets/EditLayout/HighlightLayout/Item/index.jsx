import styles from './style.module.css';
import Image from 'next/image';
function index({ info }) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <Image
                            src={info.img}
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className={styles.title}>
                        {info.title}
                    </div>
                </div>
                <div className={styles.mark}>

                </div>
            </div>
        </div>
    )
}

export default index