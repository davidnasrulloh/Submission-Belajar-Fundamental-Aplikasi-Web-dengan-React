import React from 'react'
import { GrSun } from 'react-icons/gr'
import { IoMdMoon } from 'react-icons/io'
import useTheme from './../../hooks/useTheme';

const ThemeToggle = () => {

    const [theme, onThemeChangeHandler] = useTheme()
    return (
        <button
            onClick={()=> onThemeChangeHandler(theme === 'dark' ? 'light' : 'dark')}
            type="button"> 
            {
                theme === 'dark' ? <IoMdMoon /> : <GrSun />
            }
        </button>
    )
}

export default ThemeToggle