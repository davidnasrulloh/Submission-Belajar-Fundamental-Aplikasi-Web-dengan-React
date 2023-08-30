import React, { useContext } from 'react'
import LocaleContext from '../../contexts/LocaleContext'
import { MdGTranslate } from 'react-icons/md'

const LanguageToggle = () => {
    const {locale, onToggleLocale} = useContext(LocaleContext)
    
    return (
        <button
            type='button'
            title={locale === 'id' ? 'Indonesia' : 'English'}
            className='toggle-locale'
            onClick={onToggleLocale}
            >
                <MdGTranslate/>
        </button>
    )
}

export default LanguageToggle