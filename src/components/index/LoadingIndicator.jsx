import React from 'react'
import useLanguage from '../../hooks/useLanguage'

const LoadingIndicator = () => {
    const textLangApp = useLanguage('mainApp')
    
    return (
        <div className='loading-indicator'>
            {textLangApp.message.loading}
        </div>
    )
}

export default LoadingIndicator