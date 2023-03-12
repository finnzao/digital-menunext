import React from 'react';
import { useState } from 'react';
import styles from "./style.module.css";
import { RiFileEditLine } from "react-icons/Ri";
import { useQueryClient, useMutation, QueryClient } from 'react-query';
import { newProd, getProds } from '@/lib/ProdResquests';
import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction, updateAction } from "@/redux/reducer";
import { BsPencilFill } from 'react-icons/Bs';

function index() {
    //REDUCE
    const queryClient = useQueryClient()
    const formReduce = (state, event) => {
        return {
            ...state,
            [event.target.name]: event.target.value
        }
    }
    const [formData, setFormData] = useReducer(formReduce, {})
    const [toogleMenu, setToogleMenu] = useState(false);
    const [errorMsg, setErroMsg] = useState("")
    const visible = useSelector((state) => state.app.client.toggleForm)

    //MUTATION
    const dispacth = useDispatch()
    const addMutation = useMutation(newProd, {
        onSuccess: () => {
            queryClient.prefetchQuery('prods', getProds)
        }
    });

    //SEND FORM
    const sendForm = (e) => {
        e.preventDefault()
        if (!Object.keys(formData).length === 0) return console.log("Não existe Form Data");
        //Bug: Apos Clicar e Apagar ainda fica selecionado que o campo está preenchido 
        let { title, desc, img, price, state } = formData;
        const model = {
            title: title,
            desc: desc,
            img: img,
            price: [price],
            state: state
        }

        addMutation.mutate(model)
    }


    if (addMutation.isLoading) <div>Loading</div>
    if (addMutation.isError) return <div>{addMutation.error.message}</div>
    if (addMutation.isSuccess) return <div>COMpleto</div>

    //SHOW FORMCREAET
    const onUpdate = () => {
        dispacth(toggleChangeAction())
        if (visible) {
            dispacth(updateAction())
        }
    }
    return (
        <div className={styles.box}>
            <div> <span onClick={() => onUpdate()}>Editar Produto <RiFileEditLine /></span></div>
            {
                visible && (
                    <form className={styles.board} onSubmit={sendForm} >
                        <input name='title' onChange={setFormData} className={styles.input} type="text" placeholder='Nome' />
                        <input name='desc' onChange={setFormData} className={styles.input} type="text" placeholder='Descrição' />
                        <input name='price' onChange={setFormData} className={styles.input} type="numer" placeholder='Preço' />
                        <input name='img' onChange={setFormData} className={styles.input} type="file" accept="image/*" />
                        {
                            errorMsg && {
                                errorMsg
                            }
                        }
                        <span className={styles.error}>Preencha todos os dados</span>
                        <button className={styles.buttonForm}>Atualizar <BsPencilFill /></button>
                    </form>
                )
            }

        </div>
    )
}

export default index