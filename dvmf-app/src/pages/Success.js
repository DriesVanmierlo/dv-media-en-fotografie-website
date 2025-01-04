import "./styles/contact.css";
import { Helmet } from 'react-helmet-async';

function Success () {

    document.getElementById('body').style.overflow = "unset";

    return (
        <>
        <Helmet>
                <title>Bericht verzonden</title>
                <meta name='description' content='Uw bericht is verzonden!' />
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="/success" />
            </Helmet>
        <div className="contact-big-container">
            <div className="contact-container">
                <div className='contact-titles'>
                        <h1 className='contact-main-title'>Contact</h1>
                        <div className='contact-background-title'>Contact</div>
                </div>
                <div className="contact-info-container">
                    <div>
                        <div className="contact-info-section">
                        <h2>Adres</h2>
                            <div>Dries Vanmierlo</div>
                            <div>Tuinstraat 2</div>
                            <div>3950 Bocholt, België</div>
                            <div>BTW BE0788.775.690</div>
                        </div>
                        <div className="contact-info-section">
                            <h2>Contact informatie</h2>
                            <div>driesvanmierlo.media@gmail.com</div>
                            <div>+32 (0) 470 63 75 28</div>
                        </div>
                    </div>
                    <ul className='contact-socials-desktop'>
                    <li><a class="contact-social" target="_blank" href="https://www.instagram.com/driesvisuals/"><span className='icon-instagram'></span></a></li>
                        <li><a class="contact-social" target="_blank" href="https://www.facebook.com/DVMediaEnFotografie"><span className='icon-facebook'></span></a></li>
                        <li><a class="contact-social" target="_blank" href="https://www.linkedin.com/company/dv-media-fotografie/"><span className='icon-linkedin'></span></a></li>
                    </ul>
                </div>
                <div className="contact-form-container">
                    <h2>Stuur me een bericht!</h2>
                    <p>Heb je een vraag of wil je meer informatie? Geen probleem, ik probeer zo snel mogelijk te reageren om jou met plezier te helpen!</p>
                    <p id="success-message">Verzonden! Ik laat zo snel mogelijk iets van mij horen.</p>
                    <ul className='contact-socials'>
                    <li><a class="contact-social" href="#"><span className='icon-instagram'></span></a></li>
                        <li><a class="contact-social" href="#"><span className='icon-facebook'></span></a></li>
                        <li><a class="contact-social" href="#"><span className='icon-linkedin'></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Success;