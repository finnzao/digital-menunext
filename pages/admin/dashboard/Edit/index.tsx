import SideMenu from "../../../../componets/Layout/SideMenu"
import styles from "./style.module.css";
import { getProds } from '../../../../lib/ProdResquests';
import { useQuery } from 'react-query';
import Loading from "../../../../componets/Preloader";
import EditLayout from "../../../../componets/EditLayout"
import { getAPIClient } from "../../../../services/axios";
import { parseCookies } from "nookies";
import Head from "next/head";
function index() {

  const { data, isError, isLoading, isSuccess } = useQuery('prods', getProds);
  if (isLoading) return < Loading />
  if (isError) return <div>{isError}</div>

  return (
    <SideMenu>
      <Head>
        <title> Editar Pagina</title>
      </Head>
      <div className={styles.container}>
        <EditLayout data={data} />
      </div>
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