
import styles from "./style.module.css";

export default function Preloader() {

  return (

    <div className={styles.container}>
     <div className={styles.loader}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    </div>
  )

}