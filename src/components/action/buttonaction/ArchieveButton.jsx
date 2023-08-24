import React from 'react'
import PropTypes from 'prop-types'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'

const ArchieveButton = ({archive, onArchive}) => {
    return (
        <>
            <CustomButton
                title={archive ? 'Aktifkan' : 'Arsipkan'}
                icons={archive ? <BiArchiveOut/> : <BiArchiveIn/>}
                onClick={onArchive}
            />
        </>
    )
}

ArchieveButton.propTypes = {
    archive: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default ArchieveButton