import background_image from '../../assets/images/home_background_placeholder.jpg';
import "./home-background.css";

function HomeBackground(props) {
    console.log(props);
    return (
        <div>
            <figure className='home-background-figure'>
                <img className='home-background-image' src={props.data} alt="" />
            </figure>
        </div>
    );
}

export default HomeBackground;