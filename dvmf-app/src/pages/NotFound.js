import { Helmet } from 'react-helmet-async';
import './styles/notfound.css';

function NotFound() {
    document.getElementById('body').style.overflow = "unset";
    return (
        <>
            <Helmet>
                <title>Pagina niet gevonden</title>
                <meta name='description' content='Deze pagina bestaat niet.' />
                <link rel="canonical" href="*" />
            </Helmet>
            <div className="notfound-container">
                <h1 className='notfound-404'>404</h1>
                <h2 className='notfound-title'>Deze pagina bestaat helaas niet.</h2>
                <a className='notfound-home' href="/">Home</a>
            </div>
        </>
    )
}

export default NotFound;