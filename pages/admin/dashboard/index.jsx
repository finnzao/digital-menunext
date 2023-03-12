import React from 'react';
import styles from "./style.module.css";
import { useState } from 'react';
import IndexTable from '@/componets/IndexTable';
import FormCreate from '@/componets/FormCreate';


function DashBoard() {


    return (

        <div className={styles.container}>
            <FormCreate />
            <IndexTable />
        </div>

    )
}

export default DashBoard;