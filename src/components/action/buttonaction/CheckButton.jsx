import React from 'react'
import CustomButton from '../CustomButton'
import { HiCheck } from 'react-icons/hi'
import PropTypes from 'prop-types'

const CheckButton = ({onCheck}) => {
    return (
        <>
            <CustomButton
                title='Tambahkan'
                icons={<HiCheck/>}
                onClick={onCheck}
            />
        </>
    )
}

CheckButton.propTypes = {
    onCheck: PropTypes.func.isRequired
}

export default CheckButton