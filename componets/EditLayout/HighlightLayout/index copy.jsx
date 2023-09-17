import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './style.module.css';
import Item from './Item';
import NewItemHighlight from '../../Layout/NewItemHighlight'


export default function index({ data }) {

    const itensHighLight = data.filter(prod => prod.highlight == false)
    console.log(itensHighLight)

    let slidesPerView = [1.5, 2.5, 3.5];
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
                                slidesPerView: 4.2,
                                spaceBetween: 0,
                            },
                        }}

                    >

                        {
                            itensHighLight.length == 0 ?
                                (itensHighLight.map(prod =>
                                    <SwiperSlide>
                                        <Item info={prod} />
                                    </SwiperSlide>
                                ))
                                :
                                (
                                    <SwiperSlide>
                                        {
                                            Array.from({ length: 2 }, (_, i) =>
                                                <Link href='/admin/dashboard/Edit/Highlight'>
                                                    <NewItemHighlight />
                                                </Link>
                                            )
                                        }

                                    </SwiperSlide>

                                )}

                    </Swiper>

                </div>
            </div >
        </>
    )
}
