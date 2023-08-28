import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

    const { pathname } = useLocation()

    return (
        <nav className='navigation'>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
                <div>
                    <>
                        {
                            pathname !== '/archives' 
                            ? <Link to="/archives" title="Archives">Archives</Link>
                            : <Link to="/" title="Home" >Home</Link>
                        }
                    </>
                </div>
                <div>
                    <ThemeToggle/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar