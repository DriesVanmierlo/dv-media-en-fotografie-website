import PortfolioCarouselItem from '../portfolio-carousel-item/PortfolioCarouselItem';
import './portfolio-carousel.css';

import PortfolioModal from '../../components/portfolio-modal/PortfolioModal';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';

function PortfolioCarousel(props){

    let serviceInfo = props.data;

    const [openModal, setOpenModal] = useState(false);
    const [project, setProject] = useState();
    const [innerWidth, setWidth] = useState(window.innerWidth);

    if(innerWidth < 768){
        setSlideWidth(innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setWidth(this.window.innerWidth);
            if(innerWidth < 768){
                setSlideWidth(innerWidth);
            }
        }, true);
    })

    return (
            <div id={serviceInfo.service.toString().toLowerCase()} className='portfolio-carousel-content-component'>
                <div className={setTitleMargin(serviceInfo.service)}>
                    <h1 className='portfolio-content-main-title'>{serviceInfo.service}</h1>
                    <div className='portfolio-content-background-title'>Portfolio</div>
                </div>
                <div className='portfolio-carousel'>
                    <Swiper
                    modules={[A11y, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={setSlidesPerView(innerWidth)}
                    navigation
                    slidesPerGroup={setSlidesPerGroup(innerWidth)}
                    centeredSlides={setCentered(innerWidth)}
                    pagination={{ clickable: true,
                    dynamicBullets: true }} >
                       {props.data?.projects.map(item => (
                        <SwiperSlide className='portfolio-swiper-slide' onClick={() => {setOpenModal(true); setProject(item)}}>
                            <PortfolioCarouselItem data={item} />
                       </SwiperSlide>   
                       ))}
                    </Swiper>
                </div>
                {openModal && <PortfolioModal project={project} closeModal={setOpenModal} />}
            </div>
    )
}

function setSlidesPerView(innerWidth){
    if(innerWidth < 768){
        return "auto";
    } else if (innerWidth >= 1024){
        return 4;
    } else {
        return 2;
    }
}

function setSlidesPerGroup(innerWidth){
    if(innerWidth < 768){
        return 1;
    } else if (innerWidth >= 1024){
        return 4;
    } else {
        return 2;
    }
}

function setCentered(innerWidth){
    if(innerWidth < 768){
        return true;
    } else {
        return false;
    }
}

function setTitleMargin(service){
    if(service == "Fotografie"){
        return "portfolio-content-titles";
    } else {
        return "portfolio-content-titles-small";
    }
}

function setSlideWidth(width){
    console.log(width, "SET WIDTH");
    const collection = Array.from(
        document.getElementsByClassName('portfolio-swiper-slide')
      );
      collection.forEach((e) => {
        e.style.width = "75% !important";
      })
}

export default PortfolioCarousel;