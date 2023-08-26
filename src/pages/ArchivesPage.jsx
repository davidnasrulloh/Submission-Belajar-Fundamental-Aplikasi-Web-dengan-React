import React, { useEffect, useState } from 'react'
import { getArchivedNotes } from '../utils/local-data';
import NoteList from './../components/notes/NoteList';
import EmptyNote from './../components/emptystate/EmptyNote';
import HomePageAction from './../components/action/section/HomePageAction';
import SearchComponent from '../components/index/SearchComponent';

const ArchivesPage = () => {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    const onSearchHandler = (event) => {
        setSearch(event.targe.value);
    }

    useEffect(()=>{
        if(search !== ''){
            setNotes(
                getArchivedNotes()
                    .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
            )
        } else {
            setNotes(getArchivedNotes())
        }
    },[search])

    return (
        <div className='homepage'>
            <h2>Catatan Arsip</h2>
            <SearchComponent value={search} onChange={onSearchHandler}/>
            {notes.length > 0 && <NoteList notes={notes}/>}
            {notes.length === 0 && <EmptyNote/>}
        </div>
    )
}

export default ArchivesPage