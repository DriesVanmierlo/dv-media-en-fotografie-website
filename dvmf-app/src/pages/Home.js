import HomeBackground from '../components/home-background/HomeBackground';
import "./styles/home.css";
import HomeItem from '../components/home-item/HomeItem';
import services from '../home-content.json';
import { useState, useEffect } from 'react';

function Home () {

    const [innerWidth, setWidth] = useState(window.innerWidth);

    console.log(innerWidth);
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
        <div>
            {servicesList}
        </div>
    );
}

function setScrolling(scroll){
    if(scroll == false){
        document.getElementById('body').style.overflow = "hidden";
    } else {
        document.getElementById('body').style.overflow = "unset";
    }
}

export default Home;