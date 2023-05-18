import { useState } from "react"
import StepForm from "../../components/tracks/StepForm"
import MainLayout from "../../layouts/MainLayout"
import { Button, TextField, Box, IconButton, Typography, Link } from "@mui/material"
import { Stack } from "@mui/system"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FileUpload from "../../components/tracks/FileUpload"

const Create = () => {
    const [activeStep, setActiveStep] = useState<number>(0)

    const nextStepHandler = () => {
        setActiveStep(prev => prev += 1)
    }
    const backStepHandler = () => {
        setActiveStep(prev => prev -= 1)
    }
    return (
        <MainLayout>
            <StepForm activeStep={activeStep}>
                <>
                    {activeStep === 0 &&
                        <>
                            <TextField fullWidth placeholder='Введите название трека' margin='dense' color='primary' />
                            <TextField fullWidth placeholder='Введите имя автора' margin='dense' color='primary' />
                            <TextField fullWidth placeholder='Текст песни' margin='dense' color='primary' multiline minRows={3} />
                        </>
                    }
                    {activeStep === 1 &&
                        <FileUpload
                            icon={<AddPhotoAlternateIcon
                                sx={{ fontSize: 250 }}
                                color="primary"
                            />}
                            accept="image/*"
                        />
                    }
                    {activeStep === 2 &&
                        <FileUpload
                            icon={<LibraryMusicIcon
                                sx={{ fontSize: 250 }}
                                color="primary"
                            />}
                            accept="audio/*"
                        />
                    }
                    {activeStep === 3
                        ?
                        <Stack justifyContent={'center'} height={350}>
                            <Typography variant="h4" textAlign={'center'} mb={8}>Трек успешно добавлен!</Typography>
                            <Link
                                component="button"
                                variant="h6"
                                underline="hover"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                Перейти к треку
                            </Link>
                        </Stack>

                        :
                        <Stack justifyContent={'space-between'} direction={'row'} mt={4}>
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={activeStep === 0}
                                onClick={backStepHandler}
                            >
                                Назад
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={nextStepHandler}
                            >
                                Дальше
                            </Button>
                        </Stack>
                    }
                </>
            </StepForm>
        </MainLayout>
    )
}

export default Create