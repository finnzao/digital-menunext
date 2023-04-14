import { useState } from "react";
import styles from "./style.module.css";
import { changeState } from '@/lib/ProdResquests'

const buttonToggle = ({ state, id }) => {
    const [isChecked, setChecked] = useState(state);

    const handleCheck = async () => {
        setChecked((prevState) => !prevState)
        await changeState(!state, id)
    }
    return (
        <div className={styles.container}>
            <h1>{isChecked ? "Disponivel" : "Indisponivel"}</h1>
            <label className={styles.label} >

                <input onClick={handleCheck} className={styles.input} defaultChecked={isChecked} type="checkbox" />
                <span className={styles.span} />
          
            </label>
        </div>
    )
}

export default buttonToggle;