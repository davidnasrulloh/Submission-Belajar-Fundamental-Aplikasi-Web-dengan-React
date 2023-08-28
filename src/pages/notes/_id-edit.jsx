import React, { useEffect, useState } from 'react'
import EditNotesSection from './../../components/action/section/EditNotesSection';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { editNote, getNote } from '../../utils/local-data';
import NotFoundMessage from './../../components/emptystate/NotFoundMessage';
import { Editor } from 'react-draft-wysiwyg'
import { HiArrowLeft } from 'react-icons/hi'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditNotes = () => {

    const {id} = useParams()
    // const idNote = `notes-${id}`
    const navigate = useNavigate()

    const [formNote, setFormNote] = useState({
        id: '',
        archived : false,
        title: '',
        body: EditorState.createWithContent(
            ContentState.createFromBlockArray(
                convertFromHTML('')
            )
        )
    })

    const onChangeTitleHandler = (ev) => {
        setFormNote((data)=>({
            ...data,
            title: ev.target.value
        }))
    }

    const onChangeEditorHandler = (body) => {
        setFormNote((data)=>({
            ...data, body
        }))
    }

    const onSaveHandler = () => {
        // console.log(formNote.title);
        const { title } = formNote
        // console.log(idNote);
        const body = draftToHtml(convertToRaw(formNote.body.getCurrentContent()))
        editNote({id, title, body})
        navigate(`/notes/${id}`)
    }

    useEffect(()=>{
        const showNote = getNote(id)
        if(showNote){
            const {title, archived, body} = showNote
            setFormNote(
                {
                    id, 
                    title, 
                    archived, 
                    body: EditorState.createWithContent(
                        ContentState.createFromBlockArray(
                            convertFromHTML(body)
                        )
                    )
                }
            )
        }
    },[id])

    return (
        <div className='edit-page'>
            {
                formNote.id !== '' ? (
                    <>
                        <h4 className='detail-page__title'>
                            <Link 
                                to="/"
                                title='Kembali'>
                                <HiArrowLeft /> {" "} {formNote.title}
                            </Link>
                        </h4>
                        <div className='.edit-note__input'>
                            <input 
                                type="text" 
                                placeholder='Title Notes'
                                className='edit-note__input__title'
                                value={formNote.title}
                                onChange={onChangeTitleHandler}/>
                            <Editor
                                editorState={formNote.body}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={onChangeEditorHandler}
                            />
                        </div>
                    </>
                ) : (
                    <NotFoundMessage/>
                )
            }

            <EditNotesSection onSaveNote={onSaveHandler}/>
        </div>
    )
}

export default EditNotes