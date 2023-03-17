import React from 'react';
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';
import styles from "./style.module.css";
import { deleteAction } from "@/redux/reducer"; 
import {useDispatch} from 'react-redux';
import {deleteProd,getProds} from '@/lib/ProdResquests'
import {useQueryClient} from 'react-query'
function ButtonDelete({ Prodid }) {
    const queryClient=useQueryClient();

    const deleteHandler = async()=>{
        await deleteProd(Prodid)
        await queryClient.prefetchQuery('prods',getProds)
    }
    return (
        <button className={styles.buttonIndex} onClick={deleteHandler}><TiDelete /></button>
    )
}

export default ButtonDelete