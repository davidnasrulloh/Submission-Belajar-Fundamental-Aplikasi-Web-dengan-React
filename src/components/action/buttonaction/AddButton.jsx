import React from 'react'
import CustomButton from '../CustomButton'
import { HiPlus } from 'react-icons/hi'
import PropTypes from 'prop-types'

const AddButton = ({onAdd}) => {
    return (
        <>
            <CustomButton
                title='Tambah'
                icons={<HiPlus/>}
                onClick={onAdd}
            />
        </>
    )
}

AddButton.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default AddButton