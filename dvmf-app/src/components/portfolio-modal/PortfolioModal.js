import React, { useRef, useState } from "react";
import './portfolio-modal.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';

function PortfolioModal(props){
console.log(props)

    return(
        <div className='portfolio-modal-container'>
            <div className='portfolio-modal-content'>
                <button className='portfolio-modal-back' onClick={()=> props.closeModal(false)}><span className='icon-down_arrow_small_icon portfolio-icon-back'></span> Terug</button>
                <h3 className='portfolio-modal-title'>{props.project.title}</h3>
                <div>
                    {/* BEGIN */}

                    <Swiper
                    modules={[A11y, Pagination, Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ dynamicBullets: true }} 
                    className='portfolio-modal-swiper'>
                       {props?.project.content.map(item => (
                        <SwiperSlide className='portfolio-modal-swiper-slide' >
                            {setContent(item)}
                       </SwiperSlide>   
                       ))}
                    </Swiper>

                    {/* EINDE */}
                </div>
                {setMoreButton(props.project)}
            </div>
        </div>
    )
}

function setContent (link){
    if (link.includes('vimeo')) {
        return <iframe title="vimeo-player" className="portfolio-modal-iframe" src={link} width="100%" height="auto" frameborder="0" allowfullscreen></iframe>
    } else {
        return <img src={link} alt="preview-project-image" />
    }
}

function setMoreButton(item){
    if(item.link.length > 0){
        return <a href={item.link} target="_blank" className='portfolio-modal-more'>Bekijk meer <span className='icon-down_arrow_small_icon portfolio-icon-more'></span></a>;
    }
}

export default PortfolioModal;