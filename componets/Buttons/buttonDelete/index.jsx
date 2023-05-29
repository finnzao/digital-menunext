import React from 'react';
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';
import styles from "./style.module.css";
import { useDispatch } from 'react-redux';
import { deleteProd, getProds } from '../../../lib/ProdResquests'
import { useQueryClient } from 'react-query'
function ButtonDelete({ Prodid }) {


    const queryClient = useQueryClient();

    const deleteHandler = async () => {
        await deleteProd(Prodid)
        await queryClient.prefetchQuery('prods', getProds)
    }
    return (
        <button className={styles.buttonIndex} onClick={deleteHandler}><TiDelete height="2em" width="2em"/></button>
    )
}

export default ButtonDelete