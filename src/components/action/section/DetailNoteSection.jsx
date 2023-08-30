import React from 'react'
import CustomActionSection from '../CustomActionSection'
import EditButton from './../buttonaction/EditButton';
import ArchieveButton from './../buttonaction/ArchieveButton';
import DeleteButton from './../buttonaction/DeleteAction';
import PropTypes from 'prop-types';

const DetailNoteSection = ({archived, onArchive, onDelete}) => {
    return (
        <CustomActionSection pagesection='detail-page'>
            <>
                <ArchieveButton archive={archived} onArchive={onArchive}/>
                <DeleteButton onDelete={onDelete}/>
            </>
        </CustomActionSection>
    )
}

DetailNoteSection.propTypes = {
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}


export default DetailNoteSection