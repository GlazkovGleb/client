import { Accordion, AccordionDetails, AccordionSummary, Container, Stack, Typography } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"
import { ITrackDetail } from "../../types/track"
import { Box } from "@mui/system"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateCommentForm from "../../components/tracks/CreateCommentForm";
import CommentsList from "../../components/tracks/CommentsList";

const TrackDetail = () => {
    const track: ITrackDetail = {
        "_id": "645f1a9fb0afc0a8227606f5",
        "name": "Track 2",
        "artist": "MS Glebaty",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae explicabo nostrum quaerat at optio inventore maiores ad consequuntur dignissimos deleniti facilis eius quod! Aliquam assumenda fugiat porro aperiam soluta! Incidunt, officiis nostrum magni, porro qui harum accusantium at veniam quia voluptatem placeat laboriosam modi nesciunt quibusdam quam quas et temporibus beatae nam culpa dolores error ut quo natus. Repellat repudiandae enim nemo consequatur incidunt! Commodi qui tenetur ipsum nemo consequatur vero debitis exercitationem? Sunt facere nam voluptates perferendis repellat, explicabo provident iusto error laudantium? Laboriosam sint iusto nemo corporis molestias maiores, reiciendis quidem veniam incidunt rerum, quis, animi earum",
        "listens": 0,
        "picture": "image/9443eb5a-03b3-4c7f-9742-5e9eb2df4ff9.jpg",
        "audio": "audio/c90342a7-3ea7-4ca0-bc2a-2f1061636b00.mp3",
        "comments": [
            { _id: '1', username: 'Gleb', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni delectus numquam, provident quod molestias, adipisci possimus accusantium repudiandae quaerat quibusdam quasi nam. Molestias velit tempora minima nihil repudiandae, non distinctio omnis eaque eveniet numquam assumenda architecto voluptates mollitia modi rem obcaecati excepturi quas provident quos. Numquam atque perspiciatis dolore doloribus maxime enim, eaque ducimus similique consequatur provident, voluptatum, illo obcaecati neque rem excepturi ea. Delectus ad repellendus temporibus sunt autem molestias ullam distinctio id ratione. Harum distinctio quisquam rem ullam natus quidem, architecto rerum velit earum magnam eius id animi illum aperiam optio aut reprehenderit impedit nemo obcaecati tempora' },
            { _id: '2', username: 'Gleb', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni delectus numquam, provident quod molestias, adipisci possimus accusantium repudiandae quaerat quibusdam quasi nam. Molestias velit tempora minima nihil repudiandae, non distinctio omnis eaque eveniet numquam assumenda architecto voluptates mollitia modi rem obcaecati excepturi quas provident quos. Numquam atque perspiciatis dolore doloribus maxime enim, eaque ducimus similique consequatur provident, voluptatum, illo obcaecati neque rem excepturi ea. Delectus ad repellendus temporibus sunt autem molestias ullam distinctio id ratione. Harum distinctio quisquam rem ullam natus quidem, architecto rerum velit earum magnam eius id animi illum aperiam optio aut reprehenderit impedit nemo obcaecati tempora' },
            { _id: '3', username: 'Gleb', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni delectus numquam, provident quod molestias, adipisci possimus accusantium repudiandae quaerat quibusdam quasi nam. Molestias velit tempora minima nihil repudiandae, non distinctio omnis eaque eveniet numquam assumenda architecto voluptates mollitia modi rem obcaecati excepturi quas provident quos. Numquam atque perspiciatis dolore doloribus maxime enim, eaque ducimus similique consequatur provident, voluptatum, illo obcaecati neque rem excepturi ea. Delectus ad repellendus temporibus sunt autem molestias ullam distinctio id ratione. Harum distinctio quisquam rem ullam natus quidem, architecto rerum velit earum magnam eius id animi illum aperiam optio aut reprehenderit impedit nemo obcaecati tempora' },
        ]
    }

    return (
        <MainLayout>
            <Container>
                <Stack direction={'row'} my={4}>
                    <Box mr={8}>
                        <img width={200} height={200} src='https://cdns-images.dzcdn.net/images/cover/7058811aa85af6e226def2cf1964e71b/264x264.jpg' />
                    </Box>
                    <Box>
                        <Typography variant="h4" mb={2} color={'gray'}>{track.artist}</Typography>
                        <Typography variant="h3" mb={2}>{track.name}</Typography>
                        <Typography variant="h6">Прослушали {track.listens} раз</Typography>
                    </Box>
                </Stack>
                <Box my={6}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">Текст песни</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box width={'50%'} margin={'auto'} my={2}>
                                <Typography>
                                    {track.text}
                                </Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box mb={4}>
                    <CreateCommentForm />
                </Box>
                <Box mb={4}>
                    <CommentsList comments={track.comments} />
                </Box>


            </Container>
        </MainLayout>
    )
}

export default TrackDetail