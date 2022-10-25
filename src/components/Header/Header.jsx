import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetByEmailAction } from '../../redux/actions/AuthActions'
import '../Header/header.scss'


function Header() {

    const [isAuth, setAuth] = useState(false)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(GetByEmailAction())
    }, [dispatch])
    console.log("Header", user);


    // if (user != null) {
    //     setAuth(true)
    // }

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
                    {
                        user == undefined ?
                            <Link to="/auth">Login</Link>
                            : <p>Sanan</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header