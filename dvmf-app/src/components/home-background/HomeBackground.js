import background_image from '../../assets/images/home_background_placeholder.jpg';
import "./home-background.css";

function HomeBackground () {
    return (
        <div>
            <figure className='home-background-figure'>
                <img className='home-background-image' src={background_image} alt="" />
            </figure>
        </div>
    );
}

export default HomeBackground;