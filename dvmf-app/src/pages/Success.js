import "./styles/contact.css";

function Success () {
    return (
        <div className="contact-container">
            <div className='contact-titles'>
                    <h1 className='contact-main-title'>Contact</h1>
                    <div className='contact-background-title'>Contact</div>
            </div>
            <div className="contact-info-container">
                <div className="contact-info-section">
                    <h2>Adres</h2>
                    <div>Dries Vanmierlo</div>
                    <div>Tuinstraat 2, 3950 Bocholt</div>
                    <div>BTW BE XXX XXX XXX</div>
                </div>
                <div className="contact-info-section">
                    <h2>Contact informatie</h2>
                    <div>driesvanmierlo.media@gmail.com</div>
                    <div>0470 63 75 28</div>
                </div>
            </div>
            <div className="contact-form-container">
                <h2>Stuur me een bericht!</h2>
                <p>Ik probeer zo snel mogelijk te reageren om samen naar de beste oplossing voor u te zoeken!</p>
                <p id="success-message">Verzonden! Ik laat zo snel mogelijk iets van mij horen.</p>
                <ul className='contact-socials'>
                    <li><a class="contact-social" href="#"><span className='icon-instagram'></span></a></li>
                    <li><a class="contact-social" href="#"><span className='icon-facebook'></span></a></li>
                    <li><a class="contact-social" href="#"><span className='icon-linkedin'></span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Success;