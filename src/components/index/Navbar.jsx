import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NavMenu = () => {

    const { pathname } = useLocation()

    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <>
                        {
                            pathname !== '/archives' 
                            ? <Link to="/archives" title="Archives">Archives</Link>
                            : <Link to="/" title="Home" >Home</Link>
                        }
                    </>
                </li>
                <li>
                    <ThemeToggle/>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu