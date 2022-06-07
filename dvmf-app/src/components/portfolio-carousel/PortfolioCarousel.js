import PortfolioCarouselItem from '../portfolio-carousel-item/PortfolioCarouselItem';
import './portfolio-carousel.css';

function PortfolioCarousel(props){

    let serviceInfo = props.data;

    return (
            <div>
                <div className="portfolio-content-titles">
                    <h1 className='portfolio-content-main-title'>{serviceInfo.service}</h1>
                    <div className='portfolio-content-background-title'>Portfolio</div>
                </div>
                <div className='portfolio-carousel'>
                    <PortfolioCarouselItem />
                    <PortfolioCarouselItem />
                </div>
            </div>
    )
}

export default PortfolioCarousel;