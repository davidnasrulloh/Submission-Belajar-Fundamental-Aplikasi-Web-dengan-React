import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../../utils/local-data'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import AddNewNoteSection from './../../components/action/section/AddNewNoteSection';

const AddNote = () => {

    const navigate = useNavigate()

    const [formNote, setFormNote] = useState({
        title: '',
        body: EditorState.createWithContent(
            ContentState.createFromBlockArray(
                convertFromHTML('<div>Isi Catatan</div>')
            )
        )
    })

    const onChangeTitleHandler = (ev) => {
        setFormNote((data)=>({...data, title: ev.target.value }))
    }

    const onChangeEditorHandler = (body) => {
        setFormNote((data)=>({ ...data, body }))
    }

    const onSaveNewNote = () => {
        const { title } = formNote
        const body = draftToHtml(convertToRaw(formNote.body.getCurrentContent()))
        addNote({title, body})
        navigate('/')
    }

    return (
        <div className='add-new-page'>
            <div className='add-new-page__input'>
                <input 
                    type="text"
                    className='add-new-page__input__title'
                    placeholder='Masukkan title'
                    value={formNote.title}
                    onChange={onChangeTitleHandler}
                    style={{ marginBottom: '12px' }}/>
                <Editor
                    editorState={formNote.body}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onChangeEditorHandler}
                />
            </div>
            <AddNewNoteSection onSaveNote={onSaveNewNote}/>
        </div>
    )
}

export default AddNote