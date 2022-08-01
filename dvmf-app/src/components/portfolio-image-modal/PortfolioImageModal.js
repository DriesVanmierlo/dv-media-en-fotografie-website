import React, { useRef, useState } from "react";
import './portfolio-image-modal.css';

function PortfolioImageModal(props){
    const [openModal, setOpenModal] = useState(false);
    const [image, setImage] = useState();

    return (
        <div className="portfolio-image-modal-container" onClick={()=> props.closeModal(false)}>
            <figure className="portfolio-image-modal-figure">
                <img className="portfolio-image-modal-image" src={props.image} alt="portfolio-image-big-preview" />
            </figure>
            <span className="icon-close portfolio-image-modal-cross"></span>
        </div>
    )
}

export default PortfolioImageModal;