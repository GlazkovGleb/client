import { IconButton, Slider } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import styles from '../../../styles/Player.module.css'

interface VolumeSliderProps {
    volume: number
    showVolumeSlider: boolean
    setShowVolumeSlider: (showVolumeSlider: boolean) => void
    changeVolumeHandler: (event: Event, newValue: number | number[]) => void
}

const VolumeSlider: FC<VolumeSliderProps> = ({ volume, showVolumeSlider, setShowVolumeSlider, changeVolumeHandler}) => {
    const ShowVolumeSliderHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setShowVolumeSlider(!showVolumeSlider)
    }

    useEffect(() => {
        if (showVolumeSlider) {
            document.addEventListener('click', () => setShowVolumeSlider(false))
        }
        return (() => document.removeEventListener('click', () => setShowVolumeSlider(false)))
    }, [showVolumeSlider])

    return (
        <>
            <div
                onClick={
                    (e: React.MouseEvent<HTMLDivElement>) =>
                        e.stopPropagation()
                }
                className={showVolumeSlider ? styles.sliderWrapActive : styles.sliderWrap}
            >
                <Slider
                    value={volume}
                    onChange={changeVolumeHandler}
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
        </>
    )
}

export default VolumeSlider