import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './../pages/HomePage';
import ArchivesPage from './../pages/ArchivesPage';
import AddNote from './../pages/notes/AddNote';
import DetailNotes from '../pages/notes/_id-detail';
import EditNotes from '../pages/notes/_id-edit';
import NotFoundPage from './../pages/NotFoundPage';

const SetupRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/archives' element={<ArchivesPage/>}/>
            <Route path='/notes' element={<Navigate to="/" replace/>}/>
            <Route path='/notes/new' element={<AddNote/>}/>
            <Route path='/notes/:id' element={<DetailNotes/>}/>
            <Route path='/notes/:id/edit' element={<EditNotes/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default SetupRoutes