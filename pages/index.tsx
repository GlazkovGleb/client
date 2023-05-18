import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import MainLayout from '../layouts/MainLayout'

const index = () => {


    return (
        <MainLayout>
            <Stack justifyContent={'center'} alignItems={'center'} mt={12}>
                <Typography variant='h3' mb={2}>Просто музыка</Typography>
                <Typography variant='h4'>Здесь собрана просто лучшая музыка!</Typography>
            </Stack>
        </MainLayout>
    )
}

export default index