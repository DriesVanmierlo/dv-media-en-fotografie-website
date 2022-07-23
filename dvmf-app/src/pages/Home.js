import HomeBackground from '../components/home-background/HomeBackground';
import "./styles/home.css";
import HomeItem from '../components/home-item/HomeItem';
import services from '../home-content.json';
import { useState, useEffect } from 'react';

function Home () {

    const [innerWidth, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.location.href = "#home-fotografie";
    })

    if(innerWidth >= 1024){
        setScrolling(false);
    }else{
        setScrolling(true);
    }

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setWidth(this.window.innerWidth);
            if(innerWidth >= 1024){
                setScrolling(false);
            }else{
                setScrolling(true);
            }
        }, true);
    })

    const servicesList = services.map((item) => {
        return <HomeItem data={item} key={item.service.toLowerCase()} />
    })

    return (
        <div className='home-container'>
            {servicesList}
            {setCopyright(innerWidth)}
        </div>
    );
}

function setCopyright(width){
    if(width < 1024){
        return <div className='home-copyright-container'>&copy; 2022 <a className='home-copyright-link' href="/">DV Media &amp; Fotografie</a></div>
    }
}

function setScrolling(scroll){
    if(scroll == false){
        document.getElementById('body').style.overflow = "hidden";
    } else {
        document.getElementById('body').style.overflow = "unset";
    }
}

export default Home;