import HomeBackground from '../components/home-background/HomeBackground';
import "./styles/home.css";
import HomeItem from '../components/home-item/HomeItem';
import services from '../home-content.json';

function Home () {

    const servicesList = services.map((item) => {
        return <HomeItem serviceInfo={item} key={item.service.toLowerCase()} />
    })

    return (
        <div>
            {servicesList}
        </div>
    );
}

export default Home;