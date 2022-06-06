import HomeBackground from '../components/home-background/HomeBackground';
import "./styles/home.css";

function Home () {
    return (
        <div>
            <HomeBackground className="home-background" />
            <div className='home-content-container'>
                <div className='yellow-bar'></div>
                <div className='home-content'>
                    <div className="home-content-titles">
                        <h1 className='home-content-main-title'>Fotografie</h1>
                        <div className='home-content-background-title'>Fotografie</div>
                    </div>
                    <p className='home-content-info'>Op zoek naar een professionele, gemotiveerde en leergierige fotograaf, laat ik me mezelf even voorstellen! Ik zorg voor het vastleggen van onvergetelijke momenten, helemaal op uw maat.</p>
                    <div className='home-content-buttons'>
                        <a className='home-content-button' href="">Portfolio <span className='icon-right_arrow_big_icon'></span></a>
                        <a className='home-content-button' href="">Contact <span className='icon-right_arrow_big_icon'></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;