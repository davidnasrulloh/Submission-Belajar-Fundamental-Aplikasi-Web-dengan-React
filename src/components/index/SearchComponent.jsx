import React from 'react'

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

export default SearchComponent