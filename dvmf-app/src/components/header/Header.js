import logo from '../../assets/images/logo_white_transparent.svg';
import "./header.css"
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header(){

    const [innerWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setWidth(this.window.innerWidth);
        }, true);
    })

    return (
        <nav className='header-container' id='nav-bar'>
            <figure className='header-figure'>
                <Link to="/#home-fotografie">
                    <img className='header-img' src={logo} alt="dv-media-en-fotografie-logo" />
                </Link>
            </figure>
            {setNavMenu(innerWidth)}
        </nav>
    );
}

function closeMenu(){
    document.getElementById('menu__toggle').checked = false;
}

function setNavMenu(width){
    if(width < 1024){
        return <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
        <span></span>
        </label>

        <ul class="menu__box" onClick={closeMenu}>
            <li><NavLink exact activeClassName='menu__item-active' className="menu__item" to="/">Home</NavLink></li>
            <li><NavLink activeClassName='menu__item-active' className="menu__item" to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink activeClassName='menu__item-active' className="menu__item" to="/about">About me</NavLink></li>
            <li><NavLink activeClassName='menu__item-active' className="menu__item" to="/contact">Contact</NavLink></li>
            <div className='menu__socials_container'>
                <li><a class="menu__item" href="#"><span className='icon-instagram'></span></a></li>
                <li><a class="menu__item" href="#"><span className='icon-facebook'></span></a></li>
                <li><a class="menu__item" href="#"><span className='icon-linkedin'></span></a></li>
            </div>
        </ul>
    </div>
    } else {
        return <ul className='nav-bar-list'>
            <li><NavLink exact activeClassName='nav-bar-active-item' className="nav-bar-item" id='nav-bar-home' to="/">Home</NavLink></li>
            <li><NavLink activeClassName='nav-bar-active-item' className="nav-bar-item" id='nav-bar-portfolio' to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink activeClassName='nav-bar-active-item' className="nav-bar-item" id='nav-bar-about' to="/about">About me</NavLink></li>
            <li><NavLink activeClassName='nav-bar-active-item' className="nav-bar-item" id='nav-bar-contact' to="/contact">Contact</NavLink></li>
        </ul>
    }
}

export default Header;