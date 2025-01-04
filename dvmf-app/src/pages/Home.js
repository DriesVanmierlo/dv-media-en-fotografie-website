import HomeBackground from '../components/home-background/HomeBackground';
import "./styles/home.css";
import HomeItem from '../components/home-item/HomeItem';
import services from '../home-content.json';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Home () {

    const [innerWidth, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        // window.location.href = "#home-fotografie";
        window.scrollTo({top: 0, left: 0});
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
        <>
            <Helmet>
                    <title>DV Media &amp; Fotografie - Home</title>
                    <meta name='description' content='Bekijk wat ik allemaal te bieden heb voor jou!' />
                    <link rel="canonical" href="/" />
            </Helmet>
            <div className='home-container'>
                {servicesList}
                {setCopyright(innerWidth)}
            </div>
        </>
        
    );
}

function setCopyright(width){
    if(width < 1024){
        return <div className='home-copyright-container'>&copy; 2025 <a className='home-copyright-link' href="/">DV Media &amp; Fotografie</a></div>
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