import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import HomePage from './../pages/HomePage';
import ArchivesPage from './../pages/ArchivesPage';
import AddNote from './../pages/notes/AddNote';
import DetailNotes from '../pages/notes/_id-detail';
import NotFoundPage from './../pages/NotFoundPage';
import AppMiddleware from './../middleware/AppMiddleware';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const SetupRoutes = () => useRoutes([
    {
        path: '/',
        element: (
            <AppMiddleware middleware='auth'>
                <HomePage/>
            </AppMiddleware>
        )
    },
    {
        path: '/login',
        element: (
            <AppMiddleware middleware='public'>
                <LoginPage/>
            </AppMiddleware>
        )
    },
    {
        path: '/register',
        element: (
            <AppMiddleware middleware='public'>
                <RegisterPage/>
            </AppMiddleware>
        )
    },
    {
        path: '/archives',
        element: (
            <AppMiddleware middleware='auth'>
                <ArchivesPage/>
            </AppMiddleware>
        )
    },
    {
        path: '/notes',
        element: (
            <AppMiddleware middleware='auth'>
                <Navigate to="/" replace/>
            </AppMiddleware>
        )
    },
    {
        path: '/notes/new',
        element: (
            <AppMiddleware middleware='auth'>
                <AddNote/>
            </AppMiddleware>
        )
    },
    {
        path: '/notes/:id',
        element: (
            <AppMiddleware middleware='auth'>
                <DetailNotes/>
            </AppMiddleware>
        )
    },
    {
        path: '/*',
        element: (
            <AppMiddleware middleware='auth'>
                <NotFoundPage/>
            </AppMiddleware>
        )
    }
])

export default SetupRoutes