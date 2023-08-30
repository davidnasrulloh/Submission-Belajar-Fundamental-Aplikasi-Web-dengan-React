import React from 'react'
import CustomActionSection from '../CustomActionSection'
import EditButton from './../buttonaction/EditButton';
import ArchieveButton from './../buttonaction/ArchieveButton';
import DeleteButton from './../buttonaction/DeleteAction';
import PropTypes from 'prop-types';

const DetailNoteSection = ({archived, onEdit, onArchive, onDelete}) => {
    return (
        <CustomActionSection pagesection='detail-page'>
            <>
                <EditButton onEdit={onEdit}/>
                <ArchieveButton archive={archived} onArchive={onArchive}/>
                <DeleteButton onDelete={onDelete}/>
            </>
        </CustomActionSection>
    )
}

DetailNoteSection.PropTypes = {
    archived: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}


export default DetailNoteSection