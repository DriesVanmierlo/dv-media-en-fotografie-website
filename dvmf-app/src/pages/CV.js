import { Helmet } from 'react-helmet-async';
import './styles/cv.css';
import cv from '../assets/images/CV-Dries-Vanmierlo.png';

function CV () {
    document.getElementById('body').style.overflow = "unset";

    return (
        <>
            <Helmet>
                <title>CV - Dries Vanmierlo</title>
                <meta name='description' content='Bekijk mijn CV!' />
                <link rel="canonical" href="/cv" />
            </Helmet>
            <div className='cv-container'>
                <figure className='cv-figure'>
                    <img className='cv-image' src={cv} alt="CV Dries Vanmierlo" />
                </figure>
                <a className='cv-download' href={cv} download>Download CV</a>
            </div>
        </>
    )
}

export default CV;