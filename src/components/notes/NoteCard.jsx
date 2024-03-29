import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../../utils';
import parse from 'html-react-parser';

const NoteCard = ({note}) => {

    const { id } = note;
    // const idNote = id.charAt(id.length - 1);
    
    return (
        <div className='note-item'>
            <h2 className='note-item__title'>
                <Link 
                    to={`/notes/${id}`}
                    title={note.title}
                >
                    {note.title}
                </Link>
            </h2>
            <p className='note-item__createdA'>
                {
                    showFormattedDate(note.createdAt)
                }
            </p>
            <div className='note-item__body'>
                {
                    parse(note.body)
                }
            </div>
        </div>
    )
}

NoteCard.propTypes = {
    note: PropTypes.object.isRequired
}

export default NoteCard