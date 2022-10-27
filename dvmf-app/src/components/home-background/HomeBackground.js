import background_image from '../../assets/images/home_background_placeholder.jpg';
import "./home-background.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function HomeBackground(props) {
    return (
        <div>
            <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            // loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, 
                // Pagination, 
                // Navigation
            ]}
            className="mySwiper home-background-swiper"
            >
            {props.data.map(item => (
                <SwiperSlide className='home-background-slide'>
                    {/* <figure className='home-background-figure'> */}
                        {/* <img className='home-background-image' src={item} alt="homepage-background-image" /> */}
                        {setVideo(item)}
                    {/* </figure> */}
                </SwiperSlide>   
            ))}
            </Swiper>
            
        </div>
    );
}

function setVideo(url){
    if(url.includes('video')){
        return <video src={url} autoPlay
        muted
        loop
        className="home-video"
        type="video/mp4"/>;
    } else {
        return <img className='home-background-image' src={url} alt="homepage-background-image" loading='lazy' />;
    }
}

function changeBackground(data){
        let i = 0;

        console.log(data.length);

        setInterval(e => {
            if(i == (data.length - 1)){
                i = 0;
                return i;
            } else {
              i++ 
              console.log(data[i]);
              return i;
            }
            
        }, 3000);

}

export default HomeBackground;