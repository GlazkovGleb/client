import { IconButton, Stack } from '@mui/material'
import React, { FC } from 'react'

interface FileUploadProps {
    icon: React.ReactNode
    accept: string
}

const FileUpload: FC<FileUploadProps> = ({ icon, accept }) => {
    return (
        <Stack justifyContent={'center'} alignItems={'center'}>
            <IconButton component="label" sx={{ borderRadius: '10px' }}>
                <input hidden accept={accept} type="file" />
                {icon}
            </IconButton>
        </Stack>
    )
}

export default FileUpload