import PortfolioCarousel from '../components/portfolio-carousel/PortfolioCarousel';
import './styles/portfolio.css';
import services from '../home-content.json';
import { Helmet } from 'react-helmet-async';

function Portfolio(){

    document.getElementById('body').style.overflow = "unset";

    const servicesList = services.map((item) => {
        return <PortfolioCarousel data={item} key={item.service.toLowerCase()} />
    })

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
                <meta name='description' content='Bekijk welke realisaties ik gemaakt heb!' />
                <link rel="canonical" href="/portfolio" />
            </Helmet>
             <div className='portfolio-container'>
                <div className='portfolio-content-container'>
                    <div className='portfolio-yellow-bar-full'></div>
                    {servicesList}
                </div>
            </div>
        </>
       
    )
}

export default Portfolio;