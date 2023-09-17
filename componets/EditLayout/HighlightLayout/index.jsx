import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './style.module.css';
import Item from './Item';
import NewItemHighlight from '../../Layout/NewItemHighlight'


export default function index({ data }) {

    const itensHighLight = data.filter(prod => prod.highlight == true)
    let NumItens=itensHighLight.length;
    let slidesPerView=[];
    console.log(slidesPerView)
    if (NumItens<4) {
        slidesPerView=[1.2,1.2,2.5,2.5,2.5]
    } else {
        slidesPerView = [1.5, 2.5, 3.5,4.2];
    }
    console.log(itensHighLight.length)
    return (
        <>

            <div className={styles.container}>

                <div className={styles.top}>
                    <h1>Destaques</h1>
                    <Link href='/admin/dashboard/Edit/Highlight'>
                        <h2>Ver todos</h2>
                    </Link>
                </div>
                <div className={styles.box}>

                    <Swiper
                    
                        breakpoints={{


                            // when window width is >= 640px
                            480: {
                                slidesPerView: slidesPerView[0]
                            },
                            890: {
                                slidesPerView: slidesPerView[1]
                            },
                            1255: {
                                slidesPerView: slidesPerView[2]
                            },
                            1350: {
                                slidesPerView: slidesPerView[3],
                                spaceBetween:0
                            },
                        }}

                    >



                        {
                            itensHighLight.length >=4 ?
                                <SwiperSlide>
                                    <div className={styles.link}>
                                        <Link href='/admin/dashboard/Edit/Highlight'>
                                            <NewItemHighlight />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                :
                                [...Array(2)].map((elementInArray, index) => (
                                    <SwiperSlide>
                                        <div className={styles.link}>
                                            <Link href='/admin/dashboard/Edit/Highlight'>
                                                <NewItemHighlight />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))
                        }
                        {
                            (
                                itensHighLight.map(prod =>
                                    <SwiperSlide>
                                        <div className={styles.link}>
                                        <Item info={prod} />
                                        </div>
                                    </SwiperSlide>
                                ))
                        }


                    </Swiper>

                </div>
                
            </div >
        </>
    )
}
