import { Helmet } from 'react-helmet-async';
import './styles/email.css';

function Email () {
    document.getElementById('body').style.overflow = "unset";

    return (
        <>
            <Helmet>
                <title>Blijf op de hoogte</title>
                <meta name='description' content='Wees op de hoogte wanneer jouw foto&#39;s online komen!' />
                <link rel="canonical" href="/email" />
            </Helmet>
            <div className='email-container'>
                <h1 className='email-title'>Blijf op de hoogte wanneer je foto&#39;s online komen!</h1>
                <p className='email-text'>Vul je e-mailadres hier beneden in, dan kan ik je laten weten wanneer de foto&#39;s klaar zijn!</p>
                <div className='email-form'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9o42osGeqNADDm1umlbmqapV3GQF4rKDhnw7SNCzbNyOE6g/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Laden…</iframe>
                </div>
            </div>
        </>
    )
}

export default Email;