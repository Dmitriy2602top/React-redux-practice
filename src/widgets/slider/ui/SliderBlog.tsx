import classNames from 'classnames';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { apiService } from 'shared/api';
import ArrowLeft from 'shared/assets/icons/arrowLeft.svg';
import ArrowRight from 'shared/assets/icons/arrowRight.svg';
import { SliderItem } from './SliderItem';
import 'swiper/css';

export const SliderBlog = () => {
    const { data: sliders } = apiService.useFetchAllPostsQuery('');
    const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className={classNames('bg-white pt-10 pb-6')}>
            <div className='container'>
                <Swiper
                    className='w-full'
                    onSlideChange={({ activeIndex: index }) => {
                        setActiveIndex(index);
                    }}
                    spaceBetween={24}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    onSwiper={swiperIt => {
                        setSwiper(swiperIt);
                    }}
                    grabCursor
                >
                    {sliders?.map(slider => (
                        <SwiperSlide key={slider.id}>
                            <SliderItem image={slider.image} description={slider.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex gap-7 mt-5 justify-center'>
                    <button onClick={() => swiper?.slidePrev()}>
                        <img src={ArrowLeft} />
                    </button>
                    <div className='flex gap-4'>
                        {Array.from({ length: sliders !== undefined ? sliders.length - 1 : 0 }).map((_, index) => (
                            <div
                                key={index}
                                className={classNames(
                                    'w-4 rounded-50',
                                    activeIndex === index ? 'bg-bg-pagination-active' : 'bg-bg-pagination'
                                )}
                            ></div>
                        ))}
                    </div>
                    <button onClick={() => swiper?.slideNext()}>
                        <img src={ArrowRight} />
                    </button>
                </div>
            </div>
            <div />
        </div>
    );
};
