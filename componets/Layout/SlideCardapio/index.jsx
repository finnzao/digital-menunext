import styles from "./style.module.css"
import img0 from "../../../assents/slidemenu/background.jpeg";
import img1 from "../../../assents/slidemenu/foodburguer.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
function index() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 6000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className={styles.item}>

          <span className={styles.title}>
            <h1>Delicioso & Saboroso</h1>
            <p>Faça seu pedido agora</p>
            <button className={styles.button}>
              Compre agora
            </button>
          </span>

          <div className={styles.image}>
            <Image src={img0} />
          </div>

        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.item}>

          <span className={styles.title}>
            <h1>Promoção de hamburgues</h1>
            <p>Melhores preços & Sabores inesquecíveis </p>
            <button className={styles.button}>
              Compre agora
            </button>
          </span>

          <div className={styles.image}>
            <Image src={img1} />
          </div>

        </div>
      </SwiperSlide>

    </Swiper>
  );

}

export default index