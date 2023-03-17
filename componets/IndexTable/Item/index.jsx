import styles from "./style.module.css";
import ButtonDelete from "@/componets/Buttons/buttonDelete";
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction, updateAction } from "@/redux/reducer";
import { AiFillEdit } from "react-icons/ai";
import FormUpdate from '@/componets/FormUpdate';

import { useState } from 'react';
const Item = ({ prodInfos }) => {
    const price = prodInfos.price[0].toFixed(2);
  const [showCreateForm,SetCreateShowForm] = useState(false)


    const showForm=()=>{
        SetCreateShowForm(!showCreateForm)
      
    }
    return (
        <div>
        <div className={styles.container}>

            <h1 className={styles.title}>{prodInfos.title}</h1>
            <span className={styles.price}>R${price}</span>
            <p className={styles.desc}>
                {prodInfos.desc}
            </p>

            <span className={styles.state}>{prodInfos.state}</span>
            <span className={styles.buttonsTable}>
            <ButtonDelete className={styles.buttonIndex} Prodid={prodInfos._id} />
            <button className={styles.buttonIndex} onClick={showForm}> <AiFillEdit  /> </button>
           
            </span>
        </div>
         {
            showCreateForm && 
            <div  className={styles.ScreenForm}>
            <button>abc</button>
            <div onClick={showForm} className={styles.backgroundFrom}/>
         <FormUpdate id ={prodInfos._id} desc={prodInfos.desc} title={prodInfos.title} price={prodInfos.price}/>
         </div>
         
         }
         </div>
    
    )
}

export default Item;
