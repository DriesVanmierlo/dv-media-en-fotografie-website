import "./home-item.css";
import HomeBackground from "../home-background/HomeBackground";

function HomeItem({serviceInfo}){
    return (
        <div className="home-item-container">
            <HomeBackground className="home-background" />
            <div className='home-content-container'>
                <div className='yellow-bar'></div>
                <div className='home-content'>
                    <div className="home-content-titles">
                        <h1 className='home-content-main-title'>{serviceInfo.service}</h1>
                        <div className='home-content-background-title'>{serviceInfo.service}</div>
                    </div>
                    <p className='home-content-info'>{serviceInfo.description}</p>
                    <div className='home-content-buttons'>
                        <a className='home-content-button' href="">Portfolio <span className='icon-right_arrow_big_icon'></span></a>
                        <a className='home-content-button' href="">Contact <span className='icon-right_arrow_big_icon'></span></a>
                    </div>
                </div>
            </div>
            <span className="icon-down_arrow_small_icon home-arrow"></span>
        </div>
    )
}

export default HomeItem;