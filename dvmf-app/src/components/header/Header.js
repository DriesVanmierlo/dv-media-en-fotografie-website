import logo from '../../assets/images/logo_white_transparent.svg';
import "./header.css"

function Header(){
    return (
        <nav className='header-container'>
            <figure className='header-figure'>
                <img className='header-img' src={logo} alt="" />
            </figure>

            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul class="menu__box">
                    <li><a class="menu__item" href="#">Home</a></li>
                    <li><a class="menu__item" href="#">Portfolio</a></li>
                    <li><a class="menu__item" href="#">About me</a></li>
                    <li><a class="menu__item" href="#">Contact</a></li>
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

export default Header;