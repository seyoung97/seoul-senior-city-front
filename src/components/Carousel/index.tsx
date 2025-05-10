import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { bannerBlue, bannerGreen, bannerOrange } from '@/assets/images';

import styles from './carousel.module.scss';

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // 3초마다
        disableOnInteraction: false, // 유저가 터치해도 멈추지 않음
      }}
      loop={true}
      spaceBetween={16}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className={styles.slide}>
          <img src={bannerGreen} alt="어르신이 많이 선택한 동네 TOP 3" className={styles.banner} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide}>
          <img src={bannerOrange} alt="미세먼지 안심지역" className={styles.banner} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide}>
          <img src={bannerBlue} alt="고령자 사고 주의 지역" className={styles.banner} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
