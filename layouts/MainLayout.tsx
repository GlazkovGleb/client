import { ThemeProvider } from "@emotion/react"
import Navbar from "../components/navbar"
import { theme } from "../styles/theme"
import Player from "../components/tracks/Player/Player"

const MainLayout = (props: React.PropsWithChildren) => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar>
                {props.children}        
            </Navbar>
            <Player/>           
        </ThemeProvider>
    )
}

export default MainLayout