import React from 'react'
import useLanguage from './../../hooks/useLanguage';

const NotFoundMessage = () => {

    const textMainApp = useLanguage('mainApp')

    return (
        <>
            <h2>404</h2>
            <p>{textMainApp.notFoundPage }</p>
        </>
    )
}

export default NotFoundMessage