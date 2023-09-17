import React from 'react';
import { useState } from 'react';
import styles from "./style.module.css";
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getProd,updateProd,getProds } from '../../lib/ProdResquests';
import { toggleChangeAction, updateAction } from "../../redux/reducer"; 
import { BsPencilFill } from 'react-icons/bs';


function FormUpdate(props,{x}) {

    let [msgInput,SetMsgInput]=useState("")

 
    const queryClient=useQueryClient()
    const _id=props.id
    const UpdateMutation = useMutation((UpdateDate)=>updateProd(_id,inputData),{
        onSuccess:async(data)=>{
            //queryClient.setQueryData('prods',(old)=>[data])
           queryClient.prefetchQuery('prods',getProds);
           SetMsgInput(<span className={styles.green}>Atualizado com sucesso</span>);
        }
    })


    const [inputData,SetInputData]=useState({
        title:props.title,
        desc:props.desc,
        price:props.price
    })
    function changehandle(e){
        SetInputData({...inputData,[e.target.name]:e.target.value})
    }

    const {isLoading,isError,data,error}=useQuery(['prods',_id],()=>getProd(_id))
    if(isLoading) return <div>Carregando...</div>
    if(isError)SetMsgInput(<span className={styles.red}>Error </span>); 



    const sendForm = async (e) => {
        e.preventDefault()
        if (inputData.title=="" || inputData.price=="" || inputData.desc==""){
            return SetMsgInput("Preencha todos os campos")
        }
        var pattern=/[^\d\.]/g
        if (pattern.test(inputData.price)){
        return SetMsgInput("É permitido apenas números e '.' como preço ")
        }
        console.log(inputData)
        await UpdateMutation.mutate(inputData)
    }


    const onUpdate = () => {
        dispacth(toggleChangeAction())
        if (visible) {
            dispacth(updateAction())
        }
    }
    return (
        <div className={styles.box}>
                    <form className={styles.board} onSubmit={sendForm} >
                        <div className={styles.itemForm}>
                        <span className={styles.titleItem}>Produto:</span>
                        <input name='title' value={inputData.title} defaultValue={props.title} onChange={changehandle} className={styles.input} type="text" placeholder='Nome' />
                        </div>
                        <div className={styles.itemForm}>
                         <span className={styles.titleItem} >Descrição:</span>
                        <input name='desc' value={inputData.desc} defaultValue={props.desc} onChange={changehandle} className={styles.input} type="text" placeholder='Descrição' />
                        </div>
                        <div className={styles.itemForm}>
                         <span className={styles.titleItem}>Valor:</span>
                            <span className={styles.valueInput} >&#36; <input name='price' value={inputData.price} defaultValue={props.price} onChange={changehandle} className={styles.input} type="numer" placeholder='Preço' /></span>
                        </div>
                            <span className={styles.msgInput}>{msgInput}</span>
                        <button className={styles.buttonForm}>Confirmar Mudança <BsPencilFill /></button>
                    </form>
            
            

        </div>
    )
}

export default FormUpdate;