export interface IComment {
    _id: string
    username: string
    text: string
}

export interface ITrack {
    _id: string
    name: string
    text: string
    artist: string
    listens: number
    picture: string
    audio: string
    comments: string[]
}

export interface ITrackDetail {
    _id: string
    name: string
    text: string
    artist: string
    listens: number
    picture: string
    audio: string
    comments: IComment[]
}