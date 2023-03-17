import React from 'react';
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';
import styles from "./style.module.css";
import { deleteAction } from "@/redux/reducer"; 
import {useDispatch} from 'react-redux';
import {deleteProd,getProds} from '@/lib/ProdResquests'
import {useQueryClient} from 'react-query'
function ProdDeleteModal({id} ) {
    const queryClient=useQueryClient();

    const deleteHandler = async()=>{
        await deleteProd(id)
        await queryClient.prefetchQuery('prods',getProds)
        await dispatch(deleteAction(null))
    }
    return (
        <div className="modal">
        <div className="modalBackground"></div>  
        <div className="box">
            <span>Isso irá deletar o produto.<br>Tem certeza?</span>
            <button>Sim</button>
            <button>Não</button>
        </div>
    )
}

export default ProdDeleteModal;