import React from 'react'
import PropTypes from 'prop-types';

const SearchComponent = ({value, onChange}) => {
    return (
        <section className='search-bar'>
            <input
                type="text" 
                placeholder='Cari berdasarkan judul ...' 
                value={value}
                onChange={onChange}
            />
        </section>
    )
}

SearchComponent.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SearchComponent