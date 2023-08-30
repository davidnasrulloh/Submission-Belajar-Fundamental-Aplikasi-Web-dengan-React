import React from 'react'
import PropTypes from 'prop-types';
import NoteCard from './NoteCard';

const NoteList = ({notes}) => {
    return (
        <div className='notes-list'>
            {
                notes.map((note)=>(
                    <NoteCard key={note.id} note={note}/>
                ))
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired
}

export default NoteList