import React from 'react'
import CustomActionSection from '../CustomActionSection'
import { useNavigate } from 'react-router-dom'
import CloseButton from './../buttonaction/CloseButton';
import CheckButton from './../buttonaction/CheckButton';
import PropTypes from 'prop-types';

const AddNewNoteSection = ({ onSaveNote }) => {
    
    const navigate = useNavigate();

    return (
        <CustomActionSection pagesection='add-new-page'>
            <>
                <CloseButton onClose={() => navigate('/')}/>
                <CheckButton onCheck={onSaveNote}/>
            </>
        </CustomActionSection>
    )
}

AddNewNoteSection.propTypes = {
    onSaveNote: PropTypes.func.isRequired,
}

export default AddNewNoteSection