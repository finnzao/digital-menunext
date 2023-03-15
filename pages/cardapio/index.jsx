import styles from "./style.module.css";
import { getProds } from '@/lib/ProdResquests';
import CardapioItem from "@/componets/Layout/CardapioItem";
import { useQuery } from 'react-query';
export default function Cardapio() {
    const { data, isError, isLoading } = useQuery('prods', getProds);
    if (isLoading) return <div>Carregando</div>
    if (isError) return <div>{isError}</div>
    console.log(data)
  return (
    <>
    	<div >
       <div className={styles.head}>
         <h1 className={styles.title}>Restaurante Japones</h1>
         <span className={styles.separation}/>
         <span>- Menu - </span>
       </div>

      <div className={styles.container}>

        <div className={styles.gridCard}>


        {data.map((item)=>(
          <CardapioItem key={item._id} prodInfos={item}/>
          ))}
        




        </div>
      </div>


      </div>
    </>
  )
}
