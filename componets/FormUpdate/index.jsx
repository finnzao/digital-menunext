import React from 'react';
import { useState } from 'react';
import styles from "./style.module.css";
import { RiFileEditLine } from "react-icons/ri";
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getProd,updateProd,getProds } from '@/lib/ProdResquests';
import { toggleChangeAction, updateAction } from "@/redux/reducer"; 
import { BsPencilFill } from 'react-icons/bs';


function FormUpdate(props) {
    //Input result
    let [msgInput,SetMsgInput]=useState("")
    //Querry
    const queryClient=useQueryClient()
    const _id=props.id
    const UpdateMutation = useMutation((UpdateDate)=>updateProd(_id,inputData),{
        onSuccess:async(data)=>{
            //queryClient.setQueryData('prods',(old)=>[data])
           queryClient.prefetchQuery('prods',getProds);
           SetMsgInput(<span className={styles.green}>Atualizado com sucesso</span>);
        }
    })

    //VALORES INPUT
    const [inputData,SetInputData]=useState({
        title:props.title,
        desc:props.desc,
        price:props.price
    })
    function changehandle(e){
        SetInputData({...inputData,[e.target.name]:e.target.value})
    }
    //
    const {isLoading,isError,data,error}=useQuery(['prods',_id],()=>getProd(_id))
    if(isLoading) return <div>Carregando...</div>
    if(isError)SetMsgInput(<span className={styles.red}>Error </span>); 


    //SEND FORM
    const sendForm = async (e) => {
        e.preventDefault()
        await UpdateMutation.mutate(inputData)
    }

    //MOSTRAR RESPOSTA
    

    console.log(inputData)
    //SHOW FORMC REAET
    const onUpdate = () => {
        dispacth(toggleChangeAction())
        if (visible) {
            dispacth(updateAction())
        }
    }
    return (
        <div className={styles.box}>
            <div> <span className={styles.toggleForm} >Editando Produto <RiFileEditLine /></span></div>
            
          
                    <form className={styles.board} onSubmit={sendForm} >
                        <input name='title' value={inputData.title} defaultValue={props.title} onChange={changehandle} className={styles.input} type="text" placeholder='Nome' />
                        <input name='desc' value={inputData.desc} defaultValue={props.desc} onChange={changehandle} className={styles.input} type="text" placeholder='Descrição' />
                        <input name='price' value={inputData.price} defaultValue={props.price} onChange={changehandle} className={styles.input} type="numer" placeholder='Preço' />
     
                            <span className={styles.msgInput}>{msgInput}</span>
                        <button className={styles.buttonForm}>Confirmar Mudança <BsPencilFill /></button>
                    </form>
            
            

        </div>
    )
}

export default FormUpdate;