import React from 'react'
import CustomButton from '../CustomButton'
import { HiX } from 'react-icons/hi'
import PropTypes from 'prop-types'

const CloseButton = ({onClose}) => {
    return (
        <>
            <CustomButton
                title='Close'
                icons={<HiX/>}
                onClick={onClose}
            />
        </>
    )
}

CloseButton.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default CloseButton