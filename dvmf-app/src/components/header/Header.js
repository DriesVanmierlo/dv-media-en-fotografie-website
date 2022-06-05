import logo from '../../assets/images/logo_white_transparent.svg';
import "./header.css"

function Header(){
    return (
        <nav className='header-container'>
            <figure>
                <img src={logo} alt="" />
            </figure>
        </nav>
    );
}

export default Header;