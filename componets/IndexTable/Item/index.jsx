import styles from "./style.module.css";
import ButtonDelete from "@/componets/Buttons/buttonDelete";
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction, updateAction } from "@/redux/reducer";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";
import FormUpdate from '@/componets/FormUpdate';
import ButtonToggle from "@/componets/Buttons/buttonToggleState";
import { useState } from 'react';
const Item = ({ prodInfos }) => {
    const price = prodInfos.price[0].toFixed(2);
    const [showCreateForm, SetCreateShowForm] = useState(false)


    const showForm = () => {
        SetCreateShowForm(!showCreateForm)

    }
    return (
        <>
            
            {
                !showCreateForm && 
                
                <>
                <tr>
                <td>
                 <h1 className={styles.title}>{prodInfos.title}</h1>
                 </td>
                <td>
                    <h1 className={styles.id} >{prodInfos.category}</h1>
                </td>
                <td>
                <span className={styles.price}>R${price}</span>
                </td>
                <td>
                <ButtonToggle state={prodInfos.state} id={prodInfos._id} />
                <span className={styles.state}>{prodInfos.state}</span>
                </td>
                <td>
                <span className={styles.buttonsTable}>
                    <ButtonDelete className={styles.buttonIndex} Prodid={prodInfos._id} />
                    <button className={styles.buttonIndex} onClick={showForm}> <AiFillEdit /> </button>
                </span>
                </td>
                </tr>
                </>
          
            
            }

            {
                showCreateForm &&
                <div className={styles.boxUpdate}>
                <div className={styles.containerUpdate}>
          
                <div className={styles.topFormUpdate} onClick={showForm}>
                    <span className={styles.titeFormUpdate}><h3>Editando Produto </h3> <RiFileEditLine/></span>
                    <span className={styles.closeFormUpdate} onClick={showForm}><AiOutlineClose/></span>

                </div>
                <FormUpdate id={prodInfos._id} desc={prodInfos.desc} title={prodInfos.title} price={prodInfos.price} />
                </div>
                </div>

            }
               
            </>

    

    )
}

export default Item;
