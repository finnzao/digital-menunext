import styles from "./style.module.css";
import { getProds } from '@/lib/ProdResquests';
import CardapioItem from "@/componets/Layout/CardapioItem";
import CategoriesButtons from "@/componets/Buttons/buttonsCategories";
import { useQuery } from 'react-query';
import { useState } from 'react';
import Preloader from "@/componets/Preloader";


export default function Cardapio() {
    const [categorySelect,setCategorySelect]=useState("Todos")
    const { data, isError, isLoading } = useQuery('prods', getProds);
    const [categorySelectValue,setCategorySelectValue]=useState("Todos")
    if (isLoading) return <Preloader/>
    if (isError) return <div>{isError}</div>
    //sort by state
    const sortArray = data.sort((a, b) => b.state - a.state);
    console.log(data)
    let categories= (function () {
        const categories = sortArray.reduce(function (values, item) {
        if (!values.includes(item.category)) {//se dentro do array values ainda tem a categoria do item atual
            values.push(item.category);
        }
        return values;//retornando as categorias sem repetir 
        }, ["Todos"])//Esse é o valor inicial para o array,pois não existe a categoria all na lista de produtos ,ela foi adicionada agora
        return categories
    })()


  return (
    <>
    	<div className={styles.cardapio} >
      <div className={styles.container}>
      <div className={styles.nine}>
          <h1>Restaurante Melhor Sabor<span>Cardapio</span></h1>
      </div>
  
      <div className={styles.boxButtons}>
        {categories.map((item)=>(

          <CategoriesButtons setCategorySelect={setCategorySelect} category={item} />
          ))}
        </div>
    
        <div className={styles.gridCard}>
        {
            categorySelect=='Todos'?
            sortArray.map((item)=>(
            <CardapioItem key={item._id} prodInfos={item}/>
            ))
        :sortArray.filter(item=>item.category===categorySelect).map((item)=>(
            <CardapioItem key={item._id} prodInfos={item}/>
            ))
        }
        
        </div>
      </div>


      </div>
    </>
  )
}
