import React, { useState } from 'react'
import EditNotesSection from './../../components/action/section/EditNotesSection';

const EditNotes = () => {

    // const {id} = useParams

    const [formNote, setFormNote] = useState({
        id: '',
        archived : false,
        title: '',
        // body
    })


    return (
        <div>

            <EditNotesSection onSaveNote={()=>{}}/>
        </div>
    )
}

export default EditNotes