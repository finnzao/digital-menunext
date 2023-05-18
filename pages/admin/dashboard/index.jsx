import styles from "./style.module.css";
import IndexTable from '@/componets/IndexTable';
import FormCreate from '@/componets/FormCreate';
import { useSelector } from 'react-redux';
import { useReducer,useEffect } from 'react';
import { useQuery } from 'react-query';
import { getProds } from '@/lib/ProdResquests';
import Loading from "@/componets/Preloader"
import {api} from "@/services/api"
function DashBoard() {


    useEffect(()=>{
        api.get('/api/login')
    },[])

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

export const getServerSideProps = async (ctx)=>{
    console.log(ctx.req.cookies)
    return{
        props:{}
    }
}