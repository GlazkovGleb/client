import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import { ITrack, ITrackState } from "../../types/track";

const initialState: ITrackState = {
    tracks: [],
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {},
    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload.player,
          };
        },
    }
    // extraReducers: {
    //     [fetchUsers.pending.type]: (state) => {
    //         state.loading = true
    //     },
    //     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
    //         state.loading = false
    //         state.users = action.payload
    //         state.error = null
    //     },
    //     [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.loading = false
    //         state.error = action.payload
    //     },
    // }
})

export default playerSlice