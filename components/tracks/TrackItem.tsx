import React, { FC } from 'react'
import { ITrack } from '../../types/track'
import { Grid, IconButton, Paper, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({ track, active }) => {
    const router = useRouter()

    return (
        <Box my={2} >
            <Paper elevation={2}>
                <Grid container px={3} py={1}>
                    <Grid item xs={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <IconButton color="primary">
                            {active
                                ?
                                <PauseCircleIcon sx={{ fontSize: '46px' }} />
                                :
                                <PlayCircleIcon sx={{ fontSize: '46px' }} />
                            }
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <img width={70} height={70} src='https://cdns-images.dzcdn.net/images/cover/7058811aa85af6e226def2cf1964e71b/264x264.jpg' />
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        onClick={() => router.push(`/tracks/${track._id}`)}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Typography variant='h6' mb={2}>{track.name}</Typography>
                        <Typography variant='body2'>{track.artist}</Typography>
                    </Grid>
                    <Grid item xs={2} display={'flex'} alignItems={'end'} justifyContent={'end'}>
                        <Typography variant='body2'>00:00 / 2:46</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default TrackItem