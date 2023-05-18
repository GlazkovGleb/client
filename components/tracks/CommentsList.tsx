import React, { FC } from 'react'
import { IComment } from '../../types/track'
import { Paper, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
 
interface CommentsProps {
    comments: IComment[]
}

const CommentsList: FC<CommentsProps> = ({ comments }) => {

    const CommentItem = styled(Paper)(({ theme }) => ({
        margin: theme.spacing(2, 0),
        padding: theme.spacing(2, 4),
        border: `3px solid ${theme.palette.primary.main}`,
        borderRadius: '10px'
    }));

    return (
        <Paper elevation={3}>
            <Box p={4}>
                {comments.map(comment =>
                    <CommentItem key={comment._id} >
                        <Typography variant='body1' mb={1}>{comment.username}</Typography>
                        <Typography variant='body2'>{comment.text}</Typography>
                    </CommentItem>
                )}
            </Box>
        </Paper>
    )
}

export default CommentsList