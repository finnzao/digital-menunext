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