import { Box, Grid, IconButton, Stack, Slider, Typography } from '@mui/material'
import React, { FC, useState, useEffect } from 'react'
import styles from '../../styles/Player.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import IosShareIcon from '@mui/icons-material/IosShare';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { styled } from '@mui/material/styles';


interface PlayerProps {

}

const Player: FC<PlayerProps> = ({ }) => {
    const [progress, setProgress] = useState<number>(40)
    const [play, setPlay] = useState<boolean>(false)
    const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false)

    const [volume, setVolume] = useState<number>(30)

    const ChangeVolumeHandler = (event: Event, newValue: number | number[]) => {
        setVolume(newValue as number);
    }

    const ChangeProgressHandler = (event: Event, newValue: number | number[]) => {
        setProgress(newValue as number);
    }

    const ShowVolumeSliderHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setShowVolumeSlider(prev => !prev)
    }

    useEffect(() => {
        if (showVolumeSlider) {
            document.addEventListener('click', () => setShowVolumeSlider(false))
        }
        return (() => document.removeEventListener('click', () => setShowVolumeSlider(false)))
    }, [showVolumeSlider])

    const ProgressSlider = styled(Slider)(({ theme }) => ({
        padding: 0,
        zIndex: 2,
        display: 'block',
        height: 10,
        '& .MuiSlider-thumb': {
            display: 'none',
        },
        '& .MuiSlider-track': {
            border: 'none',
            borderRadius: 0,
            backgroundColor: theme.palette.primary.main,
        },
        '& .MuiSlider-rail': {
            opacity: 1,
            backgroundColor: '#bfbfbf',
            borderRadius: 0,
        }
    }));

    return (
        <div className={styles.wrap}>
            <ProgressSlider value={progress} onChange={ChangeProgressHandler} />
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
                            onClick={() => setPlay(prev => !prev)}
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
                            <img width={50} height={50} src="https://cdns-images.dzcdn.net/images/cover/7058811aa85af6e226def2cf1964e71b/264x264.jpg" alt="" />
                            <Box ml={2}>
                                <Typography variant='body1' fontWeight={'bold'}>Название трека</Typography>
                                <Typography variant='body2'>Автор</Typography>
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
                        <div
                            onClick={
                                (e: React.MouseEvent<HTMLDivElement>) =>
                                    e.stopPropagation()
                            }
                            className={showVolumeSlider ? styles.sliderWrapActive : styles.sliderWrap}
                        >
                            <Slider
                                value={volume}
                                onChange={ChangeVolumeHandler}
                                orientation="vertical"
                                sx={{
                                    height: 120,
                                }}
                            />
                        </div>
                        <IconButton
                            color='primary'
                            onClick={ShowVolumeSliderHandler}
                        >
                            {volume >= 50 &&
                                <VolumeUpIcon fontSize='large' />
                            }
                            {(volume < 50 && volume > 0) &&
                                <VolumeDownIcon fontSize='large' />
                            }
                            {volume === 0 &&
                                <VolumeOffIcon fontSize='large' />
                            }

                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Player