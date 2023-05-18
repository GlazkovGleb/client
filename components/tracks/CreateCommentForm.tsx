import { Paper, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'

interface CreateCommentFormProps {

}

const CreateCommentForm: FC<CreateCommentFormProps> = ({}) => {
    return (
        <Box>
            <Paper elevation={3}>
                <Box p={2}>
                    <TextField fullWidth placeholder='Ваше имя' margin='dense' color='primary' />
                    <TextField fullWidth placeholder='Комментарий' margin='dense' color='primary' multiline minRows={3} />
                    <Box display={'flex'} justifyContent={'end'} my={2} mr={4}>
                        <Button variant='contained' color='secondary'>Отправить</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default CreateCommentForm
