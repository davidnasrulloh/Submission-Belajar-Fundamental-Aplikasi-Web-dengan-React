import React from 'react'
import CustomActionSection from '../CustomActionSection'
import PropTypes from 'prop-types';
import CheckButton from './../buttonaction/CheckButton';

const EditNotesSection = ({onSaveNote}) => {
    return (
        <CustomActionSection pagesection='detail-page'>
            <CheckButton onCheck={onSaveNote}/>
        </CustomActionSection>
    )
}

EditNotesSection.propTypes = {
    onSaveNote: PropTypes.func.isRequired
}

export default EditNotesSection