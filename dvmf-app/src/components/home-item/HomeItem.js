import "./home-item.css";
import HomeBackground from "../home-background/HomeBackground";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function HomeItem(props){

    const [innerWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setWidth(this.window.innerWidth);
        }, true);
    })

    let serviceInfo = props.data;

    const {ref, inView} = useInView();
    const animationTitles = useAnimation();
    const animationText = useAnimation();
    const animationButtons = useAnimation();

    useEffect(() => {
        if(inView){
            animationTitles.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 0.8, bounce: 0
                }
            });
            animationText.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 0.8, bounce: 0, delay: 0.2
                }
            });
            animationButtons.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 0.8, bounce: 0, delay: 0.4
                }
            });
        }
        if(!inView){
            animationTitles.start({
                x: -25,
                opacity: 0
            });
            animationText.start({
                x: -25,
                opacity: 0 
            });
            animationButtons.start({
                x: -25,
                opacity: 0 
            });
        }
    }, [inView])

    return (
        <div id={"home-" + serviceInfo.service.toString().toLowerCase()} className="home-item-container">
            <HomeBackground data={serviceInfo.content} className="home-background" />
            <div className='home-content-container'>
                {setBarHeight(serviceInfo.fullScreen)}
                <div id={"home-content-" + serviceInfo.service.toString().toLowerCase()} className={setContentHeight(serviceInfo)}>
                    {setServicesMenu(innerWidth, serviceInfo.service.toString().toLowerCase())}
                    {setMarginTitles(serviceInfo, ref, animationTitles)}
                    <motion.p animate={animationText} className='home-content-info'>{serviceInfo.description}</motion.p>
                    <motion.div animate={animationButtons} className='home-content-buttons'>
                        <Link className='home-content-button white-button' to={"/portfolio#" + serviceInfo.service.toString().toLowerCase()}>Portfolio <span className='icon-right_arrow_big_icon'></span></Link>
                        <Link className='home-content-button white-button' to="/contact">Contact <span className='icon-right_arrow_big_icon'></span></Link>
                    </motion.div>
                {setCopyright(innerWidth)}
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

function setMarginTitles(serviceInfo, ref, animation){
    if(serviceInfo.fullScreen == true){
        return <motion.div ref={ref} className="home-content-titles"
        animate={animation}>
        <h1 className='home-content-main-title'>{serviceInfo.service}</h1>
        <div className='home-content-background-title'>{serviceInfo.service}</div>
    </motion.div>
    } else {
        return <motion.div ref={ref} className="home-content-titles-small"
        animate={animation}>
        <h1 className='home-content-main-title'>{serviceInfo.service}</h1>
        <div className='home-content-background-title'>{serviceInfo.service}</div>
    </motion.div>
    }
}

function setCopyright(width){
    if(width >= 1024){
        return <div className='home-copyright-container'>&copy; 2022 <a className='home-copyright-link' href="/">DV Media &amp; Fotografie</a></div>
    }
}

function setLatestArrow(service){
    if(service !== "Web"){
        return <span className="icon-down_arrow_small_icon home-arrow"></span>
    }
}

export default HomeItem;