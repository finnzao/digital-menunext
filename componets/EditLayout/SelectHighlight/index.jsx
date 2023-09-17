import styles from './style.module.css';
import Head from "next/head";
import ItemSlim from '../../Layout/ItemSlim'
import { useState } from "react";
import Pagination from '../../Layout/Pagination';
import { paginate } from '../../Layout/Pagination';
import Link from 'next/link';
export default function index({ dataHighlight }) {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(dataHighlight, currentPage, pageSize);
  return (
    <div className={styles.container}>
      <Head>
        <title>Selecionar Destaques</title>
      </Head>
      <div className={styles.box}>
        <div className={styles.top}>


          <h1>Escolha os destaques</h1>
        </div>
        <div className={styles.botter}>
          {paginatedPosts.map(prod =>

            <div className={styles.item}>
              <ItemSlim prodInfos={prod} />

            </div>

          )}


        </div>

      </div>
      <Pagination
        items={dataHighlight.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>
  )
}
