import { Link } from 'react-router-dom'
import '../Header/header.scss'
import Login from '../Login/Login'


function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__container__logo">
                    <img src="https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png" alt="Compar Academy" />
                </div>
                <div className="header__container__nav">
                    <ul className='header__container__nav__list'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>  
                            <Link to="/about">About</Link>
                        </li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="header__container__auth">
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Header