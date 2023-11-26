import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const FeatureClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes)
    return (
        <div className="mt-24">
            <div className="text-center">
                <h2 className='text-center text-primary text-2xl font-bold mt-24 border-b-8 border-primary'>Our classes</h2>
            </div>
            <div className="mt-5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <img src={classes[0]?.image} alt="" className="hover:mix-blend-overlay" />
                            <div className="absolute flex items-center left-[25%] bg-gradient-to-l from-[#7c4f4f] to-[rgba(21, 21, 21, 0)]">
                                <h3 className="text-xl uppercase text-center -mt-16 text-white">{classes[0]?.title}</h3>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={classes[1]?.image} alt="" />
                            <div>

                                <h3 className="text-xl uppercase text-center -mt-16 text-white">{classes[1]?.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={classes[2]?.image} alt="" />
                            <div>

                                <h3 className="text-xl uppercase text-center -mt-16 text-white">{classes[2]?.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={classes[3]?.image} alt="" />
                            <div>

                                <h3 className="text-xl uppercase text-center -mt-16 text-white">{classes[3]?.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={classes[3]?.image} alt="" />
                            <div>
                                <h3 className="text-xl uppercase text-center -mt-16 text-white">{classes[3]?.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={classes[5]?.image} alt="" />
                            <div>
                                <h3 className="text-xl uppercase text-center -mt-16 text-white">{classes[5]?.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default FeatureClasses;