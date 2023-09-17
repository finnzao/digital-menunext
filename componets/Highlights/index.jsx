import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./style.module.css";
import Item from './Item'
import CardapioItem from "../Layout/CardapioItem";
function index({ data }) {
    return (

        <div className={styles.container}>
            <h1>Destaques</h1>
            <div className={styles.box}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        // when window width is >= 640px
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 50,
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 50,
                        },
                        1255: {
                            slidesPerView: 3.2,
                            spaceBetween: 50,
                        },
                        1324: {
                            slidesPerView: 4.2,
                            spaceBetween: 50,
                        },
                    }}

                    autoplay={{ delay: 10000 }}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.buttonNext',
                        prevEl: '.buttonPrev',
                    }}
                    spaceBetween={50}

                >

                    {data.map((item) => (

                        <SwiperSlide>
                            <Item key={item._id} prodInfos={item} />
                        </SwiperSlide>
                    ))}
                    
                    <div className={styles.boxButttons}>

                        <div className={`buttonPrev ${styles.buttonPrev} ${styles.buttonSwiper}`} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </div>

                        <div className={`buttonNext ${styles.buttonNext} ${styles.buttonSwiper}`} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </div>
                    </div>
                </Swiper>



            </div>
        </div >
    )
}

export default index