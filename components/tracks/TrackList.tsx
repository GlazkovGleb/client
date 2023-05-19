import React, { FC } from 'react'
import { ITrack } from '../../types/track'
import { Box } from '@mui/material'
import TrackItem from './TrackItem'

interface TrackListProps {
    tracks: ITrack[] 
}

const TrackList: FC<TrackListProps> = ({tracks}) => {
    return (
        <Box>
            {tracks.map(track => 
                <TrackItem track={track} key={track._id}/>
                )}
        </Box>
    )   
}

export default TrackList