import styles from './style.module.css'
import SideMenu from "../../../../../componets/Layout/SideMenu"
import { getAPIClient } from "../../../../../services/axios";
import { getProds } from '../../../../../lib/ProdResquests';
import SelectHiglight from '../../../../../componets/EditLayout/SelectHighlight';
import Loading from "../../../../../componets/Preloader";
import { parseCookies } from "nookies";
import { useQuery } from 'react-query';

export default function index() {
    const { data, isError, isLoading, isSuccess } = useQuery('prods', getProds);
    if (isLoading) return < Loading />
    if (isError) return <div>{isError}</div>
    return (
        <SideMenu>
            <div className={styles.container}>
             <SelectHiglight dataHighlight={data}/>
             
            </div>
        </SideMenu>
    )
}

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