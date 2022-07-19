import "./home-item.css";
import HomeBackground from "../home-background/HomeBackground";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function HomeItem(props){

    const [innerWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setWidth(this.window.innerWidth);
        }, true);
    })

    let serviceInfo = props.data;

    return (
        <div id={"home-" + serviceInfo.service.toString().toLowerCase()} className="home-item-container">
            <HomeBackground data={serviceInfo.content} className="home-background" />
            <div className='home-content-container'>
                {setBarHeight(serviceInfo.fullScreen)}
                <div id={"home-content-" + serviceInfo.service.toString().toLowerCase()} className={setContentHeight(serviceInfo)}>
                    {setServicesMenu(innerWidth, serviceInfo.service.toString().toLowerCase())}
                    {setMarginTitles(serviceInfo)}
                    <p className='home-content-info'>{serviceInfo.description}</p>
                    <div className='home-content-buttons'>
                        <Link className='home-content-button white-button' to={"/portfolio/" + serviceInfo.service.toString().toLowerCase()}>Portfolio <span className='icon-right_arrow_big_icon'></span></Link>
                        <Link className='home-content-button white-button' to="/contact">Contact <span className='icon-right_arrow_big_icon'></span></Link>
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

function setServicesMenu(width, service){
    if(width >= 1024){
        return <ul className="home-services-list"><li><a className={"home-service-item " + checkActive(service, "fotografie")} href="#home-fotografie">Fotografie</a></li>
        <li><a className={"home-service-item " + checkActive(service, "videografie")} href="#home-videografie">Videografie</a></li>
        <li><a className={"home-service-item " + checkActive(service, "design")} href="#home-design">Design</a></li>
        <li><a className={"home-service-item " + checkActive(service, "web")} href="#home-web">Web</a></li></ul>
    }
}

function checkActive(serviceActive, service){
    if(serviceActive == service){
        return "home-active-tab";
    }
}

function setContentHeight(serviceInfo){
    if(serviceInfo.fullScreen == true){
        return 'home-content';
    } else {
        return 'home-content home-content-small';
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