import background_image from '../assets/images/home_background_placeholder.jpg';
import "./styles/home.css";

function Home () {
    return (
        <div>
            <figure className='home-background-figure'>
                <img className='home-background-image' src={background_image} alt="" />
            </figure>
            <div>Home works!</div>
        </div>
    );
}

export default Home;