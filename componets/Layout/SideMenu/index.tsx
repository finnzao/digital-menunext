import { Children } from "react"
import MenuClose from "./MenuClose"
import styles from "./style.module.css"
export default function index({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.space}></div>
          <MenuClose />
          <div className={styles.margin}>
            {children}
          </div>

        </div>
      </div>
    </>
  )
}
