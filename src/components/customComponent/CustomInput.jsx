import React from 'react'

const CustomInput = ({type, name, value, minLength, maxLenght, onChange, isRequired = false }) => {
    return (
        <input 
            className='input-custom'
            type={type}
            id={name}
            name={name}
            value={value}
            minLength={minLength || '6'}
            maxLength={maxLenght || '255'}
            onChange={onChange}
            required={isRequired}
        />
    )
}

export default CustomInput