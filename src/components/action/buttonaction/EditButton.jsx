import React from 'react'
import CustomButton from '../CustomButton'
import PropTypes from 'prop-types'
import { AiOutlineEdit } from 'react-icons/ai'

const EditButton = ({onEdit}) => {
    return (
        <>
            <CustomButton
                title='Edit'
                icons={<AiOutlineEdit/>}
                onClick={onEdit}
            />
        </>
    )
}

EditButton.propTypes = {
    onEdit: PropTypes.func.isRequired
}

export default EditButton