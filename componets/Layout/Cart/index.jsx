import styles from "./style.module.css";
import ItemCart from "../../Layout/ItemCart"
function index() {
    return (

            <div className={styles.box}>

                <div className={styles.top}>

                    <div className={styles.totalValue}>
                        <span >
                            Total: $ 40.00
                        </span>
                    </div>
                    <div className={styles.clear}>
                        <span >
                            Limpa Carrinho
                        </span>
                    </div>
                </div>

                <div className={styles.bottem}>
                    <ItemCart />
                </div>

                <div className={styles.payment}>
                    <button>Finalizar compra</button>
                </div>
                
            </div>

    )
}

export default index