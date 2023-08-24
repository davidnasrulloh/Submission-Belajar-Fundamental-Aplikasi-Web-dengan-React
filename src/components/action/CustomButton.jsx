import React from 'react'
import PropTypes from 'prop-types'

const CustomButton = ({title, icons, onClick}) => {
    return (
        <div className="action">
            <button 
                className='action'
                type="button"
                title={title}
                onClick={onClick}>
                {icons}
            </button>
        </div>
    )
}

export default CustomButton

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    icons: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}