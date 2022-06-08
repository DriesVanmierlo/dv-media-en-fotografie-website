import PortfolioCarouselItem from '../portfolio-carousel-item/PortfolioCarouselItem';
import './portfolio-carousel.css';

function PortfolioCarousel(props){

    let serviceInfo = props.data;

    const projectList = serviceInfo.projects.map((item) => {
        return <PortfolioCarouselItem data={item} key={item.title.toLowerCase()} />
    })

    return (
            <div>
                <div className="portfolio-content-titles">
                    <h1 className='portfolio-content-main-title'>{serviceInfo.service}</h1>
                    <div className='portfolio-content-background-title'>Portfolio</div>
                </div>
                <div className='portfolio-carousel'>
                    {projectList}
                </div>
            </div>
    )
}

export default PortfolioCarousel;