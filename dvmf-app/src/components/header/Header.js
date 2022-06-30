import logo from '../../assets/images/logo_white_transparent.svg';
import "./header.css"
import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav className='header-container'>
            <figure className='header-figure'>
                <Link to="/">
                    <img className='header-img' src={logo} alt="" />
                </Link>
            </figure>

            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul class="menu__box" onClick={closeMenu}>
                    <li><Link class="menu__item" to="/">Home</Link></li>
                    <li><Link class="menu__item" to="/portfolio">Portfolio</Link></li>
                    <li><Link class="menu__item" to="/about">About me</Link></li>
                    <li><Link class="menu__item" to="/contact">Contact</Link></li>
                    <div className='menu__socials_container'>
                        <li><a class="menu__item" href="#"><span className='icon-instagram'></span></a></li>
                        <li><a class="menu__item" href="#"><span className='icon-facebook'></span></a></li>
                        <li><a class="menu__item" href="#"><span className='icon-linkedin'></span></a></li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

function closeMenu(){
    document.getElementById('menu__toggle').checked = false;
}

export default Header;