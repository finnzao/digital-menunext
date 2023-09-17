<<<<<<< HEAD
import FormCreate from '../../../../componets/FormCreate';
import SideMenu from "../../../../componets/Layout/SideMenu"
import styles from "./style.module.css";
import { getProds } from '../../../../lib/ProdResquests';
import { useQuery } from 'react-query';
import Loading from "../../../../componets/Preloader";
import { api } from "../../../../services/api";
import { getAPIClient } from "../../../../services/axios";
import { parseCookies } from "nookies";
import Head from 'next/head';
function index() {

  const { data, isError, isLoading, isSuccess } = useQuery('prods', getProds);
  if (isLoading) return < Loading />
  if (isError) return <div>{isError}</div>
  return (
    <SideMenu>
      <Head>
        <title> Cadastrar Produto</title>
      </Head>
      <FormCreate data={data} />
    </SideMenu>
  )
}

export default index;

export const getServerSideProps = async (ctx: any) => {
  const apiClient = getAPIClient(ctx)
  const { ['digitalmenu.token']: token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: "/admin",
        permanet: false
      }
    }
  }

  await apiClient.get('/login') //Error: connect ECONNREFUSED ::1:80

  return { props: {} };
};
=======
import FormCreate from '../../../../componets/FormCreate';
import SideMenu from "../../../../componets/Layout/SideMenu"
import styles from "./style.module.css";
import { getProds } from '../../../../lib/ProdResquests';
import { useQuery } from 'react-query';
import Loading from "../../../../componets/Preloader";
function index() {

  const { data, isError, isLoading,isSuccess } = useQuery('prods', getProds);
  if (isLoading) return < Loading />
  if (isError) return <div>{isError}</div> 
  return (
    <>    
       <>
        <div className={styles.container}>
        
            
            
            <div className={styles.box}>
            <SideMenu/>
            <div className={styles.space}></div>
            <FormCreate data={data} />
            </div>
        </div>
        </>
    </>

  )
}

export default index
>>>>>>> 3d20795629f34146238a75c98695ef2021dec161
