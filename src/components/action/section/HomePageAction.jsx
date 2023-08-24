import React from 'react'
import CustomActionSection from '../CustomActionSection'
import AddButton from '../buttonaction/AddButton'
import { useNavigate } from 'react-router-dom'

const HomePageAction = () => {

    const navigate = useNavigate()

    const onAddHandler = () => {
        navigate('/notes/new')
    }

    return (
        <CustomActionSection pagesection="homepage">
            <AddButton 
                onAdd={onAddHandler}
                />
        </CustomActionSection>
    )
}

export default HomePageAction