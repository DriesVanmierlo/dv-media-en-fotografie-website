import Swiper from 'swiper';
import './portfolio-modal.css';

function PortfolioModal(props){
    return(
        <div className='portfolio-modal-container'>
            <div className='portfolio-modal-content'>
                <button className='portfolio-modal-back' onClick={()=> props.closeModal(false)}><span className='icon-down_arrow_small_icon portfolio-icon-back'></span> Terug</button>
                <h3>Falsive Records Leuven</h3>
                {/* <Swiper>

                </Swiper> */}
                <button className='portfolio-modal-more'>Bekijk meer <span className='icon-down_arrow_small_icon'></span></button>
            </div>
        </div>
    )
}

export default PortfolioModal;