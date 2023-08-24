import React from 'react'
import CustomButton from '../CustomButton'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'

const DeleteButton = ({onDelete}) => {
    return (
        <>
            <CustomButton
                title='Close'
                icons={<HiOutlineTrash/>}
                onClick={onDelete}
            />
        </>
    )
}

DeleteButton.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default DeleteButton