import React, { FC, useState } from 'react'
import { ITrack } from '../../types/track'
import { Grid, IconButton, Paper, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import useAppSelector from '../../hook/useAppSelector';
import useActions from '../../hook/useActions';
import baseURL from '../../consts/baseURL';

interface TrackItemProps {
    track: ITrack
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
    const router = useRouter()
    const { play, currentTrack } = useAppSelector(state => state.player)
    const { changePlay, setCurrentTrack } = useActions()

    const playHandler = () => {
        if (currentTrack?._id !== track._id) {
            setCurrentTrack(track)
            if (play) {
                changePlay()
            }
        } else {
            changePlay()
        }    
    }

    return (
        <Box my={2} >
            <Paper elevation={2}>
                <Grid container px={3} py={1}>
                    <Grid item xs={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <IconButton
                            color="primary"
                            onClick={playHandler}
                        >
                            {(play && currentTrack?._id === track._id)
                                ?
                                <PauseCircleIcon sx={{ fontSize: '46px' }} />
                                :
                                <PlayCircleIcon sx={{ fontSize: '46px' }} />
                            }
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <img width={70} height={70} src={baseURL + '/' + track.picture} />
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