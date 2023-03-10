import React from 'react';
import styles from "./style.module.css";
import { getProds } from '@/lib/ProdResquests';
import List from "./List/index"
import { useQuery } from 'react-query'

function IndexTable() {

    const { data, isError, isLoading } = useQuery('prods', getProds);
    if (isLoading) return <div>Carregando</div>
    if (isError) return <div>{isError}</div>
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Destaques</h1>
            <div className={styles.table} >
                <List prodList={data} />
            </div>
        </div>

    )
}

export default IndexTable