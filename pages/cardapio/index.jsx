import { useQuery } from 'react-query';
import { useState } from 'react';
import styles from "./style.module.css";
import { getProds } from '../../lib/ProdResquests';
import CardapioItem from "../../componets/Layout/CardapioItem";
import CategoriesButtons from "../../componets/Buttons/buttonsCategories";
import Preloader from "../../componets/Preloader";
import SlideCardapio from '../../componets/Layout/SlideCardapio';
import NavBar from "../../componets/Layout/NavBar";
import Footer from '../../componets/Layout/Footer';
import Highlights from '../../componets/Highlights';
import Operation from '../../componets/Layout/Operation'
import Head from 'next/head';


export default function Cardapio() {
  const [categorySelect, setCategorySelect] = useState("Todos")
  const { data, isError, isLoading } = useQuery('prods', getProds);

  if (isLoading) return <Preloader />
  if (isError) return <div>{isError}</div>
  //sort by state
  const sortArray = data.sort((a, b) => b.state - a.state);
  let categories = (function () {
    const categories = sortArray.reduce(function (values, item) {
      if (!values.includes(item.category)) {//se dentro do array values ainda tem a categoria do item atual
        values.push(item.category);
      }
      return values;//retornando as categorias sem repetir 
    }, ["Todos"])//Esse é o valor inicial para o array,pois não existe a categoria all na lista de produtos ,ela foi adicionada agora
    return categories
  })()
  const highlight = sortArray.filter(item => item.highlight === true)
  return (
    <>
      <Head>
        <title>Melhor Sabor</title>
        <meta name="description" content="Melhor Comida da região" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/12/12426.png" />
      </Head>

      <div className={styles.cardapio} >
        <NavBar></NavBar>
        <SlideCardapio />
        <div className={styles.container}>

          <Highlights data={highlight} />

          <Operation />

          <div className={styles.titlegray}>
            <h1><span>Categorias</span></h1>
          </div>

          <div className={styles.boxButtons}>
            {categories.map((item) => (

              <CategoriesButtons data={sortArray} setCategorySelect={setCategorySelect} category={item} />
            ))}
          </div>

          <div className={styles.gridCard}>
            {
              categorySelect == 'Todos' ?
                sortArray.map((item) => (
                  <CardapioItem key={item._id} prodInfos={item} />
                ))
                : sortArray.filter(item => item.category === categorySelect).map((item) => (
                  <CardapioItem key={item._id} prodInfos={item} />
                ))
            }

          </div>

        </div>

        <Footer></Footer>
      </div>
    </>
  )
}
