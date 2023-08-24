import React, { useEffect, useState } from 'react'
import { capitalizeFirstString } from '../../utils'

const ThemeToggle = () => {

    const [theme, setTheme] = useState('dark')

    const changeThemeHandler = (val) => {
        setTheme(val)
        const root = window.document.documentElement
        root.setAttribute('data-theme', val)
        localStorage.setItem('theme', val)
    }

    useEffect(()=>{
        if(localStorage.theme){
            changeThemeHandler(localStorage.theme)
        } else {
            localStorage.setItem('theme', 'dark')
            changeThemeHandler('dark')
        }
    })

    return (
        <button
            onClick={()=> changeThemeHandler(theme === 'dark' ? 'light' : 'dark')}
            type="button"> 
            {capitalizeFirstString(theme)} Theme Now
        </button>
    )
}

export default ThemeToggle