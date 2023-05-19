import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayerState } from "../../types/player";
import { HYDRATE } from 'next-redux-wrapper';
import { ITrack } from "../../types/track";

const initialState: IPlayerState = {
    currentTrack: null,
    volume: 75,
    duration: 0,
    currentTime: 0,
    play: false
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changePlay(state) {
            state.play = !state.play
        },
        changeVolume(state, action: PayloadAction<number>) {
            state.volume = action.payload
        },
        setDuration(state, action: PayloadAction<number>) {
            state.duration = action.payload
        },
        setCurrentTime(state, action: PayloadAction<number>) {
            state.currentTime = action.payload
        },
        setCurrentTrack(state, action: PayloadAction<ITrack>) {
            state.currentTrack = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload.player,
          };
        },
    }
})

export default playerSlice