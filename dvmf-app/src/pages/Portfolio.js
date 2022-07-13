import PortfolioCarousel from '../components/portfolio-carousel/PortfolioCarousel';
import './styles/portfolio.css';
import services from '../home-content.json';

function Portfolio(){

    document.getElementById('body').style.overflow = "unset";

    const servicesList = services.map((item) => {
        return <PortfolioCarousel data={item} key={item.service.toLowerCase()} />
    })

    return (
        <div className='portfolio-container'>
            <div className='portfolio-content-container'>
                <div className='portfolio-yellow-bar-full'></div>
                {servicesList}
            </div>
        </div>
    )
}

export default Portfolio;