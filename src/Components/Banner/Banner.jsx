import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import BannerContent from './BannerContent';
import { useCallback, useRef, useState } from 'react';
const Banner = () => {
  const bannerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlide = useCallback(() => {
    bannerRef.current?.swiper.slidePrev();
  },[]);
  const nextSlide = useCallback(() => {
    bannerRef.current?.swiper.slideNext();
  },[]);
  return (
    <>
      <Swiper
        ref={bannerRef}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Navigation, Autoplay]}
        autoplay={{
          delay:5000,
          disableOnInteraction: true,          
        }}
        className="bannerSwiper w-full [&.swiper-slide]flex [&.swiper-slide]justify-center [&.swiper-slide]items-center mt-5 max-w-full"
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          {activeSlide == 0 && (
            <BannerContent prevSlide={prevSlide} nextSlide={nextSlide}
              headline={'Welcome Home'}
              subhead={'Discover Your Dream Space'}
              text={'Step into a world of comfort and style. Find the perfect apartment that suits your lifestyle. Your dream home is just a click away.'}
              img={'https://source.unsplash.com/random/600x600'}
              link={'/apartments'}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeSlide == 1 && (
            <BannerContent prevSlide={prevSlide} nextSlide={nextSlide}
              headline={'Seamless Living'}
              subhead={'Elevate Your Living Experience'}
              text={'Experience the convenience of modern living. Our apartments are designed to seamlessly blend comfort and functionality, providing you with a space that feels like home.'}
              img={'https://source.unsplash.com/random/600x600'}
              link={'/apartments'}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeSlide == 2 && (
            <BannerContent prevSlide={prevSlide} nextSlide={nextSlide}
              headline={'Rule Your Space'}
              subhead={'Customize Your Sanctuary'}
              text={'At Dwellife, we believe in individuality. Personalize your space and make it truly yours. From cozy studios to spacious lofts, we have the canvas; you bring the creativity.'}
              img={'https://source.unsplash.com/random/600x600'}
              link={'/apartments'}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {activeSlide == 3 && (
            <BannerContent prevSlide={prevSlide} nextSlide={nextSlide}
              headline={'Explore Possibilities'}
              subhead={'Endless Choices, One Platform'}
              text={'Embark on a journey of exploration. With a diverse range of apartments at your fingertips, find the ideal place that suits your needs. Your next adventure begins with Dwellife.'}
              img={'https://source.unsplash.com/random/600x600'}
              link={'/apartments'}
            />
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
