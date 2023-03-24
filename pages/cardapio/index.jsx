import styles from "./style.module.css";
import { getProds } from '@/lib/ProdResquests';
import CardapioItem from "@/componets/Layout/CardapioItem";
import { useQuery } from 'react-query';
import Preloader from "@/componets/Preloader"
export default function Cardapio() {
    const { data, isError, isLoading } = useQuery('prods', getProds);
    if (isLoading) return <Preloader/>
    if (isError) return <div>{isError}</div>
    const sortArray = data.sort((a, b) => b.state - a.state);
  return (
    <>
    	<div className={styles.cardapio} >

       <div className={styles.head}>
          <div className={styles.headText}>
            <h1 className={styles.title}>Restaurante Melhor Sabor</h1>
            <span className={styles.separation}/>
             <span>- Cardapio - </span>
         </div>
       </div>

      <div className={styles.container}>

        <div className={styles.gridCard}>

        {sortArray.map((item)=>(

          <CardapioItem key={item._id} prodInfos={item}/>
          ))}
        
        </div>
      </div>


      </div>
    </>
  )
}
