import './portfolio-carousel-item.css';
import image from '../../assets/images/home_background_placeholder.jpg';

function PortfolioCarouselItem(props){
    return (
        <div className='portfolio-carousel-item'>
            <div className='portfolio-carousel-item-header'>
                <h2 className='portfolio-carousel-item-title'>{props.data.title}</h2>
                <span className='icon-right_arrow_small_icon portfolio-item-arrow'></span>
            </div>
            <figure className='portfolio-carousel-figure'>
                <img className='portfolio-carousel-img' src={props.data.content[0]} alt={props.data.title.toString().toLowerCase() + '-cover-image'} />
            </figure>
        </div>
    )
}

export default PortfolioCarouselItem;