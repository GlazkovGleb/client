import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { ITrack } from '../types/track'
import { HYDRATE } from 'next-redux-wrapper'
import baseURL from '../consts/baseURL'

export const trackApi = createApi({
    reducerPath: 'TrackAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
      },
    tagTypes: ['Track'],
    endpoints: (build) => ({
        fetchAllTracks: build.query<ITrack[], number>({
            query: (count) => ({
                url: '/tracks',
                params: {
                    count 
                }
            }),
            providesTags: result => ['Track']
        }),
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: '/posts',
        //         method: 'POST',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // updatePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'PUT',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // deletePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Post']
        // }),
    })
})

export const { useFetchAllTracksQuery } = trackApi