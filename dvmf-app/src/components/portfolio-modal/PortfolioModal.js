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
                    modules={[A11y, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{ clickable: true,
                    dynamicBullets: true }} 
                    className='portfolio-modal-swiper'>
                       {props?.project.content.map(item => (
                        <SwiperSlide className='portfolio-modal-swiper-slide' >
                            {setContent(item)}
                       </SwiperSlide>   
                       ))}
                    </Swiper>

                    {/* EINDE */}
                </div>
                <a href='#' className='portfolio-modal-more'>Bekijk meer <span className='icon-down_arrow_small_icon portfolio-icon-more'></span></a>
            </div>
        </div>
    )
}

function setContent (link){
    if (link.includes('vimeo')) {
        return <iframe title="vimeo-player" src={link} width="100%" height="auto" frameborder="0" allowfullscreen></iframe>
    } else {
        return <img src={link} alt="" />
    }
}

export default PortfolioModal;