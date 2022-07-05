import PortfolioCarouselItem from '../portfolio-carousel-item/PortfolioCarouselItem';
import './portfolio-carousel.css';

import PortfolioModal from '../../components/portfolio-modal/PortfolioModal';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PortfolioCarousel(props){

    let serviceInfo = props.data;
    let width = props.width;

    const [openModal, setOpenModal] = useState(false);
    const [project, setProject] = useState();

    return (
            <div id={serviceInfo.service.toString().toLowerCase()} className='portfolio-carousel-content-component'>
                <div className={setTitleMargin(serviceInfo.service)}>
                    <h1 className='portfolio-content-main-title'>{serviceInfo.service}</h1>
                    <div className='portfolio-content-background-title'>Portfolio</div>
                </div>
                <div className='portfolio-carousel'>
                    <Swiper
                    modules={[A11y, Pagination]}
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    centeredSlides={setCentered(width)}
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

function setCentered(width){
    if(width < 768){
        console.log("TRUE");
        return true;
    } else {
        console.log("FALSE");
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

export default PortfolioCarousel;