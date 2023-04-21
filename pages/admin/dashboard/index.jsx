import styles from "./style.module.css";
import IndexTable from '@/componets/IndexTable';
import FormCreate from '@/componets/FormCreate';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';
import { useQuery } from 'react-query';
import { getProds } from '@/lib/ProdResquests';
import Loading from "@/componets/Preloader"

function DashBoard() {

    const { data, isError, isLoading,isSuccess } = useQuery('prods', getProds);
    if (isLoading) return < Loading />
    if (isError) return <div>{isError}</div> 

    return (

        <div className={styles.container}>
            <FormCreate data={data} />
            <IndexTable data={data} />
        </div>

    )
}

export default DashBoard;