import React from 'react'
import CustomActionSection from '../CustomActionSection'
import EditButton from './../buttonaction/EditButton';
import ArchieveButton from './../buttonaction/ArchieveButton';
import DeleteButton from './../buttonaction/DeleteAction';

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

export default DetailNoteSection