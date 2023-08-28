import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../../utils/local-data'
import NotFoundMessage from './../../components/emptystate/NotFoundMessage';
import DetailNoteSection from '../../components/action/section/DetailNoteSection';
import { HiArrowLeft } from 'react-icons/hi';
import { showFormattedDate } from '../../utils';
import parser from 'html-react-parser'

const DetailNotes = () => {
    const [note, setNote] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const onEditHandler = () => {
        navigate(`/notes/${id}/edit`)
    }

    const onArchiveHandler = () => {
        if(note.archived){
            unarchiveNote(id)
            navigate('/archives')
        } else {
            archiveNote(id)
            navigate('/')
        }
    }

    const onDeleteHandler = () => {
        deleteNote(id)
        navigate('/')
    }

    useEffect(()=>{
        const note = getNote(id)
        if(note){
            setNote(note)
        }
    },[id])
    
    return (
        <div className='detail-page'>
            {
                'id' in note ? (
                    <>
                        <h4 className='detail-page__title'><Link to="/" title="Kembali"> <HiArrowLeft /> </Link> { note.title }</h4>
                        <p className='detail-page__createdAt'>{showFormattedDate(note.createdAt)}</p>
                        <div className='detail-page__body'>
                            {
                                parser(note.body)
                            }
                        </div>
                    </>
                ) : <NotFoundMessage/>
            }
            <DetailNoteSection 
                archived={note.archived ||false} 
                onEdit={onEditHandler}
                onArchive={onArchiveHandler}
                onDelete={onDeleteHandler}/>
        </div>
    )
}

export default DetailNotes