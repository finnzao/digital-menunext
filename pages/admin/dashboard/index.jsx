import React, { useReducer } from 'react';
import styles from "./style.module.css";
import { useState } from 'react';
import IndexTable from '@/componets/IndexTable';
import FormCreate from '@/componets/FormCreate';
import FormUpdate from '@/componets/FormUpdate'
import { useSelector } from 'react-redux';

function DashBoard() {
    const formReducer = (state, event) => {
        return {
            ...state,
            [event.target.name]: event.target.value
        }
    }
    useSelector((state) => state.app.client.toggleForm)
    const formId = useSelector((state) => state.app.client.formId);
    const [formData, setFormData] = useReducer(formReducer, {})

    return (

        <div className={styles.container}>
            {formId ? <FormUpdate /> : <FormCreate />}

            <IndexTable />
        </div>

    )
}

export default DashBoard;