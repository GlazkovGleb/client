import { Box, Grid, IconButton, Stack, Slider, Typography } from '@mui/material'
import React, { FC, useState, useEffect } from 'react'
import styles from '../../../styles/Player.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import IosShareIcon from '@mui/icons-material/IosShare';
import useAppSelector from '../../../hook/useAppSelector';
import useActions from '../../../hook/useActions';
import TrackProgressBar from './TrackProgressBar';
import VolumeSlider from './VolumeSlider';
import baseURL from '../../../consts/baseURL';


let audio: HTMLAudioElement

const Player: FC = () => {
    const { play, volume, currentTime, currentTrack, duration } = useAppSelector(state => state.player)
    const { changePlay, changeVolume, setCurrentTime, setDuration } = useActions()

    const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false)

    useEffect(() => {
        if (audio) {
            setAudioHandler()
            changePlay()  
        } else {
            audio = new Audio
        }
    }, [currentTrack])

    useEffect(() => {
        if (play) {
            audio.play()        
        } else {
            audio.pause()
        }
    }, [play])

    const setAudioHandler = () => {
        if (!currentTrack) {
            return
        }
        audio.src = baseURL + '/' + currentTrack.audio
        audio.volume = volume / 100
        audio.onloadedmetadata = () => {
            setDuration(audio.duration)
        }
        audio.ontimeupdate = () => {
            setCurrentTime(audio.currentTime)
        }
    }

    const changeVolumeHandler = (event: Event, newValue: number | number[]) => {
        audio.volume = newValue as number / 100
        changeVolume(newValue as number);
    }

    const changeProgressHandler = (event: Event, newValue: number | number[]) => {
        audio.currentTime = newValue as number
        setCurrentTime(newValue as number);
    }

    if (!currentTrack) {
        return null
    }

    return (
        <div className={styles.wrap}>
            <TrackProgressBar
                currentTime={currentTime}
                duration={duration}
                changeProgressHandler={changeProgressHandler}
            />
            <div className={styles.player}>
                <Grid container>
                    <Grid
                        item
                        xs={11}
                        pl={12}
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <IconButton color='primary'>
                            <FastRewindIcon fontSize='large' />
                        </IconButton>
                        <IconButton
                            color='primary'
                            onClick={() => changePlay()}
                        >
                            {
                                play
                                    ?
                                    <PauseCircleIcon fontSize='large' />
                                    :
                                    <PlayCircleIcon fontSize='large' />
                            }
                        </IconButton>
                        <IconButton color='primary'>
                            <FastForwardIcon fontSize='large' />
                        </IconButton>
                        <Stack
                            direction={'row'}
                            px={2}
                        >
                            <img width={50} height={50} src={baseURL + '/' + currentTrack.picture} alt={currentTrack.name} />
                            <Box ml={2}>
                                <Typography variant='body1' fontWeight={'bold'}>{currentTrack?.name}</Typography>
                                <Typography variant='body2'>{currentTrack?.artist}</Typography>
                            </Box>
                        </Stack>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                        <IconButton>
                            <IosShareIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <VolumeSlider
                            volume={volume}
                            showVolumeSlider={showVolumeSlider}
                            setShowVolumeSlider={setShowVolumeSlider}
                            changeVolumeHandler={changeVolumeHandler}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Player