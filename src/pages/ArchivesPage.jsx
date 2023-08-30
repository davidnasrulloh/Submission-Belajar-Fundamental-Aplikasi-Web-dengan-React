import React, { useEffect, useState } from 'react'
import NoteList from './../components/notes/NoteList';
import EmptyNote from './../components/emptystate/EmptyNote';
import HomePageAction from './../components/action/section/HomePageAction';
import SearchComponent from '../components/index/SearchComponent';
import useLanguage from '../hooks/useLanguage';
import { getArchivedNotes } from '../utils/network-data';
import LoadingIndicator from '../components/index/LoadingIndicator';

const ArchivesPage = () => {

    const [dataNotes, setDataNotes] = useState([])
    const [initData, setInitData] = useState(false)
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true)

    const textArchive = useLanguage('archive')
    const textMainApp = useLanguage('mainApp')

    const onSearchHandler = (event) => {
        setSearch(event.targe.value);
    }

    const initDataAPI = () => {
        getArchivedNotes()
            .then((res)=>{
                if(!res.error){
                    setDataNotes(res.data)
                    setNotes(res.data)
                    setInitData(true)
                    setLoading(false)
                }
            })
            .catch(()=> alert(textMainApp.message.error))
    } 

    useEffect(()=>{

        if(!initData){
            initDataAPI()
        }

        if(initData){
            let dataNoteTemporary = [...dataNotes]
            if(search !== ''){
                dataNoteTemporary = dataNoteTemporary
                                        .filter((note)=>note.title
                                        .toLowerCase()
                                        .includes(search.toLowerCase()))
            }
            setNotes(dataNoteTemporary)
        }

    },[search])

    return (
        <div className='homepage'>
            <h2>{textArchive.title}</h2>
            <SearchComponent value={search} onChange={onSearchHandler}/>
            
            {(notes.length > 0 && !loading) ? <NoteList notes={notes}/> : ''}
            {(notes.length === 0 && !loading) ? <EmptyNote/> : '' }
            {loading ? <LoadingIndicator/> : ''}
            <HomePageAction />
        </div>
    )
}

export default ArchivesPage