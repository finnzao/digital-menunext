import styles from "./style.module.css";
import IndexTable from '../../../componets/IndexTable';
import FormCreate from '../../../componets/FormCreate';
import Loading from "../../../componets/Preloader"
import {api} from "../../../services/api"
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getProds } from '../../../lib/ProdResquests';
import { parseCookies } from "nookies";
import { getAPIClient } from "../../../services/axios";
import SideMenu from "../../../componets/Layout/SideMenu"

export default function DashBoard() {


    useEffect(()=>{
      api.get('/login')
    },[])

    const { data, isError, isLoading,isSuccess } = useQuery('prods', getProds);
    if (isLoading) return < Loading />
    if (isError) return <div>{isError}</div> 
    //<FormCreate data={data} />
    return (
        <>
        <div className={styles.container}>
        
            
            
            <div className={styles.box}>
            <SideMenu/>
            <div className={styles.space}></div>
            <IndexTable data={data} />
            </div>
        </div>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx)
    const{ ['digitalmenu.token']:token }=parseCookies(ctx)
    if(!token){
        return{
            redirect:{
            destination:"/admin",
            permanet:false
            }
        }
    }
    
    //await apiClient.get('/login') //Error: connect ECONNREFUSED ::1:80

    return { props: {  } };
  };