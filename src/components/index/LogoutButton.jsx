
import React, { useContext } from 'react'
import AuthContext from './../../contexts/AuthContext';
import useLanguage from './../../hooks/useLanguage';
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { auth } = useContext(AuthContext)
    const textLangApp = useLanguage('mainApp')

    const onHandleLogout = () => {
        if(confirm(textLangApp.message.confirm)){
            localStorage.removeItem('accessToken')
            window.location = '/'
        }
    }

    return (
        <>
        {
            auth ?
            (
                <button
                    type='butotn'
                    title='Logout'
                    className='button-logout'
                    onClick={onHandleLogout}>
                        <MdLogout/>
                </button>
            )
            : ''
        }
        </>
    )
}

export default LogoutButton