import React, { FC, useState, MouseEvent } from 'react'
import { Slider, Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles';
import formatTime from '../../../utils/formatTime';

interface TrackProgressBarProps {
    duration: number
    currentTime: number
    changeProgressHandler: (event: Event, newValue: number | number[]) => void
}

const TrackProgressBar: FC<TrackProgressBarProps> = ({ duration, currentTime, changeProgressHandler }) => {
    const TrackProgressBar = styled(Slider)(({ theme }) => ({
        padding: 0,
        zIndex: 2,
        display: 'block',
        height: 14,
        '& .MuiSlider-thumb': {
            display: 'none'
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
    }))

    const [position, setPosition] = React.useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    })

    const [overTime, setOverTime] = useState<string>('')

    const ShowTimeTooltipHandler = (e: MouseEvent<HTMLDivElement>) => {
        setPosition({ x: e.screenX, y: e.currentTarget.getBoundingClientRect().y })
        const overedTime = e.screenX / e.currentTarget.clientWidth * duration
        setOverTime(formatTime(overedTime))
    }
    return (
        <Tooltip
            title={overTime}
            placement="top"
            arrow
            PopperProps={{
                anchorEl: {
                    getBoundingClientRect: () => {
                        return new DOMRect(
                            position.x,
                            position.y,
                            0,
                            0,
                        );
                    },
                },
            }}
        >
            <TrackProgressBar
                value={currentTime}
                onChange={changeProgressHandler}
                min={0}
                max={duration}
                onMouseMove={ShowTimeTooltipHandler}
            />
        </Tooltip>
    )
}

export default TrackProgressBar