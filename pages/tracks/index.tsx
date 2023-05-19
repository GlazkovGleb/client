import { Button, Container, Stack, Typography } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"
import TrackList from "../../components/tracks/TrackList"
import { useRouter } from "next/router"
import { useFetchAllTracksQuery } from '../../services/TrackService'

const index = () => {

    const { data: tracks, isError } = useFetchAllTracksQuery(5)
    
    const router = useRouter()
    return (
        <MainLayout>
            <Container>
                <Stack
                    justifyContent={'space-between'}
                    direction={'row'}
                    my={4}
                    px={8}
                >
                    <Typography
                        variant="h4"
                    >Список треков</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => router.push('/tracks/create')}
                    >Загрузить</Button>
                </Stack>
                {
                    tracks &&
                    <TrackList tracks={tracks} />
                }     
            </Container>
        </MainLayout>
    )
}

export default index