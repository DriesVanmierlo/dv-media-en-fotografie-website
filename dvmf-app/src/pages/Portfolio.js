import PortfolioCarousel from '../components/portfolio-carousel/PortfolioCarousel';
import './styles/portfolio.css';
import services from '../home-content.json';

function Portfolio(){

    const servicesList = services.map((item) => {
        return <PortfolioCarousel data={item} key={item.service.toLowerCase()} />
    })

    return (
        <div className='portfolio-container'>
            <div className='yellow-bar-full'></div>
            <div className='portfolio-content-container'>
                {servicesList}
            </div>
        </div>
    )
}

export default Portfolio;