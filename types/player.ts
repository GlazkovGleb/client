import { ITrack } from "./track";

export interface IPlayerState {
    currentTrack: ITrack | null
    volume: number
    duration: number
    currentTime: number
    play: boolean
}
