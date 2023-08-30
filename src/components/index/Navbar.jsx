import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import AuthContext from '../../contexts/AuthContext'
import useLanguage from '../../hooks/useLanguage'
import LanguageToggle from './LanguageToggle';
import LogoutButton from './LogoutButton'

const Navbar = () => {
    const { auth } = useContext(AuthContext)
    const textLangApp = useLanguage('mainApp')
    const { pathname } = useLocation()

    return (
        <>
            {
                auth ? (
                    <nav className='navigation'>
                        <div style={{ display: 'flex', justifyContent: 'center', marginRight: '20px', fontSize: '24px'}}>
                            <div>
                                <>
                                    {
                                        pathname !== '/archives' 
                                        ? <Link to="/archives" title={textLangApp.navbar.archive}>{textLangApp.navbar.archive}</Link>
                                        : <Link to="/" title={textLangApp.navbar.home} >{textLangApp.navbar.home}</Link>
                                    }
                                </>
                            </div>
                        </div>
                    </nav>
                ) : ''
            }
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
                <ThemeToggle/>
                <LanguageToggle/>
                <LogoutButton/>
            </div>
        </>
    )
}

export default Navbar