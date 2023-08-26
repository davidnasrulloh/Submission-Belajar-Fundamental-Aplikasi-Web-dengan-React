import React, { useEffect, useState } from 'react'
import { getActiveNotes } from '../utils/local-data'
import SearchComponent from '../components/index/SearchComponent'
import NoteList from '../components/notes/NoteList'
import EmptyNote from '../components/emptystate/EmptyNote'
import HomePageAction from '../components/action/section/HomePageAction'

const HomePage = () => {

    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState('')

    const onSearchHandler = (event) => {
        setSearch(event.target.value)
    }

    useEffect(()=>{
        if(search !== ''){
            setNotes(
                getActiveNotes()
                    .filter((note)=> note.title.toLowerCase().includes(search.toUpperCase()))
            )
        } else {
            setNotes(
                getActiveNotes()
            )
        }
    },[search])

    return (
        <div className='homepage'>
            <h2>Catatan Aktif</h2>
            <SearchComponent value={search} onChange={onSearchHandler}/>
            {notes.length > 0 && <NoteList notes={notes}/>}
            {notes.length === 0 && <EmptyNote/>}
            <HomePageAction/>
        </div>
    )
}

export default HomePage