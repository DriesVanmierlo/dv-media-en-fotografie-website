import "./styles/contact.css";
import Success from "./Success";

function Contact () {
    
    document.getElementById('body').style.overflow = "unset";

    return (
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
                            <a href = "mailto: info@dvmedia.be">info@dvmedia.be</a>
                            <a href="tel:+32470637528">+32 (0) 470 63 75 28</a>
                        </div>
                    </div>
                    <ul className='contact-socials-desktop'>
                        <li><a class="contact-social" target="_blank" href="https://www.instagram.com/dvmediaenfotografie/"><span className='icon-instagram'></span></a></li>
                        <li><a class="contact-social" target="_blank" href="https://www.facebook.com/DVMediaEnFotografie"><span className='icon-facebook'></span></a></li>
                        <li><a class="contact-social" target="_blank" href="https://www.linkedin.com/company/dv-media-fotografie/"><span className='icon-linkedin'></span></a></li>
                    </ul>
                </div>
                <div className="contact-form-container">
                    <h2>Stuur me een bericht!</h2>
                    <p>Heb je een vraag of wil je meer informatie? Geen probleem, ik probeer zo snel mogelijk te reageren om jou met plezier te helpen!</p>
                    <form id="contact-form" action="https://formsubmit.co/cebd607ef5bf444708ffe9ba23bd2ee8" method="POST">
                        <input type="text" name="_honey" style={{display: "none"}} />
                        <input type="hidden" name="_captcha" value={false} />
                        <input type="hidden" name="_next" value="https://dvmedia.be/success" />
                        <div className="form-row">
                            <div className="lastname-field">
                                <label htmlFor="lastname">Naam</label>
                                <input required type="text" id="lastname" name="lastname" />
                            </div>
                            <div className="firstname-field">
                                <label htmlFor="firstname">Voornaam</label>
                                <input required type="text" id="firstname" name="firstname" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="email-field">
                                <label htmlFor="email">Email</label>
                                <input required type="text" id="email" name="email" />
                            </div>
                            <div className="phone-field">
                                <label htmlFor="phone">Telefoon</label>
                                <input required type="text" id="phone" name="phone" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="subject-field">
                                <label htmlFor="subject">Onderwerp</label>
                                <input required type="text" id="subject" name="subject" />
                            </div>
                        </div>
                            <div className="message-field">
                                <label htmlFor="message">Bericht</label>
                                <textarea className="contact-message" rows={7} required type="text" id="message" name="message" />
                            </div>
                        <button className="white-button" id="contact-submit">Verzenden <span className='icon-right_arrow_big_icon icon-contact'></span></button>
                    </form>
                    <ul className='contact-socials'>
                        <li><a class="contact-social" href="#"><span className='icon-instagram'></span></a></li>
                        <li><a class="contact-social" href="#"><span className='icon-facebook'></span></a></li>
                        <li><a class="contact-social" href="#"><span className='icon-linkedin'></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;