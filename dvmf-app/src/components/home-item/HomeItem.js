import "./home-item.css";
import HomeBackground from "../home-background/HomeBackground";

function HomeItem({serviceInfo}){

    return (
        <div className="home-item-container">
            <HomeBackground className="home-background" />
            <div className='home-content-container'>
            {setBarHeight(serviceInfo.fullScreen)}
                <div className='home-content'>
                    {setMarginTitles(serviceInfo)}
                    <p className='home-content-info'>{serviceInfo.description}</p>
                    <div className='home-content-buttons'>
                        <a className='home-content-button' href="">Portfolio <span className='icon-right_arrow_big_icon'></span></a>
                        <a className='home-content-button' href="">Contact <span className='icon-right_arrow_big_icon'></span></a>
                    </div>
                </div>
            </div>
            {setLatestArrow(serviceInfo.service)}
        </div>
    )
}

function setBarHeight(isFull){
    if(isFull == true){
        return <div className='yellow-bar'></div>
    } else {
        return <div className='yellow-bar-small'></div>
    }
}

function setMarginTitles(serviceInfo){
    if(serviceInfo.fullScreen == true){
        return <div className="home-content-titles">
        <h1 className='home-content-main-title'>{serviceInfo.service}</h1>
        <div className='home-content-background-title'>{serviceInfo.service}</div>
    </div>
    } else {
        return <div className="home-content-titles-small">
        <h1 className='home-content-main-title'>{serviceInfo.service}</h1>
        <div className='home-content-background-title'>{serviceInfo.service}</div>
    </div>
    }
}

function setLatestArrow(service){
    if(service !== "Web"){
        return <span className="icon-down_arrow_small_icon home-arrow"></span>
    }
}

export default HomeItem;