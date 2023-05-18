import { Button, Container, Stack, Typography } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"
import TrackList from "../../components/tracks/TrackList"
import { useRouter } from "next/router"

const index = () => {
    const tracks: ITrack[] = [
        {
            "_id": "645f1a9fb0afc0a8227606f5",
            "name": "Track 2",
            "artist": "MS Glebaty",
            "text": "some text",
            "listens": 0,
            "picture": "image/9443eb5a-03b3-4c7f-9742-5e9eb2df4ff9.jpg",
            "audio": "audio/c90342a7-3ea7-4ca0-bc2a-2f1061636b00.mp3",
            "comments": [
                "645f2d52bc7ab2fe0c376243",
                "645f2d6bbc7ab2fe0c376247"
            ]
        },
        {
            "_id": "645f43cf953a8d57cce45469",
            "name": "Track 1",
            "artist": "Glebaty",
            "text": "some text",
            "listens": 2,
            "picture": "image/9443eb5a-03b3-4c7f-9742-5e9eb2df4ff9.jpg",
            "audio": "audio/c90342a7-3ea7-4ca0-bc2a-2f1061636b00.mp3",
            "comments": []
        },
        {
            "_id": "645f4ad728b6f17c1906af6f",
            "name": "Еще выше",
            "artist": "Glebaty",
            "text": "some text",
            "listens": 0,
            "picture": "image/1b5a5fa8-ecb8-42dd-9cae-017b29c7dbdc.jpg",
            "audio": "audio/acd293ef-cd2e-4b6d-a5f6-69d520961c47.mp3",
            "comments": []
        },
        {
            "_id": "645f4ae128b6f17c1906af71",
            "name": "Numb",
            "artist": "Glebaty",
            "text": "some text",
            "listens": 0,
            "picture": "image/86da45e1-cabe-4097-b734-f8e780fe129b.jpg",
            "audio": "audio/8b318f67-ea59-4cb6-92d8-d6cd602140da.mp3",
            "comments": []
        },
        {
            "_id": "645f1a9fb0afc0a8227606f5",
            "name": "Track 2",
            "artist": "MS Glebaty",
            "text": "some text",
            "listens": 0,
            "picture": "image/9443eb5a-03b3-4c7f-9742-5e9eb2df4ff9.jpg",
            "audio": "audio/c90342a7-3ea7-4ca0-bc2a-2f1061636b00.mp3",
            "comments": [
                "645f2d52bc7ab2fe0c376243",
                "645f2d6bbc7ab2fe0c376247"
            ]
        },
        {
            "_id": "645f43cf953a8d57cce45469",
            "name": "Track 1",
            "artist": "Glebaty",
            "text": "some text",
            "listens": 2,
            "picture": "image/9443eb5a-03b3-4c7f-9742-5e9eb2df4ff9.jpg",
            "audio": "audio/c90342a7-3ea7-4ca0-bc2a-2f1061636b00.mp3",
            "comments": []
        },
        {
            "_id": "645f4ad728b6f17c1906af6f",
            "name": "Еще выше",
            "artist": "Glebaty",
            "text": "some text",
            "listens": 0,
            "picture": "image/1b5a5fa8-ecb8-42dd-9cae-017b29c7dbdc.jpg",
            "audio": "audio/acd293ef-cd2e-4b6d-a5f6-69d520961c47.mp3",
            "comments": []
        },
        {
            "_id": "645f4ae128b6f17c1906af71",
            "name": "Numb",
            "artist": "Glebaty",
            "text": "some text",
            "listens": 0,
            "picture": "image/86da45e1-cabe-4097-b734-f8e780fe129b.jpg",
            "audio": "audio/8b318f67-ea59-4cb6-92d8-d6cd602140da.mp3",
            "comments": []
        }
    ]

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
            <TrackList tracks={tracks}/>
        </Container>
    </MainLayout>
  )
}

export default index