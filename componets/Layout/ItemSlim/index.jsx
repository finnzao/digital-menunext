import { useState } from "react";
import Image from 'next/image';
import styles from "./style.module.css";
import { changeState } from '../../../lib/ProdResquests';

export default function CardapioItem({ prodInfos }) {
  const state = prodInfos.highlight;
  const id = prodInfos._id
  const [isChecked, setChecked] = useState(state);
  const handleCheck = async () => {
    setChecked((prevState) => !prevState)
    let nameState = 'highlight'
    await changeState(!state, id, nameState)
  }

  return (
    <label onClick={handleCheck} for={prodInfos._id}>
      <div className={styles.itemCardapio}>
        <div className={styles.img}>
          <Image
            width={400}
            height={400}
            src={prodInfos.img}
            alt="prodInfos.id"
          />
        </div>


        <div className={styles.textCardapio}>
          <span className={styles.title}>{prodInfos.title}</span>
          <div className={styles.checkbox_wrapper_1}>
            <input id={prodInfos._id} className={styles.substituted} defaultChecked={state} type="checkbox" />
            <label for={prodInfos._id} >Destaque Ativo</label>
          </div>
        </div>
      </div>
    </label>
  )
}




