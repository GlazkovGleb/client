export default function formatTime (time: number): string {
    const minute = Math.floor(time / 60);
    const secondLeft = Math.ceil(time) - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}