import { Paper, Step, StepLabel, Stepper } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { FC, PropsWithChildren } from 'react'

interface StepFormProps {
    activeStep: number
}

const StepForm: FC<PropsWithChildren<StepFormProps>> = ({ activeStep, children }) => {
    const steps = ['Заполните информацию о треке', 'Добавьте обложку для трека', 'Загрузите сам трек']
    return (
        <Container>
            <Box
                mt={4}
            >
                <Stepper activeStep={activeStep} >
                    {steps.map((step, index) =>
                        <Step
                            key={index}
                            completed={activeStep > index}
                        >
                            <StepLabel >
                                {step}
                            </StepLabel>
                        </Step>
                    )}
                </Stepper>
            </Box>
            <Stack justifyContent={'center'} alignItems={'center'} minHeight={350} mt={6} >
                <Paper elevation={3} sx={{width: '75%', height: '100%'}}>
                    <Box p={4}>
                        {children}
                    </Box>
                </Paper>
            </Stack>
        </Container>
    )
}

export default StepForm