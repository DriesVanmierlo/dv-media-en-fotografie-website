import "./styles/contact.css";
import Success from "./Success";

function Contact () {
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
                <form id="contact-form" action="https://formsubmit.co/cebd607ef5bf444708ffe9ba23bd2ee8" method="POST">
                    <input type="text" name="_honey" style={{display: "none"}} />
                    <input type="hidden" name="_captcha" value={false} />
                    <input type="hidden" name="_next" value="http://localhost:3000/success" />
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
                    <div className="form-row">
                        <div className="message-field">
                            <label htmlFor="message">Bericht</label>
                            <textarea rows={8} required type="text" id="message" name="message" />
                        </div>
                    </div>
                    <button id="contact-submit">Verzenden <span className='icon-right_arrow_big_icon icon-contact'></span></button>
                </form>
                <ul className='contact-socials'>
                    <li><a class="contact-social" href="#"><span className='icon-instagram'></span></a></li>
                    <li><a class="contact-social" href="#"><span className='icon-facebook'></span></a></li>
                    <li><a class="contact-social" href="#"><span className='icon-linkedin'></span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;